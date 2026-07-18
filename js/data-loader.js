// ============================================
// CHINESE MASTER — Data Loader (JSONL-based)
// Lazy-loads vocabulary data from compact JSONL files.
// Populates global namespace with { words, count, getByCategory, getRandom, getById } objects.
// Falls back to legacy <script>-loaded globals when JSONL unavailable.
// ============================================
var DataLoader = (function () {

    var cache = {};
    var pending = {};
    var readyPromise = null;
    var api = null;

    var registry = {
        hsk1: 'data/vocabulary-hsk1.jsonl',
        hsk2: 'data/vocabulary-hsk2.jsonl',
        hsk3: 'data/vocabulary-hsk3.jsonl',
        hsk4: 'data/vocabulary-hsk4.jsonl',
        hsk5: 'data/vocabulary-hsk5.jsonl',
        hsk4_5: 'data/vocabulary-hsk4-5.jsonl',
        vocabulary: 'data/vocabulary-extended.jsonl'
    };

    var globalMap = {
        hsk1: 'HSK1',
        hsk2: 'HSK2',
        hsk3: 'HSK3',
        hsk4: 'HSK4',
        hsk5: 'HSK5',
        hsk4_5: 'HSK4_5',
        vocabulary: 'VocabularyData'
    };

    function buildVocabObj(words) {
        var data = { words: words };
        Object.defineProperty(data, 'count', {
            get: function () { return words.length; },
            enumerable: true, configurable: true
        });
        data.getByCategory = function (cat) {
            return words.filter(function (w) { return w.category === cat; });
        };
        data.getRandom = function (n) {
            if (!n) n = 1;
            var count = Math.min(n, words.length);
            if (n === 1) return words[Math.floor(Math.random() * words.length)];

            // ⚡ Bolt optimization: Avoid O(N) array copy/shuffle when picking a small subset
            // of a large dataset. Fallback to full shuffle only if we need > 50% of the items.
            if (count > words.length / 2) {
                var copy = words.slice();
                for (var i = copy.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
                }
                return copy.slice(0, count);
            }

            // Fast O(K) selection using Set to track seen indices
            var result = [];
            var seen = new Set();
            while (result.length < count) {
                var idx = Math.floor(Math.random() * words.length);
                if (!seen.has(idx)) {
                    seen.add(idx);
                    result.push(words[idx]);
                }
            }
            return result;
        };
        data.getById = function (id) {
            for (var i = 0; i < words.length; i++) {
                if (words[i].id === id) return words[i];
            }
            return undefined;
        };
        return data;
    }

    function parseJSONL(text) {
        var lines = text.split('\n');
        var result = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line) {
                result.push(JSON.parse(line));
            }
        }
        return result;
    }

    function loadJSONL(path) {
        if (cache[path]) return cache[path];
        if (pending[path]) return pending[path];

        // file:// blocks fetch() with CORS — reject early so callers fall back to legacy globals
        if (typeof location !== 'undefined' && location.protocol === 'file:') {
            return Promise.reject(new Error('fetch unavailable on file:// protocol: ' + path));
        }

        pending[path] = fetch(path).then(function (resp) {
            if (!resp.ok) throw new Error('HTTP ' + resp.status + ' for ' + path);
            return resp.text();
        }).then(function (text) {
            var words = parseJSONL(text);
            var data = buildVocabObj(words);
            cache[path] = data;
            delete pending[path];
            return data;
        }).catch(function (err) {
            delete pending[path];
            console.warn('DataLoader: failed to load ' + path, err);
            throw err;
        });

        return pending[path];
    }

    function loadLevel(level) {
        var path = registry[level];
        if (!path) return Promise.reject(new Error('Unknown level: ' + level));
        return Promise.resolve(loadJSONL(path)).then(function (data) {
            var globalName = globalMap[level];
            if (globalName) {
                window[globalName] = data;
            }
            return data;
        }).catch(function (err) {
            var legacy = getLegacyGlobal(level);
            if (legacy) {
                var globalName = globalMap[level];
                if (globalName) window[globalName] = legacy;
                if (path) cache[path] = legacy;
                return legacy;
            }
            throw err;
        });
    }

    function getLegacyGlobal(level) {
        var name = globalMap[level];
        if (!name) return null;
        // Top-level `const`/`let` in classic scripts live in the global lexical
        // environment, not on `window`. Indirect eval reads that scope.
        try {
            var v = (0, eval)(name);
            if (typeof v !== 'undefined' && v !== null) return v;
        } catch (e) { /* not declared — ignore */ }
        if (typeof window[name] !== 'undefined') return window[name];
        return null;
    }

    function getWords(level) {
        var path = registry[level];
        if (path && !cache[path] && !pending[path]) {
            (api ? api.loadLevel(level) : loadLevel(level)).catch(function () {});
        }
        if (!path) {
            var legacy = getLegacyGlobal(level);
            return legacy ? legacy.words : [];
        }
        if (cache[path]) return cache[path].words;
        var legacy = getLegacyGlobal(level);
        return legacy ? legacy.words : [];
    }

    function getWordCount(level) {
        var path = registry[level];
        if (path && !cache[path] && !pending[path]) {
            (api ? api.loadLevel(level) : loadLevel(level)).catch(function () {});
        }
        if (!path) {
            var legacy = getLegacyGlobal(level);
            return legacy ? legacy.count : 0;
        }
        if (cache[path]) return cache[path].count;
        var legacy = getLegacyGlobal(level);
        return legacy ? legacy.count : 0;
    }

    function populateGlobals() {
        var activeLvl = 1;
        try {
            if (typeof StorageManager !== 'undefined') {
                var userData = StorageManager.getUserData();
                if (userData) {
                    if (userData.placementResult && userData.placementResult.level) {
                        activeLvl = parseInt(userData.placementResult.level);
                    } else if (typeof LevelTracker !== 'undefined' && LevelTracker.userData && LevelTracker.userData.level) {
                        activeLvl = parseInt(LevelTracker.userData.level);
                    } else if (userData.level) {
                        if (userData.level <= 5) activeLvl = 1;
                        else if (userData.level <= 10) activeLvl = 2;
                        else if (userData.level <= 15) activeLvl = 3;
                        else if (userData.level <= 20) activeLvl = 4;
                        else activeLvl = 5;
                    }
                }
            }
        } catch (e) {
            console.warn('DataLoader: failed to determine active level', e);
        }

        var activeKey = 'hsk' + activeLvl;
        var keysToLoad = [activeKey];

        if (activeLvl === 4 || activeLvl === 5) {
            keysToLoad.push('hsk4_5');
        }

        keysToLoad.push('vocabulary');

        var promises = keysToLoad.map(function (key) {
            return (api ? api.loadLevel(key) : loadLevel(key)).catch(function () { return null; });
        });

        var allKeys = Object.keys(registry);
        allKeys.forEach(function (key) {
            if (keysToLoad.indexOf(key) === -1) {
                var legacy = getLegacyGlobal(key);
                if (legacy) {
                    var globalName = globalMap[key];
                    if (globalName) window[globalName] = legacy;
                    var p = registry[key];
                    if (p) cache[p] = legacy;
                }
            }
        });

        readyPromise = Promise.allSettled(promises).then(function () {
            if (typeof App !== 'undefined' && App.DEBUG) {
                console.log('DataLoader: active globals populated for level ' + activeLvl);
            }
        });
        return readyPromise;
    }

    function ready() {
        return readyPromise || Promise.resolve();
    }

    function preloadLevel(level) {
        return (api ? api.loadLevel(level) : loadLevel(level)).catch(function () { return null; });
    }

    api = {
        registry: registry,
        loadLevel: loadLevel,
        loadJSONL: loadJSONL,
        getWords: getWords,
        getWordCount: getWordCount,
        populateGlobals: populateGlobals,
        preloadLevel: preloadLevel,
        ready: ready,
        buildVocabObj: buildVocabObj,
        parseJSONL: parseJSONL
    };
    return api;

})();
