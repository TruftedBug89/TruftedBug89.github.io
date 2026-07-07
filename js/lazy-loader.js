// ============================================
// CHINESE MASTER — Lazy Data Loader
// Dynamically loads per-module data files on demand.
// Trims initial payload from ~15MB to ~2MB.
// ============================================

var LazyLoader = (function () {
    'use strict';

    // Map of module id → array of data file paths (relative to root)
    var moduleFiles = {
        vocabulary: [
            'data/vocabulary-extended.js',
            'data/mega-vocabulary.js',
            'data/vocabulary-mega.js',
            'data/hsk1-massive.js',
            'data/hsk2-massive.js',
            'data/hsk3-massive.js',
            'data/hsk4-massive.js',
            'data/hsk-quadruple.js',
            'data/topic-daily.js',
            'data/topic-food.js',
            'data/topic-travel.js',
            'data/topic-business.js',
            'data/topic-technology.js',
            'data/topic-nature.js',
            'data/topic-emotions.js',
            'data/topic-entertainment.js',
            'data/topic-education.js',
            'data/topic-health.js',
            'data/topic-sports.js'
        ],
        listening: [
            'data/listening-extended.js',
            'data/listening-mega.js',
            'data/listening-quadruple.js',
            'data/listening-comp-extra.js',
            'data/listening-comp-plus.js',
            'data/listening-minimalpairs.js',
            'data/listening-dialogue-extra.js',
            'data/listening-dialogue-plus.js',
            'data/listening-speed.js',
            'data/listening-shadow.js',
            'data/listening-shadow-plus.js',
            'data/listening-dictation-plus.js',
            'data/listening-comprehension-extra.js'
        ],
        reading: [
            'data/reading-mega.js',
            'data/reading-quadruple.js',
            'data/reading-examples.js',
            'data/reading-massive-extra.js',
            'data/reading-radicals-plus.js',
            'data/reading-context-plus.js',
            'data/reading-passage-plus.js',
            'data/reading-sentence-plus.js',
            'data/reading-speed-plus.js',
            'data/reading-advanced-extra.js',
            'data/advanced-reading.js',
            'data/mega-reading.js',
            'data/hsk-reading-massive.js',
            'data/reading-charmatch-extra.js',
            'data/reading-passage-extra.js',
            'data/real-world-phrases-quadruple.js'
        ],
        grammar: [
            'data/grammar-mega.js',
            'data/grammar-plus.js',
            'data/grammar-quadruple.js',
            'data/grammar-extra.js'
        ],
        speaking: [
            'data/speaking-mega.js',
            'data/speaking-plus.js',
            'data/speaking-pronunciation-extra.js',
            'data/speaking-sentences-extra.js',
            'data/speaking-shadow-extra.js',
            'data/speaking-tonedrills-extra.js',
            'data/dialogues-mega.js',
            'data/dialogues-quadruple.js',
            'data/dialogues-extra.js',
            'data/cultural-mega.js',
            'data/cultural-quadruple.js',
            'data/cultural-extra.js'
        ]
    };

    var loaded = {};      // file path → true once loaded
    var loading = {};     // file path → Promise while in flight
    var moduleReady = {}; // module id → Promise that resolves when all module files are loaded

    function loadFile(path) {
        if (loaded[path]) return Promise.resolve();
        if (loading[path]) return loading[path];

        loading[path] = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = path;
            script.defer = true;
            script.onload = function () {
                loaded[path] = true;
                delete loading[path];
                resolve();
            };
            script.onerror = function () {
                delete loading[path];
                console.warn('LazyLoader: failed to load ' + path);
                resolve();
            };
            document.head.appendChild(script);
        });

        return loading[path];
    }

    function loadModule(moduleId) {
        if (moduleReady[moduleId]) return moduleReady[moduleId];
        if (!moduleFiles[moduleId]) return Promise.resolve();

        var files = moduleFiles[moduleId];
        moduleReady[moduleId] = Promise.all(files.map(loadFile)).then(function () {
            if (typeof App !== 'undefined' && App.DEBUG) {
                console.log('LazyLoader: module "' + moduleId + '" ready (' + files.length + ' files)');
            }
        });
        return moduleReady[moduleId];
    }

    function isLoaded(path) {
        return !!loaded[path];
    }

    function isModuleReady(moduleId) {
        return !!moduleReady[moduleId];
    }

    return {
        loadModule: loadModule,
        isLoaded: isLoaded,
        isModuleReady: isModuleReady,
        moduleFiles: moduleFiles
    };
})();

window.LazyLoader = LazyLoader;
