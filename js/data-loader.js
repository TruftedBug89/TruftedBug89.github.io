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

    var registry = {
        hsk1: 'data/vocabulary-hsk1.jsonl',
        hsk2: 'data/vocabulary-hsk2.jsonl',
        hsk3: 'data/vocabulary-hsk3.jsonl',
        hsk4: 'data/vocabulary-hsk4.jsonl',
        hsk5: 'data/vocabulary-hsk5.jsonl',
        vocabulary: 'data/vocabulary-extended.jsonl'
    };

    var globalMap = {
        hsk1: 'HSK1',
        hsk2: 'HSK2',
        hsk3: 'HSK3',
        hsk4: 'HSK4',
        hsk5: 'HSK5',
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
            var copy = words.slice();
            for (var i = copy.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
            }
            return n === 1 ? copy[0] : copy.slice(0, n);
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
        return loadJSONL(path);
    }

    function getLegacyGlobal(level) {
        var name = globalMap[level];
        if (!name) return null;
        if (typeof window[name] !== 'undefined') return window[name];
        return null;
    }

    function getWords(level) {
        var path = registry[level];
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
        if (!path) {
            var legacy = getLegacyGlobal(level);
            return legacy ? legacy.count : 0;
        }
        if (cache[path]) return cache[path].count;
        var legacy = getLegacyGlobal(level);
        return legacy ? legacy.count : 0;
    }

    function populateGlobals() {
        var keys = Object.keys(registry);
        var promises = keys.map(function (key) {
            return loadLevel(key).then(function (data) {
                var globalName = globalMap[key];
                if (globalName) {
                    window[globalName] = data;
                }
                return data;
            }).catch(function () {
                return null;
            });
        });
        readyPromise = Promise.allSettled(promises).then(function () {
            if (typeof App !== 'undefined' && App.DEBUG) {
                console.log('DataLoader: globals populated');
            }
        });
        return readyPromise;
    }

    function ready() {
        return readyPromise || Promise.resolve();
    }

    function preloadLevel(level) {
        return loadLevel(level).catch(function () { return null; });
    }

    return {
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

})();
