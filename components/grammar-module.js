// ============================================
// CHINESE MASTER - Grammar Module Component
// Rewrite: delegation, select-then-check, flat/group, sort
// ============================================

const GrammarModule = {
    // ============================================
    // CONSTANTS
    // ============================================
    CATEGORY_LABELS: {
        Basic: 'Basic Patterns',
        Questions: 'Questions & Basic',
        Comparisons: 'Comparisons',
        Complements: 'Complements',
        BaBei: '\u628A & \u88AB Constructions',
        Aspect: 'Aspect & Modality',
        DeShi: '\u7684\u5F97\u5730 & \u662F...\u7684',
        Connectors: 'Connectors',
        Relative: 'Relative Clauses'
    },

    CATEGORY_ORDER: [
        'Basic', 'Questions', 'Comparisons', 'Complements',
        'BaBei', 'Aspect', 'DeShi', 'Connectors', 'Relative'
    ],

    HSK_LEVELS: ['All', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5'],

    SORT_LABELS: { hsk: 'By HSK Level', completion: 'By Completion', id: 'By Lesson #' },

    // ============================================
    // STATE
    // ============================================
    view: 'menu',
    activeLevel: 'HSK 3',
    hideCompleted: false,
    showStarredOnly: false,
    groupMode: 'category',
    sortBy: 'hsk',
    groupExpanded: {},
    search: '',
    currentLesson: null,
    currentPractice: null,
    practiceIndex: 0,
    score: 0,
    answered: false,
    selectedIndex: null,

    // Internal bookkeeping
    _listWired: false,
    _chipsWired: false,
    _toggleBarWired: false,

    // ============================================
    // INIT & LIFECYCLE
    // ============================================
    init() {
        this._loadSettings();
        this.showMenu();
    },

    _loadSettings() {
        try {
            var saved = localStorage.getItem('cm_grammar_level');
            if (saved && this.HSK_LEVELS.indexOf(saved) >= 0) this.activeLevel = saved;
            this.hideCompleted = localStorage.getItem('cm_grammar_hide_completed') === 'true';
            this.showStarredOnly = localStorage.getItem('cm_grammar_starred_only') === 'true';
            var gm = localStorage.getItem('cm_grammar_group_mode');
            if (gm === 'category' || gm === 'flat') this.groupMode = gm;
            var sb = localStorage.getItem('cm_grammar_sort_by');
            if (sb && this.SORT_LABELS[sb]) this.sortBy = sb;
            var ex = localStorage.getItem('cm_grammar_expanded');
            this.groupExpanded = ex ? JSON.parse(ex) : {};
        } catch (e) { /* ignore corrupt localStorage */ }
    },

    _saveSettings() {
        try {
            localStorage.setItem('cm_grammar_level', this.activeLevel);
            localStorage.setItem('cm_grammar_hide_completed', String(this.hideCompleted));
            localStorage.setItem('cm_grammar_starred_only', String(this.showStarredOnly));
            localStorage.setItem('cm_grammar_group_mode', this.groupMode);
            localStorage.setItem('cm_grammar_sort_by', this.sortBy);
            localStorage.setItem('cm_grammar_expanded', JSON.stringify(this.groupExpanded));
        } catch (e) { /* ignore */ }
    },

    // ============================================
    // DATA HELPERS
    // ============================================
    _getCompletedSet() {
        try {
            var data = StorageManager.getUserData();
            var ids = data && data.progress && data.progress.grammar ? data.progress.grammar.completed : [];
            return new Set(
                ids.map(function (id) {
                    var base = id.indexOf('grammar-') === 0 ? id.slice(8) : id;
                    return base.split('-')[0];
                }).filter(Boolean)
            );
        } catch (e) { return new Set(); }
    },

    _getStarredSet() {
        try {
            var data = StorageManager.getUserData();
            return new Set((data && data.progress && data.progress.grammar && data.progress.grammar.starred) || []);
        } catch (e) { return new Set(); }
    },

    isStarred(lessonId) {
        return this._getStarredSet().has(lessonId);
    },

    toggleStar(lessonId) {
        try {
            var data = StorageManager.getUserData();
            if (!data.progress) data.progress = {};
            if (!data.progress.grammar) data.progress.grammar = {};
            if (!data.progress.grammar.starred) data.progress.grammar.starred = [];
            var arr = data.progress.grammar.starred;
            var idx = arr.indexOf(lessonId);
            if (idx >= 0) arr.splice(idx, 1);
            else arr.push(lessonId);
            StorageManager.setUserData(data);
        } catch (e) { /* ignore */ }
        this._renderList();
    },

    // ============================================
    // MENU RENDERING
    // ============================================
    showMenu() {
        if (!this._hasData()) return;

        this.view = 'menu';
        this.stateShown = true;

        var menu = document.getElementById('grammar-menu');
        var lesson = document.getElementById('grammar-lesson');
        var practice = document.getElementById('grammar-practice');
        if (menu) menu.classList.remove('hidden');
        if (lesson) lesson.classList.add('hidden');
        if (practice) practice.classList.add('hidden');

        this._renderProgress();
        this._renderChips();
        this._renderToggleBar();
        this._renderList();

        var searchInput = document.getElementById('grammar-search');
        if (searchInput) {
            searchInput.value = '';
            if (!this._searchWired) {
                this._searchWired = true;
                searchInput.addEventListener('input', function () {
                    GrammarModule.search = searchInput.value;
                    GrammarModule._renderList();
                });
            }
        }

        var noResults = document.getElementById('grammar-no-results');
        if (noResults) noResults.classList.add('hidden');
    },

    _hasData() {
        return typeof GrammarData !== 'undefined' && GrammarData.lessons && GrammarData.lessons.length;
    },

    _renderProgress() {
        var el = document.getElementById('grammar-progress');
        if (!el || !this._hasData()) return;
        var lessons = GrammarData.lessons;
        if (this.activeLevel !== 'All') {
            lessons = lessons.filter(function (l) { return l.level === GrammarModule.activeLevel; });
        }
        var completed = this._getCompletedSet();
        var total = lessons.length;
        var done = 0;
        for (var i = 0; i < lessons.length; i++) {
            if (completed.has(lessons[i].id)) done++;
        }
        var pct = total ? Math.round((done / total) * 100) : 0;
        el.innerHTML = '<div class="grammar-progress-bar"><div class="grammar-progress-fill" style="width:' + pct + '%"></div></div>' +
            '<span class="grammar-progress-label">' + done + '/' + total + ' completed (' + pct + '%)</span>';
    },

    _renderChips() {
        var container = document.getElementById('grammar-chips');
        if (!container) return;

        var self = this;
        if (!this._chipsWired) {
            this._chipsWired = true;
            container.addEventListener('click', function (e) {
                var chip = e.target.closest('.grammar-chip');
                if (!chip) return;
                self.activeLevel = chip.dataset.level;
                self._renderChips();
                self._saveSettings();
                self._renderProgress();
                self._renderList();
            });
        }

        container.innerHTML = this.HSK_LEVELS.map(function (level) {
            var isActive = self.activeLevel === level;
            var cls = 'grammar-chip' + (isActive ? ' active' : '');
            var clean = level.toLowerCase().replace(/\s+/g, '-');
            return '<button class="' + cls + '" data-level="' + Utils.escapeAttr(level) + '" type="button">' + Utils.escapeHtml(level) + '</button>';
        }).join('');
    },

    _renderToggleBar() {
        var bar = document.getElementById('grammar-toggle-bar');
        if (!bar) return;

        var self = this;
        if (!this._toggleBarWired) {
            this._toggleBarWired = true;
            bar.addEventListener('click', function (e) {
                var btn = e.target.closest('button');
                if (!btn) return;

                if (btn.id === 'grammar-toggle-hide') {
                    self.hideCompleted = !self.hideCompleted;
                    self._saveSettings();
                    self._renderToggleBar();
                    self._renderList();
                } else if (btn.id === 'grammar-toggle-starred') {
                    self.showStarredOnly = !self.showStarredOnly;
                    self._saveSettings();
                    self._renderToggleBar();
                    self._renderList();
                } else if (btn.id === 'grammar-toggle-expand') {
                    var allExp = self.CATEGORY_ORDER.every(function (c) { return self.groupExpanded[c] === true; });
                    self.CATEGORY_ORDER.forEach(function (c) { self.groupExpanded[c] = !allExp; });
                    self._saveSettings();
                    self._renderList();
                    self._renderToggleBar();
                } else if (btn.id === 'grammar-toggle-group-mode') {
                    self.groupMode = self.groupMode === 'category' ? 'flat' : 'category';
                    self._saveSettings();
                    self._renderToggleBar();
                    self._renderList();
                }
            });

            bar.addEventListener('change', function (e) {
                if (e.target.id === 'grammar-sort-select') {
                    self.sortBy = e.target.value;
                    self._saveSettings();
                    self._renderList();
                }
            });
        }

        var hideCls = this.hideCompleted ? ' active' : '';
        var starCls = this.showStarredOnly ? ' active' : '';
        var allExpanded = this.CATEGORY_ORDER.every(function (c) { return self.groupExpanded[c] === true; });
        var groupLabel = this.groupMode === 'category' ? 'Flat list' : 'Group by category';
        var sortHtml = '<label for="grammar-sort-select" class="sr-only">Sort lessons</label>' +
            '<select id="grammar-sort-select" class="grammar-sort-select">' +
            Object.keys(this.SORT_LABELS).map(function (k) {
                return '<option value="' + k + '"' + (self.sortBy === k ? ' selected' : '') + '>' +
                    Utils.escapeHtml(self.SORT_LABELS[k]) + '</option>';
            }).join('') +
            '</select>';

        bar.innerHTML = '<button class="grammar-toggle-btn' + hideCls + '" id="grammar-toggle-hide" type="button">Hide completed</button>' +
            '<button class="grammar-toggle-btn' + starCls + '" id="grammar-toggle-starred" type="button">Starred only</button>' +
            '<button class="grammar-toggle-btn" id="grammar-toggle-group-mode" type="button">' + Utils.escapeHtml(groupLabel) + '</button>' +
            '<button class="grammar-toggle-btn" id="grammar-toggle-expand" type="button">' + (allExpanded ? 'Collapse all' : 'Expand all') + '</button>' +
            sortHtml;
    },

    // ============================================
    // LESSON LIST (event delegation)
    // ============================================
    _renderList() {
        var list = document.getElementById('grammar-lessons-list');
        var noResults = document.getElementById('grammar-no-results');
        if (!list) return;

        var filtered = this._getFilteredLessons();

        if (!filtered.length) {
            list.innerHTML = '';
            if (noResults) noResults.classList.remove('hidden');
            return;
        }
        if (noResults) noResults.classList.add('hidden');

        // Group by category (for grouped mode)
        var groups = {};
        filtered.forEach(function (l) {
            var cat = l.category || 'Other';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(l);
        });

        // Wire delegation once
        var self = this;
        if (!this._listWired) {
            this._listWired = true;
            list.addEventListener('click', function (e) {
                var starBtn = e.target.closest('.grammar-star-btn');
                if (starBtn) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.toggleStar(starBtn.dataset.starId);
                    return;
                }
                var groupHeader = e.target.closest('.grammar-group-header');
                if (groupHeader) {
                    self._toggleGroup(groupHeader.dataset.category);
                    return;
                }
                var item = e.target.closest('.grammar-lesson-item');
                if (item) {
                    self.showLesson(item.dataset.id);
                }
            });
            list.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    var groupHeader = e.target.closest('.grammar-group-header');
                    if (groupHeader) {
                        e.preventDefault();
                        self._toggleGroup(groupHeader.dataset.category);
                        return;
                    }
                    var starBtn = e.target.closest('.grammar-star-btn');
                    if (starBtn) {
                        e.preventDefault();
                        return;
                    }
                    var item = e.target.closest('.grammar-lesson-item');
                    if (item) {
                        e.preventDefault();
                        self.showLesson(item.dataset.id);
                    }
                }
            });
        }

        var completedSet = this._getCompletedSet();
        var starredSet = this._getStarredSet();
        var isFlat = this.groupMode === 'flat';
        list.classList.toggle('grammar-list-flat', isFlat);

        var html = '';

        if (isFlat) {
            html += this._buildFlatList(filtered, completedSet, starredSet);
        } else {
            // Use CATEGORY_ORDER, append any unknown categories
            var seenCats = new Set();
            var allCats = this.CATEGORY_ORDER.slice();
            Object.keys(groups).forEach(function (c) {
                if (allCats.indexOf(c) < 0) allCats.push(c);
            });

            allCats.forEach(function (cat) {
                var items = groups[cat];
                if (!items || !items.length) return;
                seenCats.add(cat);

                var catCompleted = 0;
                items.forEach(function (l) { if (completedSet.has(l.id)) catCompleted++; });
                var catTotal = items.length;
                var isExpanded = self.groupExpanded[cat] !== false;
                var label = self.CATEGORY_LABELS[cat] || cat;

                html += '<div class="grammar-group' + (isExpanded ? ' expanded' : '') + '" data-category="' + Utils.escapeAttr(cat) + '">';
                html += '<div class="grammar-group-header" role="button" tabindex="0" data-category="' + Utils.escapeAttr(cat) + '">';
                html += '<span class="grammar-group-arrow">' + (isExpanded ? '\u25BC' : '\u25B6') + '</span>';
                html += '<span class="grammar-group-title">' + Utils.escapeHtml(label) + '</span>';
                html += '<span class="grammar-group-count">' + catCompleted + '/' + catTotal + '</span>';
                html += '</div>';
                html += '<div class="grammar-group-body"' + (isExpanded ? '' : ' style="display:none"') + '>';

                html += self._buildLessonItems(items, completedSet, starredSet);

                html += '</div></div>';
            });
        }

        list.innerHTML = html;

        // GSAP hover animations (if available)
        if (typeof gsap !== 'undefined') {
            try {
                list.querySelectorAll('.grammar-lesson-item').forEach(function (item) {
                    var gsapItem = item;
                    gsapItem.addEventListener('mouseenter', function () {
                        if (!(typeof Utils !== 'undefined' && Utils.isReducedMotion && Utils.isReducedMotion())) {
                            gsap.to(gsapItem, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
                        }
                    });
                    gsapItem.addEventListener('mouseleave', function () {
                        if (!(typeof Utils !== 'undefined' && Utils.isReducedMotion && Utils.isReducedMotion())) {
                            gsap.to(gsapItem, { scale: 1, duration: 0.25, ease: 'power2.out' });
                        }
                    });
                });
            } catch (gse) { /* gsap unavailable or broken */ }
        }
    },

    _buildFlatList(lessons, completedSet, starredSet) {
        return '<div class="grammar-group flat-group expanded">' +
            '<div class="grammar-group-body" style="">' +
            this._buildLessonItems(lessons, completedSet, starredSet) +
            '</div></div>';
    },

    _buildLessonItems(items, completedSet, starredSet) {
        var html = '';
        for (var i = 0; i < items.length; i++) {
            var lesson = items[i];
            var isDone = completedSet.has(lesson.id);
            var isStar = starredSet.has(lesson.id);
            var safeId = Utils.escapeAttr(lesson.id);
            var safeTitle = Utils.escapeHtml(lesson.title);
            var safeTitleMeaning = Utils.escapeHtml(lesson.titleMeaning || '');
            var safeLevel = Utils.escapeHtml(lesson.level || '');
            var levelClass = (lesson.level || '').toLowerCase().replace(/\s+/g, '-');

            html += '<div class="grammar-lesson-item' + (isDone ? ' completed' : '') + '" data-id="' + safeId + '" role="button" tabindex="0">';
            html += '<div class="grammar-lesson-number">' + (isDone ? '\u2713' : (i + 1)) + '</div>';
            html += '<div class="grammar-lesson-info">';
            html += '<h3>' + safeTitle + '</h3>';
            html += '<p><span class="grammar-level-badge ' + levelClass + '">' + safeLevel + '</span> ' + safeTitleMeaning + '</p>';
            html += '</div>';
            html += '<button class="grammar-star-btn' + (isStar ? ' starred' : '') + '" data-star-id="' + safeId + '" type="button" aria-label="' + (isStar ? 'Remove bookmark' : 'Bookmark lesson') + '">' + (isStar ? '\u2605' : '\u2606') + '</button>';
            html += '<div class="grammar-lesson-arrow">\u203A</div>';
            html += '</div>';
        }
        return html;
    },

    _getFilteredLessons() {
        if (!this._hasData()) return [];
        var lessons = GrammarData.lessons.slice();

        if (this.activeLevel !== 'All') {
            lessons = lessons.filter(function (l) { return l.level === GrammarModule.activeLevel; });
        }

        var q = (this.search || '').toLowerCase().trim();
        if (q) {
            lessons = lessons.filter(function (l) {
                return (l.title || '').toLowerCase().indexOf(q) >= 0 ||
                    (l.titleMeaning || '').toLowerCase().indexOf(q) >= 0 ||
                    (l.pattern || '').toLowerCase().indexOf(q) >= 0 ||
                    (l.id || '').toLowerCase().indexOf(q) >= 0;
            });
        }

        if (this.showStarredOnly) {
            var starredSet = this._getStarredSet();
            lessons = lessons.filter(function (l) { return starredSet.has(l.id); });
        }

        if (this.hideCompleted) {
            var completedSet = this._getCompletedSet();
            lessons = lessons.filter(function (l) { return !completedSet.has(l.id); });
        }

        // Sort
        var sortBy = this.sortBy;
        var completedSetSort = sortBy === 'completion' ? this._getCompletedSet() : null;
        var sortByHskOrder = { 'HSK 1': 1, 'HSK 2': 2, 'HSK 3': 3, 'HSK 4': 4, 'HSK 5': 5 };

        lessons.sort(function (a, b) {
            if (sortBy === 'hsk') {
                var ha = sortByHskOrder[a.level] || 99;
                var hb = sortByHskOrder[b.level] || 99;
                if (ha !== hb) return ha - hb;
                return (a.id || '').localeCompare(b.id || '');
            }
            if (sortBy === 'completion') {
                var ac = completedSetSort ? completedSetSort.has(a.id) : false;
                var bc = completedSetSort ? completedSetSort.has(b.id) : false;
                if (ac !== bc) return ac ? 1 : -1;
                return (a.id || '').localeCompare(b.id || '');
            }
            return (a.id || '').localeCompare(b.id || '');
        });

        return lessons;
    },

    _toggleGroup(cat) {
        var group = document.querySelector('.grammar-group[data-category="' + Utils.escapeAttr(cat) + '"]');
        if (!group) return;
        var body = group.querySelector('.grammar-group-body');
        var arrow = group.querySelector('.grammar-group-arrow');
        var isOpen = group.classList.contains('expanded');

        if (isOpen) {
            group.classList.remove('expanded');
            if (body) body.style.display = 'none';
            if (arrow) arrow.innerHTML = '\u25B6';
            this.groupExpanded[cat] = false;
        } else {
            group.classList.add('expanded');
            if (body) body.style.display = '';
            if (arrow) arrow.innerHTML = '\u25BC';
            this.groupExpanded[cat] = true;
        }
        this._saveSettings();
    },

    // ============================================
    // LESSON VIEW
    // ============================================
    showLesson(lessonId) {
        var lesson = GrammarData.getById(lessonId);
        if (!lesson) return;

        this.view = 'lesson';
        this.currentLesson = lesson;

        var menu = document.getElementById('grammar-menu');
        var lessonEl = document.getElementById('grammar-lesson');
        var practice = document.getElementById('grammar-practice');
        if (menu) menu.classList.add('hidden');
        if (lessonEl) lessonEl.classList.remove('hidden');
        if (practice) practice.classList.add('hidden');

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(lessonEl);
        }

        document.getElementById('grammar-lesson-title').textContent = lesson.title + ' \u2014 ' + lesson.titleMeaning;

        var content = document.getElementById('grammar-content');
        var examples = lesson.examples || [];
        var safeTitle = Utils.escapeHtml(lesson.title);
        var safeTitleMeaning = Utils.escapeHtml(lesson.titleMeaning);
        var safeLevel = Utils.escapeHtml(lesson.level || 'Grammar');
        var safePattern = Utils.escapeHtml(lesson.pattern);
        var safeExplanation = Utils.escapeHtml(lesson.explanation);
        var freq = this._getUsageFrequency(lesson);

        content.innerHTML = '<div class="grammar-lesson-card activity-card">' +
            '<div class="activity-prompt">' +
                '<span class="activity-eyebrow">\uD83D\uDCD0 ' + safeLevel + ' \u00B7 <span class="freq-badge">' + freq.icon + ' ' + Utils.escapeHtml(freq.label) + '</span></span>' +
                '<h2 class="activity-title">' + safeTitle + '</h2>' +
                '<p class="activity-subtitle">' + safeTitleMeaning + '</p>' +
            '</div>' +
            '<div class="grammar-pattern-card">' +
                '<div class="pattern-label">Pattern \u7ED3\u6784</div>' +
                '<div class="pattern-text" lang="zh">' + safePattern + '</div>' +
            '</div>' +
            '<div class="pattern-breakdown">' +
                '<div class="section-title">\uD83D\uDD0D Pattern Breakdown</div>' +
                '<div class="breakdown-items">' +
                    this._getPatternBreakdown(lesson).map(function (part) {
                        return '<div class="breakdown-chip ' + part.type + '">' +
                            '<span class="bd-text"' + (part.type === 'structure' ? ' lang="zh"' : '') + '>' + Utils.escapeHtml(part.text) + '</span>' +
                            '<span class="bd-label">' + Utils.escapeHtml(part.label) + '</span>' +
                        '</div>';
                    }).join('') +
                '</div>' +
            '</div>' +
            '<div class="grammar-explanation">' +
                '<div class="section-title">\uD83D\uDCD6 Explanation</div>' +
                '<p>' + safeExplanation + '</p>' +
            '</div>' +
            '<div class="common-mistakes">' +
                '<div class="section-title">\u26A0\uFE0F Common Mistake</div>' +
                '<p>' + Utils.escapeHtml(this._getCommonMistakes(lesson)) + '</p>' +
            '</div>' +
            (examples.length ? '<div class="grammar-examples"><div class="section-title">\uD83D\uDCAC Examples</div>' +
                examples.map(function (ex) {
                    return '<div class="grammar-example-item"><div class="ex-cn" lang="zh">' + Utils.escapeHtml(ex.chinese) +
                        '</div><div class="ex-py">' + Utils.escapeHtml(ex.pinyin) +
                        '</div><div class="ex-meaning">' + Utils.escapeHtml(ex.meaning) + '</div></div>';
                }).join('') + '</div>' : '') +
            '<div style="margin-top:18px;display:flex;gap:10px;">' +
                '<button class="btn" id="speak-grammar" type="button">\uD83D\uDD0A Hear all examples</button>' +
            '</div>' +
        '</div>';

        // Wire speak button (rendered in content)
        var self = this;
        var speakBtn = document.getElementById('speak-grammar');
        if (speakBtn) {
            speakBtn.addEventListener('click', function () {
                speakBtn.disabled = true;
                if (lesson.examples && lesson.examples.length && typeof AudioManager !== 'undefined' && typeof AudioManager.speak === 'function') {
                    (function playExamples(idx) {
                        if (idx >= lesson.examples.length) { speakBtn.disabled = false; return; }
                        var result = AudioManager.speak(lesson.examples[idx].chinese);
                        var delay = function() { return new Promise(function(r) { setTimeout(r, 600); }); };
                        if (result && typeof result.then === 'function') {
                            result.then(function () {
                                return delay();
                            }).then(function () {
                                playExamples(idx + 1);
                            });
                        } else {
                            delay().then(function() { playExamples(idx + 1); });
                        }
                    })(0);
                } else {
                    speakBtn.disabled = false;
                }
            });
        }

        // Wire static practice button (in exercise-controls)
        var practiceBtn = document.getElementById('grammar-practice-btn');
        if (practiceBtn) {
            if (this._practiceBtnCleanup) practiceBtn.removeEventListener('click', this._practiceBtnCleanup);
            this._practiceBtnCleanup = function () { self.startPractice(lesson); };
            practiceBtn.addEventListener('click', this._practiceBtnCleanup);
        }

        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            var exContainer = lessonEl.querySelector('.grammar-examples');
            if (exContainer && exContainer.children.length) {
                InkAnimations.entranceStagger(exContainer, { delay: 0.3, stagger: 0.1 });
            }
        }
    },

    _getPatternBreakdown(lesson) {
        var parts = lesson.pattern.split(' + ');
        return parts.map(function (part) {
            var hasChinese = /[\u4e00-\u9fff]/.test(part);
            return {
                text: part,
                type: hasChinese ? 'structure' : 'placeholder',
                label: hasChinese ? 'Function Word' : 'Slot'
            };
        });
    },

    _getCommonMistakes(lesson) {
        if (lesson.commonMistake) return lesson.commonMistake;
        return 'Pay attention to the word order: ' + lesson.pattern + '. Practice forming several sentences using this structure.';
    },

    _getPracticeExplanation(practice) {
        return 'This pattern uses "' + practice.answer + '" to form the correct grammatical structure.';
    },

    _getUsageFrequency(lesson) {
        var freq = {
            'HSK 1': { label: 'Essential', icon: '\uD83D\uDD35' },
            'HSK 2': { label: 'Very Common', icon: '\uD83D\uDFE2' },
            'HSK 3': { label: 'Very Common', icon: '\uD83D\uDFE2' },
            'HSK 4': { label: 'Common', icon: '\uD83D\uDFE1' },
            'HSK 5': { label: 'Formal', icon: '\uD83D\uDFE0' },
            'HSK 6': { label: 'Literary/Formal', icon: '\uD83D\uDD34' }
        };
        return freq[lesson.level] || { label: 'Common', icon: '\uD83D\uDFE1' };
    },

    // ============================================
    // PRACTICE (select-then-check)
    // ============================================
    startPractice(lesson) {
        if (!lesson.practice || !lesson.practice.length) return;

        this.view = 'practice';
        this.currentLesson = lesson;
        this.currentPractice = lesson.practice;
        this.practiceIndex = 0;
        this.score = 0;

        var lessonEl = document.getElementById('grammar-lesson');
        var practiceEl = document.getElementById('grammar-practice');
        if (lessonEl) lessonEl.classList.add('hidden');
        if (practiceEl) practiceEl.classList.remove('hidden');

        this._wireStickyBar();

        document.getElementById('grammar-total').textContent = lesson.practice.length;

        this.showCurrentPractice();
    },

    showCurrentPractice() {
        if (this.practiceIndex >= this.currentPractice.length) {
            this.finishPractice();
            return;
        }

        this.answered = false;
        this.selectedIndex = null;

        var practice = this.currentPractice[this.practiceIndex];
        document.getElementById('grammar-current').textContent = this.practiceIndex + 1;

        this._updateStickyBar();
        this._resetStickyButtons();

        var self = this;
        var content = document.getElementById('grammar-practice-content');
        var safeQuestion = Utils.escapeHtml(practice.question);

        content.innerHTML = '<div class="grammar-practice-stage activity-card">' +
            '<div class="grammar-question-card">' +
                '<div class="q-eyebrow">Question ' + (this.practiceIndex + 1) + ' of ' + this.currentPractice.length + '</div>' +
                '<div class="q-cn" lang="zh">' + safeQuestion + '</div>' +
            '</div>' +
            '<div class="grammar-options" id="grammar-options">' +
                practice.options.map(function (opt, i) {
                    return '<div class="grammar-option" data-index="' + i + '" role="button" tabindex="0">' +
                        '<span class="cn-text" lang="zh">' + Utils.escapeHtml(opt) + '</span>' +
                    '</div>';
                }).join('') +
            '</div>' +
            '<div class="answer-feedback" id="grammar-feedback" style="margin-top:14px;"></div>' +
        '</div>';

        // Wire option selection (click on container)
        var optionsContainer = document.getElementById('grammar-options');
        if (optionsContainer) {
            if (this._optionsClickCleanup) {
                optionsContainer.removeEventListener('click', this._optionsClickCleanup);
            }
            this._optionsClickCleanup = function (e) {
                var opt = e.target.closest('.grammar-option');
                if (!opt) return;
                var idx = parseInt(opt.dataset.index);
                self.selectOption(idx);
            };
            optionsContainer.addEventListener('click', this._optionsClickCleanup);

            // Keyboard: 1-4 select option
            if (this._optionsKeyCleanup) {
                optionsContainer.removeEventListener('keydown', this._optionsKeyCleanup);
            }
            this._optionsKeyCleanup = function (e) {
                var key = parseInt(e.key);
                if (key >= 1 && key <= practice.options.length) {
                    e.preventDefault();
                    self.selectOption(key - 1);
                }
            };
            optionsContainer.addEventListener('keydown', this._optionsKeyCleanup);
        }

        // Wire check button
        var checkBtn = document.getElementById('check-grammar-btn');
        var nextBtn = document.getElementById('next-grammar-btn');
        if (checkBtn) {
            checkBtn.classList.remove('hidden');
            if (this._checkBtnCleanup) checkBtn.removeEventListener('click', this._checkBtnCleanup);
            this._checkBtnCleanup = function () { self.checkGrammarAnswer(); };
            checkBtn.addEventListener('click', this._checkBtnCleanup);
        }
        if (nextBtn) {
            nextBtn.classList.add('hidden');
            if (this._nextBtnCleanup) nextBtn.removeEventListener('click', this._nextBtnCleanup);
        }

        // Keyboard: Enter to check
        if (this._practiceKeyCleanup) {
            document.removeEventListener('keydown', this._practiceKeyCleanup);
        }
        this._practiceKeyCleanup = function (e) {
            if (e.key === 'Enter') {
                var checkB = document.getElementById('check-grammar-btn');
                var nextB = document.getElementById('next-grammar-btn');
                if (checkB && !checkB.classList.contains('hidden')) {
                    e.preventDefault();
                    self.checkGrammarAnswer();
                } else if (nextB && !nextB.classList.contains('hidden')) {
                    e.preventDefault();
                    self._nextQuestion();
                }
            }
        };
        document.addEventListener('keydown', this._practiceKeyCleanup);
    },

    selectOption(index) {
        if (this.answered) return;

        this.selectedIndex = index;
        var options = document.querySelectorAll('.grammar-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.remove('selected');
        }
        if (options[index]) {
            options[index].classList.add('selected');
        }
    },

    checkGrammarAnswer() {
        if (this.answered || this.selectedIndex === null) return;

        this.answered = true;
        var practice = this.currentPractice[this.practiceIndex];
        var selectedIdx = this.selectedIndex;
        var selectedOption = practice.options[selectedIdx];
        var isCorrect = selectedOption === practice.answer;

        // Lock all options
        var options = document.querySelectorAll('.grammar-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.add('locked');
        }

        if (isCorrect) {
            this.score++;
            Utils.playSound('correct');
            if (options[selectedIdx]) {
                options[selectedIdx].classList.add('correct');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                    InkAnimations.feedbackPulse(options[selectedIdx], 'correct');
                }
            }
        } else {
            Utils.playSound('incorrect');
            if (options[selectedIdx]) {
                options[selectedIdx].classList.add('incorrect');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                    InkAnimations.shakeElement(options[selectedIdx]);
                }
            }
            this._triggerAI();
            // Highlight correct answer
            for (var j = 0; j < options.length; j++) {
                if (practice.options[j] === practice.answer) {
                    options[j].classList.add('correct');
                }
            }
        }

        var feedback = document.getElementById('grammar-feedback');
        if (feedback) {
            if (isCorrect) {
                feedback.innerHTML = '<span class="fb-icon">\u2705</span> Correct! Great job.';
                feedback.className = 'answer-feedback correct';
            } else {
                feedback.innerHTML = '<span class="fb-icon">\u274C</span> The correct answer is <strong>' + Utils.escapeHtml(practice.answer) + '</strong>.';
                feedback.className = 'answer-feedback incorrect';
                var explanation = this._getPracticeExplanation(practice);
                if (explanation) {
                    feedback.innerHTML += '<p class="fb-explain">' + Utils.escapeHtml(explanation) + '</p>';
                }
            }
        }

        this._showNextButton();
    },

    _showNextButton() {
        var checkBtn = document.getElementById('check-grammar-btn');
        var nextBtn = document.getElementById('next-grammar-btn');
        if (checkBtn) checkBtn.classList.add('hidden');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            if (this._nextBtnCleanup) nextBtn.removeEventListener('click', this._nextBtnCleanup);
            this._nextBtnCleanup = this._nextQuestion.bind(this);
            nextBtn.addEventListener('click', this._nextBtnCleanup);
        }
    },

    _nextQuestion() {
        this.practiceIndex++;
        this.showCurrentPractice();
    },

    finishPractice() {
        // Clean up key listener
        if (this._practiceKeyCleanup) {
            document.removeEventListener('keydown', this._practiceKeyCleanup);
            this._practiceKeyCleanup = null;
        }

        var totalQuestions = this.currentPractice.length;
        // Use stable ID: grammar-g001 (no timestamp)
        var exerciseId = 'grammar-' + this.currentLesson.id;
        var result = ProgressTracker.trackExercise('grammar', exerciseId, this.score, totalQuestions);

        if (typeof InkAnimations !== 'undefined' && InkAnimations.scorePopup) {
            var self = this;
            setTimeout(function () {
                var scoreDisplay = document.querySelector('.completion-score');
                if (scoreDisplay) InkAnimations.scorePopup(scoreDisplay, self.score);
            }, 300);
        }

        var self = this;
        App.showCompletionModal({
            title: 'Grammar Practice Complete!',
            score: this.score,
            total: totalQuestions,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            onBack: function () { self.showMenu(); },
            onRetry: function () { self.startPractice(self.currentLesson); }
        });

        var bar = document.getElementById('grammar-sticky-bar');
        if (bar) bar.hidden = true;
    },

    // ============================================
    // NAVIGATION
    // ============================================
    continueNextIncomplete() {
        var completedSet = this._getCompletedSet();
        var lessons = GrammarData.lessons.slice();
        if (this.activeLevel !== 'All') {
            lessons = lessons.filter(function (l) { return l.level === GrammarModule.activeLevel; });
        }
        var next;
        for (var i = 0; i < lessons.length; i++) {
            if (!completedSet.has(lessons[i].id)) {
                next = lessons[i];
                break;
            }
        }
        if (next) {
            this.showLesson(next.id);
        }
        // If no next lesson found, menu is already rendered by the navigation flow
    },

    _wireStickyBar() {
        var bar = document.getElementById('grammar-sticky-bar');
        if (!bar || bar._gmWired) return;
        bar._gmWired = true;
        bar.hidden = false;

        var self = this;
        document.getElementById('prev-grammar-btn').addEventListener('click', function () {
            if (self.practiceIndex > 0) { self.practiceIndex--; self.showCurrentPractice(); }
        });
        document.getElementById('ask-ai-grammar-btn').addEventListener('click', function () {
            if (typeof AITutor !== 'undefined') {
                AITutor.forceNext();
                AITutor.explain(self._buildAIContext());
            }
        });
    },

    _updateStickyBar() {
        var prog = document.getElementById('grammar-sticky-progress');
        if (prog) prog.textContent = (this.practiceIndex + 1) + ' / ' + this.currentPractice.length;
        var prevBtn = document.getElementById('prev-grammar-btn');
        if (prevBtn) prevBtn.disabled = this.practiceIndex === 0;
    },

    _resetStickyButtons() {
        var checkBtn = document.getElementById('check-grammar-btn');
        var nextBtn = document.getElementById('next-grammar-btn');
        if (checkBtn) checkBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
    },

    _triggerAI() {
        if (typeof AITutor !== 'undefined' && AITutor.isConfigured()) {
            AITutor.explain(this._buildAIContext());
        }
    },

    _buildAIContext() {
        var lesson = this.currentLesson;
        var practice = this.currentPractice ? this.currentPractice[this.practiceIndex] : null;
        var ctx = { skill: 'grammar', activityType: 'grammar' };
        if (lesson) {
            ctx.pattern = lesson.pattern;
            if (lesson.title) ctx.prompt = lesson.title + ' — ' + (lesson.titleMeaning || '');
            if (lesson.explanation) ctx.explanation = lesson.explanation;
        }
        if (practice) {
            ctx.question = practice.question;
            if (practice.options) ctx.options = practice.options.slice();
            ctx.correctAnswer = practice.answer;
        }
        return ctx;
    }
};

window.GrammarModule = GrammarModule;
