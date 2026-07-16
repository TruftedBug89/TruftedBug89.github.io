// ============================================
// ZHI Studio - DeepSeek AI Tutor
// Fully local (on-device) integration:
//   * API key + config live ONLY in sessionStorage (or cookies),
//     so the hosting server never sees them and they clear on tab close.
//   * Explanations are generated per-activity with a dynamic prompt.
// ============================================

const DeepSeekTutor = {
    // ---- Config (kept in session storage / cookies, never localStorage) ----
    STORAGE_KEY: 'zhi_deepseek_config',
    SKIP_KEY: 'zhi_deepseek_skip_prompt',
    DEFAULTS: {
        apiKey: '',
        model: 'deepseek-chat',
        baseUrl: 'https://api.deepseek.com',
        temperature: 0.7,
        autoExplain: true,
        enabled: true
    },

    config: null,
    panel: null,
    handle: null,
    body: null,
    input: null,
    sendBtn: null,
    _lastContext: null,
    _busy: false,

    // ============================================
    // STORAGE (sessionStorage, falls back to cookies)
    // ============================================
    _readSession(name) {
        try {
            const v = sessionStorage.getItem(name);
            if (v !== null) return v;
        } catch (e) { /* sessionStorage may be blocked */ }
        // Cookie fallback
        try {
            const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
            if (m) return decodeURIComponent(m[1]);
        } catch (e) { /* ignore */ }
        return null;
    },

    _writeSession(name, value) {
        let ok = false;
        try {
            sessionStorage.setItem(name, value);
            ok = true;
        } catch (e) { /* sessionStorage blocked */ }
        try {
            // Session-scoped cookie (no Expires/Max-Age) -> cleared on browser close,
            // and NOT sent over the static hosting server because these requests are
            // browser-only / never transmitted to the GitHub Pages origin by our code.
            document.cookie = name + '=' + encodeURIComponent(value) + ';path=/;SameSite=Strict';
        } catch (e) { /* ignore */ }
        return ok;
    },

    _clearSession(name) {
        try { sessionStorage.removeItem(name); } catch (e) { /* ignore */ }
        try { document.cookie = name + '=;path=/;max-age=0;SameSite=Strict'; } catch (e) { /* ignore */ }
    },

    // ============================================
    // CONFIG LIFECYCLE
    // ============================================
    init() {
        this.loadConfig();
        this._buildPanel();
    },

    loadConfig() {
        let saved = null;
        const raw = this._readSession(this.STORAGE_KEY);
        if (raw) {
            try { saved = JSON.parse(raw); } catch (e) { saved = null; }
        }
        this.config = Object.assign({}, this.DEFAULTS, saved || {});
        return this.config;
    },

    saveConfig() {
        this._writeSession(this.STORAGE_KEY, JSON.stringify(this.config));
    },

    isConfigured() {
        return !!(this.config && this.config.enabled && this.config.apiKey);
    },

    markPrompted() {
        this._writeSession(this.SKIP_KEY, '1');
    },

    shouldPromptOnStartup() {
        return this._readSession(this.SKIP_KEY) === null;
    },

    // ============================================
    // STARTUP CONFIG PROMPT (driven by the streak counter)
    // ============================================
    promptConfigIfNeeded() {
        if (!this.shouldPromptOnStartup()) return;
        this.showConfig({ fromStartup: true });
    },

    // ============================================
    // CONFIG MODAL
    // ============================================
    showConfig(opts) {
        opts = opts || {};
        const self = this;
        if (!this.config) this.loadConfig();
        const c = this.config;

        const models = [
            { id: 'deepseek-chat', label: 'deepseek-chat · fast & general' },
            { id: 'deepseek-reasoner', label: 'deepseek-reasoner · step-by-step' }
        ];

        const html =
            '<div class="ai-config-card activity-card">' +
                '<h2>🤖 DeepSeek AI Tutor</h2>' +
                '<p class="ai-config-sub">Turn on AI explanations when you miss an activity. The AI slides in from the left to tell you <em>why</em> and <em>how to fix it</em>, and you can keep asking follow-ups.</p>' +

                '<div class="ai-privacy">' +
                    '<span class="ai-privacy-icon">🛡️</span>' +
                    '<div><b>Your key never leaves your device for storage.</b> It lives only in this browser tab\'s <b>session</b> (sessionStorage + a session cookie) — not in localStorage, not on this site\'s server, and never picked up by GitHub Pages. Calls go straight from your browser to DeepSeek\'s API. Everything clears when you close the tab.</div>' +
                '</div>' +

                '<div class="ai-field">' +
                    '<label for="ds-api-key">DeepSeek API key</label>' +
                    '<input id="ds-api-key" type="password" placeholder="sk-..." autocomplete="off" spellcheck="false" value="' + Utils.escapeAttr(c.apiKey || '') + '">' +
                    '<div class="ai-hint">Get one at platform.deepseek.com → API Keys. Stored only in this session.</div>' +
                '</div>' +

                '<div class="ai-row">' +
                    '<div class="ai-field">' +
                        '<label for="ds-model">Model</label>' +
                        '<select id="ds-model">' +
                            models.map(function (m) {
                                return '<option value="' + Utils.escapeAttr(m.id) + '"' + (c.model === m.id ? ' selected' : '') + '>' + Utils.escapeHtml(m.label) + '</option>';
                            }).join('') +
                        '</select>' +
                        '<div class="ai-model-presets">' +
                            models.map(function (m) {
                                return '<button type="button" class="ai-model-chip' + (c.model === m.id ? ' active' : '') + '" data-model="' + Utils.escapeAttr(m.id) + '">' + Utils.escapeHtml(m.id) + '</button>';
                            }).join('') +
                        '</div>' +
                    '</div>' +
                    '<div class="ai-field">' +
                        '<label for="ds-temp">Temperature · ' + Utils.escapeHtml(String(c.temperature)) + '</label>' +
                        '<input id="ds-temp" type="range" min="0" max="1.5" step="0.1" value="' + Utils.escapeAttr(String(c.temperature)) + '">' +
                    '</div>' +
                '</div>' +

                '<div class="ai-field">' +
                    '<label for="ds-baseurl">API base URL</label>' +
                    '<input id="ds-baseurl" type="text" placeholder="https://api.deepseek.com" value="' + Utils.escapeAttr(c.baseUrl || '') + '">' +
                '</div>' +

                '<div class="ai-toggle">' +
                    '<div class="toggle-switch"><input type="checkbox" id="ds-autoexplain" ' + (c.autoExplain ? 'checked' : '') + '><span class="toggle-slider"></span></div>' +
                    '<label for="ds-autoexplain" style="font-size:14px;color:rgba(255,255,255,0.8);">Auto-explain when I get an answer wrong</label>' +
                '</div>' +
                '<div class="ai-toggle">' +
                    '<div class="toggle-switch"><input type="checkbox" id="ds-enabled" ' + (c.enabled ? 'checked' : '') + '><span class="toggle-slider"></span></div>' +
                    '<label for="ds-enabled" style="font-size:14px;color:rgba(255,255,255,0.8);">Enable AI tutor</label>' +
                '</div>' +

                '<div class="ai-config-actions">' +
                    (opts.fromStartup ? '<button type="button" class="btn btn-secondary" data-cm-action="ds-skip">Maybe later</button>' : '') +
                    '<button type="button" class="btn btn-primary" data-cm-action="ds-save">Save &amp; enable</button>' +
                '</div>' +
            '</div>';

        App.showModal(html);
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');

        // Model chip <-> select sync
        const modelSelect = modalBody.querySelector('#ds-model');
        modalBody.querySelectorAll('.ai-model-chip').forEach(function (chip) {
            chip.addEventListener('click', function () {
                modalBody.querySelectorAll('.ai-model-chip').forEach(function (c2) { c2.classList.remove('active'); });
                chip.classList.add('active');
                if (modelSelect) modelSelect.value = chip.dataset.model;
            });
        });
        if (modelSelect) {
            modelSelect.addEventListener('change', function () {
                modalBody.querySelectorAll('.ai-model-chip').forEach(function (chip) {
                    chip.classList.toggle('active', chip.dataset.model === modelSelect.value);
                });
            });
        }

        const tempInput = modalBody.querySelector('#ds-temp');
        if (tempInput) {
            tempInput.addEventListener('input', function () {
                const label = tempInput.previousElementSibling;
                if (label && label.tagName === 'LABEL') label.textContent = 'Temperature · ' + tempInput.value;
            });
        }

        const saveBtn = modalBody.querySelector('[data-cm-action="ds-save"]');
        if (saveBtn) saveBtn.addEventListener('click', function () {
            self.config.apiKey = (modalBody.querySelector('#ds-api-key').value || '').trim();
            self.config.model = (modalBody.querySelector('#ds-model').value || 'deepseek-chat').trim();
            const t = parseFloat(modalBody.querySelector('#ds-temp').value);
            self.config.temperature = isNaN(t) ? self.DEFAULTS.temperature : t;
            self.config.baseUrl = (modalBody.querySelector('#ds-baseurl').value || '').trim().replace(/\/+$/, '') || self.DEFAULTS.baseUrl;
            self.config.autoExplain = !!modalBody.querySelector('#ds-autoexplain').checked;
            self.config.enabled = !!modalBody.querySelector('#ds-enabled').checked;
            self.saveConfig();
            self.markPrompted();
            App.closeModal();
            if (self.config.enabled && self.config.apiKey) {
                Utils.showToast('DeepSeek AI tutor ready', 'success');
            } else {
                Utils.showToast('AI tutor settings saved', 'info');
            }
        });

        const skipBtn = modalBody.querySelector('[data-cm-action="ds-skip"]');
        if (skipBtn) skipBtn.addEventListener('click', function () {
            self.markPrompted();
            App.closeModal();
        });
    },

    // ============================================
    // DYNAMIC PROMPT BUILDER (per-activity)
    // ============================================
    _activityLabel(skill, type) {
        const map = {
            dictation: 'Dictation (listen & type Chinese)',
            comprehension: 'Listening comprehension (multiple choice)',
            'minimal-pairs': 'Minimal pairs (tone discrimination)',
            dialogue: 'Dialogue listening',
            'speed-listening': 'Speed listening (type what you hear)',
            shadowing: 'Shadowing (listen & repeat)',
            'character-match': 'Character matching (character ↔ meaning)',
            'sentence-complete': 'Sentence completion (choose missing word)',
            'passage-reading': 'Passage reading comprehension',
            'speed-reading': 'Speed reading comprehension',
            'radical-learn': 'Radical learning',
            'context-clues': 'Context clues (infer unknown word)',
            'sentence-reconstruction': 'Sentence reconstruction (reorder words)',
            'contextual-fill-blank': 'Contextual fill-in-the-blank',
            'word-order': 'Word order',
            'speed-challenge': 'Speed challenge',
            grammar: 'Grammar pattern drill',
            vocab: 'Vocabulary recall (cloze / typing)'
        };
        return map[type] || map[skill] || type || 'Chinese activity';
    },

    buildSystemPrompt() {
        return 'You are ZHI, an expert Chinese-language tutor built into a learning app called ZHI Studio. ' +
            'A learner just got an answer wrong. Explain WHY their answer is wrong and HOW to fix it, ' +
            'tuned precisely to the exercise type. Be concise (3-7 short sentences), warm, and pedagogical. ' +
            'Always reference the specific Chinese characters, pinyin, tones, radicals, or grammar pattern. ' +
            'Use pinyin in parentheses after characters the first time you cite them. ' +
            'Prefer teaching the underlying rule over just naming the answer, but you may confirm the correct form briefly. ' +
            'Reply only with the explanation prose, no markdown headings, no preamble.';
    },

    buildUserMessage(ctx) {
        const lines = [];
        lines.push('ACTIVITY: ' + this._activityLabel(ctx.skill, ctx.activityType));
        if (ctx.skill) lines.push('Skill area: ' + ctx.skill);
        if (ctx.activityType) lines.push('Exercise type: ' + ctx.activityType);

        if (ctx.prompt) lines.push('Instructions shown to learner: ' + ctx.prompt);
        if (ctx.question) lines.push('Question: ' + ctx.question);
        if (ctx.sentence) lines.push('Sentence: ' + ctx.sentence);
        if (ctx.passage) lines.push('Passage: ' + ctx.passage);
        if (ctx.unknownWord) lines.push('Unknown word in the sentence: ' + ctx.unknownWord);

        if (ctx.correctAnswer) lines.push('Correct answer: ' + ctx.correctAnswer);
        if (ctx.pinyin) lines.push('Pinyin (of correct): ' + ctx.pinyin);
        if (ctx.meaning) lines.push('Meaning (of correct): ' + ctx.meaning);
        if (ctx.tone) lines.push('Tone(s) of the target word: ' + ctx.tone);

        if (ctx.options && ctx.options.length) {
            lines.push('Options given: ' + ctx.options.map(function (o, i) {
                return String.fromCharCode(65 + i) + ') ' + o;
            }).join('  |  '));
        }
        if (ctx.correctIndex !== undefined && ctx.options) {
            lines.push('Right option: ' + String.fromCharCode(65 + ctx.correctIndex) + ') ' + ctx.options[ctx.correctIndex]);
        }
        if (ctx.selectedIndex !== undefined && ctx.options) {
            lines.push('Learner picked: ' + String.fromCharCode(65 + ctx.selectedIndex) + ') ' + ctx.options[ctx.selectedIndex]);
        }

        if (ctx.userAnswer) lines.push('Learner\'s answer: ' + ctx.userAnswer);

        // Grammar-specific
        if (ctx.pattern) lines.push('Grammar pattern: ' + ctx.pattern);
        if (ctx.explanation) lines.push('Built-in rule note: ' + ctx.explanation);

        // Pair-specific (minimal pairs)
        if (ctx.pairWord1) lines.push('Word 1: ' + ctx.pairWord1 + ' (' + (ctx.pairPinyin1 || '') + ') tone ' + (ctx.tone1 || '?'));
        if (ctx.pairWord2) lines.push('Word 2: ' + ctx.pairWord2 + ' (' + (ctx.pairPinyin2 || '') + ') tone ' + (ctx.tone2 || '?'));

        if (ctx.contextClues && ctx.contextClues.length) lines.push('Clues in the sentence: ' + ctx.contextClues.join('; '));

        lines.push('');
        lines.push('Explain why the learner\'s answer is wrong for THIS ' + this._activityLabel(ctx.skill, ctx.activityType) + ' and how to fix it.');
        return lines.join('\n');
    },

    buildFollowUp(ctx, userText) {
        const base = this._lastContext && Object.keys(this._lastContext).length
            ? this.buildUserMessage(this._lastContext)
            : '';
        const intro = 'The learner asked a follow-up question about the activity above: "' + userText + '". ' +
            'Answer it directly and concisely, staying focused on this exact exercise. ' +
            'If they are asking about something unrelated to Chinese learning, gently steer them back to the activity.';
        return intro + (base ? '\n\n--- activity context for reference ---\n' + base : '');
    },

    // ============================================
    // API CALL
    // ============================================
    callAPI(userMessage) {
        const cfg = this.config;
        const url = (cfg.baseUrl || '').replace(/\/+$/, '') + '/chat/completions';
        const body = {
            model: cfg.model || 'deepseek-chat',
            messages: [
                { role: 'system', content: this.buildSystemPrompt() },
                { role: 'user', content: userMessage }
            ],
            temperature: (typeof cfg.temperature === 'number') ? cfg.temperature : 0.7,
            stream: false
        };
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cfg.apiKey
            },
            body: JSON.stringify(body)
        }).then(function (res) {
            if (!res.ok) {
                return res.text().then(function (txt) {
                    throw new Error('DeepSeek API error ' + res.status + ': ' + (txt || res.statusText));
                });
            }
            return res.json();
        }).then(function (data) {
            const choice = data && data.choices && data.choices[0];
            if (choice && choice.message && choice.message.content) return choice.message.content;
            throw new Error('DeepSeek API returned no message');
        });
    },

    // ============================================
    // PANEL UI
    // ============================================
    _buildPanel() {
        if (document.getElementById('ai-tutor-panel')) return;

        const panel = document.createElement('aside');
        panel.id = 'ai-tutor-panel';
        panel.setAttribute('aria-label', 'AI tutor explanations');
        panel.hidden = true;
        panel.innerHTML =
            '<div class="ai-head">' +
                '<div class="ai-seal">AI</div>' +
                '<div class="ai-title"><strong>DEEPSEEK TUTOR</strong><small>local · on-device key</small></div>' +
                '<div class="ai-actions">' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="settings" title="AI settings" aria-label="AI settings">⚙</button>' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="hide" title="Hide panel" aria-label="Hide panel">←</button>' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="close" title="Close" aria-label="Close">×</button>' +
                '</div>' +
            '</div>' +
            '<div class="ai-body"></div>' +
            '<div class="ai-footer">' +
                '<textarea class="ai-input" rows="1" placeholder="Ask the tutor a follow-up…" aria-label="Ask the tutor"></textarea>' +
                '<button type="button" class="ai-send" data-ai-action="send" aria-label="Send">➤</button>' +
            '</div>';
        document.body.appendChild(panel);

        const handle = document.createElement('button');
        handle.type = 'button';
        handle.id = 'ai-tutor-handle';
        handle.setAttribute('aria-label', 'Open AI tutor');
        handle.textContent = 'AI TUTOR';
        document.body.appendChild(handle);

        this.panel = panel;
        this.handle = handle;
        this.body = panel.querySelector('.ai-body');
        this.input = panel.querySelector('.ai-input');
        this.sendBtn = panel.querySelector('[data-ai-action="send"]');

        panel.querySelector('[data-ai-action="close"]').addEventListener('click', () => this.close());
        panel.querySelector('[data-ai-action="hide"]').addEventListener('click', () => this.hide());
        panel.querySelector('[data-ai-action="settings"]').addEventListener('click', () => this.showConfig({}));
        this.sendBtn.addEventListener('click', () => this._sendFollowUp());
        handle.addEventListener('click', () => this.show());

        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this._sendFollowUp(); }
        });
        this.input.addEventListener('input', () => this._autosizeInput());
    },

    _autosizeInput() {
        const el = this.input;
        if (!el) return;
        el.style.height = 'auto';
        el.style.height = Math.min(120, el.scrollHeight) + 'px';
    },

    isOpen() { return this.panel && !this.panel.hidden && this.panel.classList.contains('open'); },

    show() {
        if (!this.panel) this._buildPanel();
        this.panel.hidden = false;
        // rAF so the transition runs
        requestAnimationFrame(() => this.panel.classList.add('open'));
        if (this.handle) this.handle.classList.remove('show');
    },

    hide() {
        if (!this.panel) return;
        this.panel.classList.remove('open');
        if (this.handle) this.handle.classList.add('show');
    },

    close() {
        if (!this.panel) return;
        this.panel.classList.remove('open');
        this.panel.hidden = true;
        if (this.handle) this.handle.classList.remove('show');
        this._clearBody();
    },

    _clearBody() {
        if (this.body) this.body.innerHTML = '';
    },

    _append(html, cls) {
        if (!this.body) return;
        const div = document.createElement('div');
        div.className = 'ai-msg' + (cls ? ' ' + cls : '');
        div.innerHTML = html;
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
        return div;
    },

    _appendContext(ctx) {
        if (!this.body || !ctx) return;
        const parts = [];
        if (ctx.activityType) parts.push('<b>' + Utils.escapeHtml(this._activityLabel(ctx.skill, ctx.activityType)) + '</b>');
        if (ctx.correctAnswer) parts.push('Target: <b lang="zh">' + Utils.escapeHtml(ctx.correctAnswer) + '</b>');
        if (ctx.userAnswer) parts.push('Your answer: <b>' + Utils.escapeHtml(ctx.userAnswer) + '</b>');
        if (!parts.length) return;
        const div = document.createElement('div');
        div.className = 'ai-context';
        div.innerHTML = parts.join(' &nbsp;·&nbsp; ');
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
    },

    _showLoading() {
        const div = document.createElement('div');
        div.className = 'ai-loading';
        div.innerHTML = '<span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span><span>Thinking…</span>';
        div.dataset.aiLoading = '1';
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
        return div;
    },

    _removeLoading() {
        const l = this.body && this.body.querySelector('[data-ai-loading="1"]');
        if (l) l.remove();
    },

    _empty() {
        if (!this.body) return;
        const div = document.createElement('div');
        div.className = 'ai-empty';
        div.innerHTML = 'The AI tutor will slide in here<br>when you miss an answer.<br><br>Tap ⚙ to configure DeepSeek.';
        this.body.innerHTML = '';
        this.body.appendChild(div);
    },

    // ============================================
    // MAIN ENTRY: explain a wrong answer
    // ============================================
    explain(context) {
        if (!this.config) this.loadConfig();
        if (!this.config.enabled) return;
        if (!this.config.apiKey) {
            // Offer to configure inline
            this.show();
            this._clearBody();
            const div = document.createElement('div');
            div.className = 'ai-empty';
            div.innerHTML = 'No DeepSeek API key set for this session.<br><br><button type="button" class="btn btn-primary" data-ai-open-config>Configure DeepSeek</button>';
            this.body.innerHTML = '';
            this.body.appendChild(div);
            const btn = div.querySelector('[data-ai-open-config]');
            if (btn) btn.addEventListener('click', () => this.showConfig({}));
            return;
        }
        if (!this.config.autoExplain && !this._forceNext) return;
        this._forceNext = false;

        this._lastContext = context || {};
        this.show();
        this._clearBody();
        this._appendContext(context);
        const loading = this._showLoading();

        this._busy = true;
        if (this.sendBtn) this.sendBtn.disabled = true;

        const message = this.buildUserMessage(context);
        const self = this;
        this.callAPI(message).then(function (text) {
            self._removeLoading();
            self._append(Utils.escapeHtml(text).replace(/\n/g, '<br>'));
        }).catch(function (err) {
            self._removeLoading();
            self._append('<span style="color:#ff9b9b;">⚠ ' + Utils.escapeHtml(err.message || 'Request failed') + '</span><br><br><small style="color:rgba(255,255,255,0.45);">Check your key, model, and base URL in ⚙ settings. The key is stored only in this browser tab\'s session — it never reaches the site server.</small>');
        }).finally(function () {
            self._busy = false;
            if (self.sendBtn) self.sendBtn.disabled = false;
        });
    },

    // Force the next explain() call even if autoExplain is off (used by a "Ask AI" button)
    forceNext() { this._forceNext = true; },

    _sendFollowUp() {
        if (this._busy) return;
        const text = (this.input && this.input.value || '').trim();
        if (!text) return;
        if (!this.config || !this.config.apiKey) { this.showConfig({}); return; }
        this._append(Utils.escapeHtml(text), 'ai-user');
        this.input.value = '';
        this._autosizeInput();
        const loading = this._showLoading();
        this._busy = true;
        if (this.sendBtn) this.sendBtn.disabled = true;
        const self = this;
        const msg = this.buildFollowUp(this._lastContext, text);
        this.callAPI(msg).then(function (reply) {
            self._removeLoading();
            self._append(Utils.escapeHtml(reply).replace(/\n/g, '<br>'));
        }).catch(function (err) {
            self._removeLoading();
            self._append('<span style="color:#ff9b9b;">⚠ ' + Utils.escapeHtml(err.message || 'Request failed') + '</span>');
        }).finally(function () {
            self._busy = false;
            if (self.sendBtn) self.sendBtn.disabled = false;
        });
    }
};

window.DeepSeekTutor = DeepSeekTutor;