// ============================================
// ZHI Studio - AI Tutor (DeepSeek + Google Gemini)
// * API keys + config live ONLY in sessionStorage / session cookies.
// * Dynamic activity-aware prompts.
// * Rate-limit fallback for Google models: 429 → next model.
// ============================================

const AITutor = {
    STORAGE_KEY: 'zhi_ai_config',
    SKIP_KEY: 'zhi_ai_skip_prompt',

    PROVIDERS: {
        deepseek: {
            label: 'DeepSeek',
            baseUrl: 'https://api.deepseek.com',
            models: [
                { id: 'deepseek-v4-flash', label: 'deepseek-v4-flash — fast, cheap, thinking' },
                { id: 'deepseek-v4-pro',   label: 'deepseek-v4-pro — highest quality, thinking' }
            ],
            defaultModel: 'deepseek-v4-flash',
            thinkingByModel: {
                'deepseek-v4-flash': { thinking: 'enabled', effort: 'high' },
                'deepseek-v4-pro':   { thinking: 'enabled', effort: 'high' }
            }
        },
        google: {
            label: 'Google Gemini',
            baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
            models: [
                { id: 'gemini-3.1-flash-lite', label: 'Gemini 3.1 Flash Lite — fast, cheap' },
                { id: 'gemma-4-31b-it',       label: 'Gemma 4 31B — most capable open model' },
                { id: 'gemma-4-26b-a4b-it',   label: 'Gemma 4 26B (4B active) — efficient' }
            ],
            defaultModel: 'gemini-3.1-flash-lite',
            thinkingByModel: {}
        }
    },

    DEFAULTS: {
        provider: 'deepseek',
        apiKeyDS: '',
        apiKeyGoogle: '',
        model: 'deepseek-v4-flash',
        baseUrl: '',
        thinking: 'enabled',
        reasoningEffort: 'high',
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
    // STORAGE
    // ============================================
    _readSession(name) {
        try { const v = sessionStorage.getItem(name); if (v !== null) return v; } catch (e) {}
        try { const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)')); if (m) return decodeURIComponent(m[1]); } catch (e) {}
        return null;
    },
    _writeSession(name, value) {
        try { sessionStorage.setItem(name, value); } catch (e) {}
        try { document.cookie = name + '=' + encodeURIComponent(value) + ';path=/;SameSite=Strict'; } catch (e) {}
    },
    _clearSession(name) {
        try { sessionStorage.removeItem(name); } catch (e) {}
        try { document.cookie = name + '=;path=/;max-age=0;SameSite=Strict'; } catch (e) {}
    },

    // ============================================
    // CONFIG LIFECYCLE
    // ============================================
    init() { this.loadConfig(); this._buildPanel(); },

    loadConfig() {
        var saved = null;
        var raw = this._readSession(this.STORAGE_KEY);
        if (raw) { try { saved = JSON.parse(raw); } catch (e) { saved = null; } }
        this.config = Object.assign({}, this.DEFAULTS, saved || {});
        return this.config;
    },

    saveConfig() { this._writeSession(this.STORAGE_KEY, JSON.stringify(this.config)); },

    getProvider() { return this.PROVIDERS[this.config.provider] || this.PROVIDERS.deepseek; },

    getApiKey() { return this.config.provider === 'google' ? this.config.apiKeyGoogle : this.config.apiKeyDS; },

    isConfigured() { return !!(this.config && this.config.enabled && this.getApiKey()); },

    getModels() { var p = this.getProvider(); return p.models || []; },

    getDefaultModel() { var p = this.getProvider(); return p.defaultModel || this.config.model; },

    markPrompted() { this._writeSession(this.SKIP_KEY, '1'); },
    shouldPromptOnStartup() { return this._readSession(this.SKIP_KEY) === null; },
    promptConfigIfNeeded() { if (this.shouldPromptOnStartup()) this.showConfig({ fromStartup: true }); },

    // ============================================
    // CONFIG MODAL
    // ============================================
    showConfig(opts) {
        opts = opts || {};
        var self = this;
        if (!this.config) this.loadConfig();
        var c = this.config;
        var prov = this.getProvider();

        var providerOpts = '';
        Object.keys(this.PROVIDERS).forEach(function (k) {
            var p = self.PROVIDERS[k];
            providerOpts += '<option value="' + Utils.escapeAttr(k) + '"' + (c.provider === k ? ' selected' : '') + '>' + Utils.escapeHtml(p.label) + '</option>';
        });

        var modelOpts = '';
        prov.models.forEach(function (m) {
            modelOpts += '<option value="' + Utils.escapeAttr(m.id) + '"' + (c.model === m.id ? ' selected' : '') + '>' + Utils.escapeHtml(m.label) + '</option>';
        });
        var modelChips = '';
        prov.models.forEach(function (m) {
            modelChips += '<button type="button" class="ai-model-chip' + (c.model === m.id ? ' active' : '') + '" data-model="' + Utils.escapeAttr(m.id) + '">' + Utils.escapeHtml(m.id) + '</button>';
        });

        var isDS = c.provider === 'deepseek';
        var thinkingHTML = '';
        if (isDS) {
            thinkingHTML =
                '<div class="ai-row">' +
                    '<div class="ai-field"><label for="ds-thinking">Thinking mode</label>' +
                        '<select id="ds-thinking">' +
                            '<option value="enabled"' + (c.thinking !== 'disabled' ? ' selected' : '') + '>Enabled — chain-of-thought reasoning</option>' +
                            '<option value="disabled"' + (c.thinking === 'disabled' ? ' selected' : '') + '>Disabled — direct response</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="ai-field"><label for="ds-effort">Reasoning effort</label>' +
                        '<select id="ds-effort">' +
                            '<option value="high"' + (c.reasoningEffort !== 'max' ? ' selected' : '') + '>High — balanced</option>' +
                            '<option value="max"' + (c.reasoningEffort === 'max' ? ' selected' : '') + '>Max — deepest analysis</option>' +
                        '</select>' +
                    '</div>' +
                '</div>';
        } else {
            thinkingHTML =
                '<p class="ai-config-sub" style="margin-bottom:10px;color:rgba(255,255,255,0.55);font-size:12px;">' +
                    'Google models auto-fallback on rate-limit (429): Flash Lite → Gemma 31B → Gemma 26B → error.</p>';
        }

        var html =
            '<div class="ai-config-card activity-card">' +
                '<h2>AI Tutor Settings</h2>' +
                '<p class="ai-config-sub">AI explanations when you miss an activity. Your keys stay in this browser tab only.</p>' +

                '<div class="ai-privacy">' +
                    '<span class="ai-privacy-icon">🛡️</span>' +
                    '<div><b>Keys never leave your device.</b> Stored in session only (sessionStorage + session cookie), cleared on tab close. Never sent to this site\'s server. Calls go directly browser → API.</div>' +
                '</div>' +

                '<div class="ai-row">' +
                    '<div class="ai-field"><label for="ds-provider">Provider</label>' +
                        '<select id="ds-provider">' + providerOpts + '</select>' +
                    '</div>' +
                    '<div class="ai-field"><label for="ds-model">Model</label>' +
                        '<select id="ds-model" style="display:none;">' + modelOpts + '</select>' +
                        '<div class="ai-model-presets">' + modelChips + '</div>' +
                    '</div>' +
                '</div>' +

                '<div class="ai-field" id="field-ds-key"><label for="ds-api-key">DeepSeek API key</label>' +
                    '<input id="ds-api-key" type="password" placeholder="sk-..." autocomplete="off" value="' + Utils.escapeAttr(c.apiKeyDS || '') + '">' +
                    '<div class="ai-hint">Get one at platform.deepseek.com</div>' +
                '</div>' +

                '<div class="ai-field hidden" id="field-google-key"><label for="ds-google-key">Google Gemini API key</label>' +
                    '<input id="ds-google-key" type="password" placeholder="AIza..." autocomplete="off" value="' + Utils.escapeAttr(c.apiKeyGoogle || '') + '">' +
                    '<div class="ai-hint">Get one at aistudio.google.com/apikey</div>' +
                '</div>' +

                thinkingHTML +

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
        var modalBody = document.getElementById('modal-body');

        function refreshUI() {
            var isGoogle = modalBody.querySelector('#ds-provider').value === 'google';
            document.getElementById('field-ds-key').classList.toggle('hidden', isGoogle);
            document.getElementById('field-google-key').classList.toggle('hidden', !isGoogle);
            var thinkRow = modalBody.querySelector('#ds-thinking');
            if (thinkRow) {
                thinkRow.closest('.ai-row').style.display = isGoogle ? 'none' : '';
            }
            // Rebuild model chips for selected provider
            var providerKey = modalBody.querySelector('#ds-provider').value;
            var newProv = self.PROVIDERS[providerKey] || self.PROVIDERS.deepseek;
            var chips = modalBody.querySelector('.ai-model-presets');
            chips.innerHTML = '';
            newProv.models.forEach(function (m) {
                var chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'ai-model-chip' + (self.config.model === m.id ? ' active' : '');
                chip.dataset.model = m.id;
                chip.textContent = m.id;
                chip.addEventListener('click', function () {
                    chips.querySelectorAll('.ai-model-chip').forEach(function (c2) { c2.classList.remove('active'); });
                    chip.classList.add('active');
                });
                chips.appendChild(chip);
            });
            document.getElementById('ds-model').innerHTML = newProv.models.map(function (m) {
                return '<option value="' + Utils.escapeAttr(m.id) + '"' + (self.config.model === m.id ? ' selected' : '') + '>' + Utils.escapeHtml(m.label) + '</option>';
            }).join('');
        }

        var providerSelect = modalBody.querySelector('#ds-provider');
        if (providerSelect) {
            providerSelect.addEventListener('change', refreshUI);
            refreshUI();
        }

        modalBody.querySelectorAll('.ai-model-chip').forEach(function (chip) {
            chip.addEventListener('click', function () {
                modalBody.querySelectorAll('.ai-model-chip').forEach(function (c2) { c2.classList.remove('active'); });
                chip.classList.add('active');
            });
        });

        var saveBtn = modalBody.querySelector('[data-cm-action="ds-save"]');
        if (saveBtn) saveBtn.addEventListener('click', function () {
            self.config.provider = (modalBody.querySelector('#ds-provider').value || 'deepseek').trim();
            self.config.apiKeyDS = (modalBody.querySelector('#ds-api-key').value || '').trim();
            self.config.apiKeyGoogle = (modalBody.querySelector('#ds-google-key').value || '').trim();
            var activeChip = modalBody.querySelector('.ai-model-chip.active');
            self.config.model = (activeChip ? activeChip.dataset.model : (modalBody.querySelector('#ds-model').value || self.getDefaultModel())).trim();
            var thinkEl = modalBody.querySelector('#ds-thinking');
            if (thinkEl) self.config.thinking = thinkEl.value.trim();
            var effortEl = modalBody.querySelector('#ds-effort');
            if (effortEl) self.config.reasoningEffort = effortEl.value.trim();
            self.config.autoExplain = !!modalBody.querySelector('#ds-autoexplain').checked;
            self.config.enabled = !!modalBody.querySelector('#ds-enabled').checked;
            self.saveConfig();
            self.markPrompted();
            App.closeModal();
            if (self.config.enabled && self.getApiKey()) {
                Utils.showToast('AI tutor ready', 'success');
            } else {
                Utils.showToast('AI tutor settings saved', 'info');
            }
        });

        var skipBtn = modalBody.querySelector('[data-cm-action="ds-skip"]');
        if (skipBtn) skipBtn.addEventListener('click', function () {
            self.markPrompted();
            App.closeModal();
        });
    },

    // ============================================
    // ACTIVITY LABELS
    // ============================================
    _activityLabel(skill, type) {
        var map = {
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

    // ============================================
    // PROMPT BUILDERS
    // ============================================
    buildSystemPrompt() {
        return 'You are ZHI, an expert Chinese-language tutor built into the ZHI Studio learning app. ' +
            'A learner just got an answer wrong. Explain WHY in 3–7 short sentences: what the rule or pattern is, ' +
            'how to fix the mistake, and optionally a tiny example. Reference specific Chinese characters, pinyin, ' +
            'tones, or grammar. Be warm, direct, no markdown headings.';
    },

    buildUserMessage(ctx) {
        var lines = ['ACTIVITY: ' + this._activityLabel(ctx.skill, ctx.activityType)];
        if (ctx.skill) lines.push('Skill area: ' + ctx.skill);
        if (ctx.activityType) lines.push('Exercise type: ' + ctx.activityType);
        if (ctx.prompt) lines.push('Instructions: ' + ctx.prompt);
        if (ctx.question) lines.push('Question: ' + ctx.question);
        if (ctx.sentence) lines.push('Sentence: ' + ctx.sentence);
        if (ctx.passage) lines.push('Passage: ' + ctx.passage);
        if (ctx.unknownWord) lines.push('Unknown word: ' + ctx.unknownWord);
        if (ctx.correctAnswer) lines.push('Correct answer: ' + ctx.correctAnswer);
        if (ctx.pinyin) lines.push('Pinyin: ' + ctx.pinyin);
        if (ctx.meaning) lines.push('Meaning: ' + ctx.meaning);
        if (ctx.tone) lines.push('Tone(s): ' + ctx.tone);
        if (ctx.options && ctx.options.length) lines.push('Options: ' + ctx.options.map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + o; }).join('  |  '));
        if (ctx.correctIndex !== undefined && ctx.options) lines.push('Correct option: ' + String.fromCharCode(65 + ctx.correctIndex) + ') ' + ctx.options[ctx.correctIndex]);
        if (ctx.selectedIndex !== undefined && ctx.options) lines.push('Learner picked: ' + String.fromCharCode(65 + ctx.selectedIndex) + ') ' + ctx.options[ctx.selectedIndex]);
        if (ctx.userAnswer) lines.push('Learner\'s answer: ' + ctx.userAnswer);
        if (ctx.pattern) lines.push('Grammar pattern: ' + ctx.pattern);
        if (ctx.explanation) lines.push('Built-in rule: ' + ctx.explanation);
        if (ctx.pairWord1) lines.push('Word 1: ' + ctx.pairWord1 + ' (' + (ctx.pairPinyin1 || '') + ') tone ' + (ctx.tone1 || '?'));
        if (ctx.pairWord2) lines.push('Word 2: ' + ctx.pairWord2 + ' (' + (ctx.pairPinyin2 || '') + ') tone ' + (ctx.tone2 || '?'));
        if (ctx.contextClues && ctx.contextClues.length) lines.push('Clues: ' + ctx.contextClues.join('; '));
        lines.push('');
        lines.push('Explain why the answer is wrong for this ' + this._activityLabel(ctx.skill, ctx.activityType) + ' and how to fix it.');
        return lines.join('\n');
    },

    buildFollowUp(userText) {
        var base = this._lastContext && Object.keys(this._lastContext).length ? this.buildUserMessage(this._lastContext) : '';
        var intro = 'Follow-up question about the activity above: "' + userText + '". ' +
            'Answer directly, stay focused on this exercise. If off-topic, steer back.';
        return intro + (base ? '\n\n--- context ---\n' + base : '');
    },

    // ============================================
    // API CALLS (DeepSeek + Google Gemini)
    // ============================================
    _callDeepSeek(userMessage) {
        var cfg = this.config;
        var url = (cfg.baseUrl || this.PROVIDERS.deepseek.baseUrl).replace(/\/+$/, '') + '/chat/completions';
        var body = {
            model: cfg.model || 'deepseek-v4-flash',
            messages: [
                { role: 'system', content: this.buildSystemPrompt() },
                { role: 'user', content: userMessage }
            ],
            thinking: { type: (cfg.thinking || 'enabled') },
            stream: false
        };
        if (cfg.thinking !== 'disabled') { body.reasoning_effort = cfg.reasoningEffort || 'high'; }
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (cfg.apiKeyDS || '') },
            body: JSON.stringify(body)
        }).then(function (res) {
            if (!res.ok) return res.text().then(function (t) { throw new Error('DeepSeek ' + res.status + ': ' + (t || res.statusText)); });
            return res.json();
        }).then(function (data) {
            var c = data && data.choices && data.choices[0];
            if (c && c.message && c.message.content) return c.message.content;
            throw new Error('DeepSeek returned no message');
        });
    },

    _callGoogle(modelId, userMessage) {
        var cfg = this.config;
        var base = this.PROVIDERS.google.baseUrl;
        var url = base + '/models/' + encodeURIComponent(modelId) + ':generateContent?key=' + encodeURIComponent(cfg.apiKeyGoogle || '');
        var body = {
            system_instruction: { parts: [{ text: this.buildSystemPrompt() }] },
            contents: [{ role: 'user', parts: [{ text: userMessage }] }],
            generationConfig: { temperature: 0.7 }
        };
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(function (res) {
            if (!res.ok) return res.text().then(function (t) {
                var err = new Error('Gemini ' + res.status + ': ' + (t || res.statusText));
                err.status = res.status;
                throw err;
            });
            return res.json();
        }).then(function (data) {
            var parts = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
            if (parts && parts.length) return parts.map(function (p) { return p.text || ''; }).join('');
            throw new Error('Gemini returned no content');
        });
    },

    _callGoogleWithFallback(userMessage) {
        var models = this.PROVIDERS.google.models;
        var self = this;

        function tryNext(idx) {
            if (idx >= models.length) {
                throw new Error('All Gemini models rate-limited (429). Try again shortly or switch provider.');
            }
            var modelId = models[idx].id;
            return self._callGoogle(modelId, userMessage).catch(function (err) {
                if (err.status === 429) { return tryNext(idx + 1); }
                throw err;
            });
        }
        return tryNext(0);
    },

    callAPI(userMessage) {
        if (this.config.provider === 'google') {
            return this._callGoogleWithFallback(userMessage);
        }
        return this._callDeepSeek(userMessage);
    },

    // ============================================
    // PANEL UI
    // ============================================
    _buildPanel() {
        if (document.getElementById('ai-tutor-panel')) return;
        var panel = document.createElement('aside');
        panel.id = 'ai-tutor-panel';
        panel.setAttribute('aria-label', 'AI tutor explanations');
        panel.hidden = true;
        panel.innerHTML =
            '<div class="ai-head">' +
                '<div class="ai-seal">AI</div>' +
                '<div class="ai-title"><strong>AI TUTOR</strong><small>local key · on-device</small></div>' +
                '<div class="ai-actions">' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="settings" title="Settings" aria-label="AI settings">⚙</button>' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="hide" title="Hide panel" aria-label="Hide panel">←</button>' +
                    '<button type="button" class="ai-icon-btn" data-ai-action="close" title="Close" aria-label="Close">×</button>' +
                '</div>' +
            '</div>' +
            '<div class="ai-body"></div>' +
            '<div class="ai-footer">' +
                '<textarea class="ai-input" rows="1" placeholder="Follow-up question…" aria-label="Ask the tutor"></textarea>' +
                '<button type="button" class="ai-send" data-ai-action="send" aria-label="Send">➤</button>' +
            '</div>';
        document.body.appendChild(panel);

        var handle = document.createElement('button');
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

        panel.querySelector('[data-ai-action="close"]').addEventListener('click', this.close.bind(this));
        panel.querySelector('[data-ai-action="hide"]').addEventListener('click', this.hide.bind(this));
        panel.querySelector('[data-ai-action="settings"]').addEventListener('click', function () { AITutor.showConfig({}); });
        this.sendBtn.addEventListener('click', this._sendFollowUp.bind(this));
        handle.addEventListener('click', this.show.bind(this));

        this.input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); AITutor._sendFollowUp(); }
        });
        this.input.addEventListener('input', AITutor._autosizeInput.bind(AITutor));
    },

    _autosizeInput() { var el = this.input; if (el) { el.style.height = 'auto'; el.style.height = Math.min(120, el.scrollHeight) + 'px'; } },

    show() {
        if (!this.panel) this._buildPanel();
        this.panel.hidden = false;
        requestAnimationFrame(function () { AITutor.panel.classList.add('open'); });
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
        if (this.body) this.body.innerHTML = '';
    },

    _append(html, cls) {
        if (!this.body) return;
        var div = document.createElement('div');
        div.className = 'ai-msg' + (cls ? ' ' + cls : '');
        div.innerHTML = html;
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
    },

    _appendContext(ctx) {
        if (!this.body || !ctx) return;
        var parts = [];
        if (ctx.activityType) parts.push('<b>' + Utils.escapeHtml(this._activityLabel(ctx.skill, ctx.activityType)) + '</b>');
        if (ctx.correctAnswer) parts.push('Target: <b lang="zh">' + Utils.escapeHtml(ctx.correctAnswer) + '</b>');
        if (ctx.userAnswer) parts.push('Your answer: <b>' + Utils.escapeHtml(ctx.userAnswer) + '</b>');
        if (!parts.length) return;
        var div = document.createElement('div');
        div.className = 'ai-context';
        div.innerHTML = parts.join(' &nbsp;·&nbsp; ');
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
    },

    _showLoading() {
        var div = document.createElement('div');
        div.className = 'ai-loading';
        div.innerHTML = '<span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span><span>Thinking…</span>';
        div.dataset.aiLoading = '1';
        this.body.appendChild(div);
        this.body.scrollTop = this.body.scrollHeight;
    },

    _removeLoading() { var l = this.body && this.body.querySelector('[data-ai-loading="1"]'); if (l) l.remove(); },

    // ============================================
    // MAIN ENTRY
    // ============================================
    explain(context) {
        if (!this.config) this.loadConfig();
        if (!this.config.enabled) return;
        if (!this.getApiKey()) {
            this.show();
            if (this.body) {
                this.body.innerHTML = '';
                var div = document.createElement('div');
                div.className = 'ai-empty';
                div.innerHTML = 'No API key set for this session.<br><br><button type="button" class="btn btn-primary" data-ai-open-config>Configure AI Tutor</button>';
                this.body.appendChild(div);
                div.querySelector('[data-ai-open-config]').addEventListener('click', function () { AITutor.showConfig({}); });
            }
            return;
        }
        if (!this.config.autoExplain && !this._forceNext) return;
        this._forceNext = false;
        this._lastContext = context || {};
        this.show();
        if (this.body) this.body.innerHTML = '';
        this._appendContext(context);
        var loading = this._showLoading();
        this._busy = true;
        if (this.sendBtn) this.sendBtn.disabled = true;
        var self = this;
        var message = this.buildUserMessage(context);
        this.callAPI(message).then(function (text) {
            self._removeLoading();
            self._append(Utils.escapeHtml(text).replace(/\n/g, '<br>'));
        }).catch(function (err) {
            self._removeLoading();
            self._append('<span style="color:#ff9b9b;">⚠ ' + Utils.escapeHtml(err.message || 'Request failed') + '</span><br><br><small style="color:rgba(255,255,255,0.45);">Check key, model, and provider in ⚙ settings. Keys stored in session only.</small>');
        }).finally(function () {
            self._busy = false;
            if (self.sendBtn) self.sendBtn.disabled = false;
        });
    },

    forceNext() { this._forceNext = true; },

    _sendFollowUp() {
        if (AITutor._busy) return;
        var text = (AITutor.input && AITutor.input.value || '').trim();
        if (!text) return;
        if (!AITutor.config || !AITutor.getApiKey()) { AITutor.showConfig({}); return; }
        AITutor._append(Utils.escapeHtml(text), 'ai-user');
        AITutor.input.value = '';
        AITutor._autosizeInput();
        var loading = AITutor._showLoading();
        AITutor._busy = true;
        if (AITutor.sendBtn) AITutor.sendBtn.disabled = true;
        var msg = AITutor.buildFollowUp(text);
        AITutor.callAPI(msg).then(function (reply) {
            AITutor._removeLoading();
            AITutor._append(Utils.escapeHtml(reply).replace(/\n/g, '<br>'));
        }).catch(function (err) {
            AITutor._removeLoading();
            AITutor._append('<span style="color:#ff9b9b;">⚠ ' + Utils.escapeHtml(err.message || 'Request failed') + '</span>');
        }).finally(function () {
            AITutor._busy = false;
            if (AITutor.sendBtn) AITutor.sendBtn.disabled = false;
        });
    }
};

window.AITutor = AITutor;