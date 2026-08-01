/**
 * ==========================================
 * TONE VISUALIZER CANVAS COMPONENT
 * ==========================================
 * Interactive Canvas component that visualizes Mandarin tones 1-4 with
 * real-time pitch contours, canvas animation, and Web Audio synthesis.
 */
(function (global) {
    'use strict';

    const TONES_DATA = {
        1: { name: '1st Tone · High Flat 阴平 (55)', mark: 'ā', color: '#fdcb6e', points: [0.8, 0.8, 0.8, 0.8], freqStart: 320, freqEnd: 320 },
        2: { name: '2nd Tone · Rising 阳平 (35)', mark: 'á', color: '#00b894', points: [0.35, 0.45, 0.65, 0.85], freqStart: 220, freqEnd: 330 },
        3: { name: '3rd Tone · Dip & Rise 上声 (214)', mark: 'ǎ', color: '#6c5ce7', points: [0.4, 0.2, 0.15, 0.75], freqStart: 240, freqEnd: 310 },
        4: { name: '4th Tone · Falling 去声 (51)', mark: 'à', color: '#ff7675', points: [0.9, 0.6, 0.35, 0.15], freqStart: 360, freqEnd: 180 }
    };

    class ToneVisualizerComponent {
        constructor() {
            this.container = null;
            this.card = null;
            this.canvas = null;
            this.ctx = null;
            this.activeTone = 1;
            this.animProgress = 0;
            this.animId = null;
            this.audioCtx = null;
            this.currentOsc = null;
        }

        mount(targetEl) {
            if (!targetEl) return;
            this.container = targetEl;

            this.card = document.createElement('div');
            this.card.className = 'tone-canvas-card';
            this.card.innerHTML = `
                <div class="tone-canvas-header">
                    <div>
                        <div class="tone-canvas-title">
                            <span>🎵 Mandarin Tone Pitch Canvas</span>
                        </div>
                        <div class="tone-canvas-subtitle" id="tone-canvas-label">${TONES_DATA[1].name}</div>
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-tone-replay">🔁 Replay Tone</button>
                </div>
                <div class="tone-buttons-grid">
                    <button type="button" class="tone-btn active" data-tone="1">
                        <span class="tone-btn__mark">ā</span>
                        <span class="tone-btn__label">1st (Flat 55)</span>
                    </button>
                    <button type="button" class="tone-btn" data-tone="2">
                        <span class="tone-btn__mark">á</span>
                        <span class="tone-btn__label">2nd (Rising 35)</span>
                    </button>
                    <button type="button" class="tone-btn" data-tone="3">
                        <span class="tone-btn__mark">ǎ</span>
                        <span class="tone-btn__label">3rd (Dip-Rise 214)</span>
                    </button>
                    <button type="button" class="tone-btn" data-tone="4">
                        <span class="tone-btn__mark">à</span>
                        <span class="tone-btn__label">4th (Falling 51)</span>
                    </button>
                </div>
                <canvas class="tone-canvas-view" id="tone-canvas-view" role="img" aria-label="Mandarin tone pitch contour graph"></canvas>
            `;
            targetEl.appendChild(this.card);

            this.canvas = this.card.querySelector('#tone-canvas-view');
            this.ctx = this.canvas.getContext('2d');
            this.resizeCanvas();
            this.bindEvents();
            this.selectTone(1);
        }

        resizeCanvas() {
            if (!this.canvas || !this.ctx) return;
            const rect = this.canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            this.canvas.width = (rect.width || 400) * dpr;
            this.canvas.height = (rect.height || 180) * dpr;
            this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            this.drawStaticFrame();
        }

        bindEvents() {
            // ⚡ Bolt optimization: Debounce resize events to prevent reflows
            const debouncedResize = Utils.debounce(() => this.resizeCanvas(), 150);
            window.addEventListener('resize', debouncedResize);

            const btns = this.card.querySelectorAll('.tone-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    btns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const tone = parseInt(btn.dataset.tone, 10);
                    this.selectTone(tone);
                    this.playAudioTone(tone);
                });
            });

            const replayBtn = this.card.querySelector('#btn-tone-replay');
            if (replayBtn) {
                replayBtn.addEventListener('click', () => {
                    this.selectTone(this.activeTone);
                    this.playAudioTone(this.activeTone);
                });
            }
        }

        selectTone(toneNum) {
            this.activeTone = toneNum;
            const data = TONES_DATA[toneNum];

            const labelEl = this.card ? this.card.querySelector('#tone-canvas-label') : null;
            if (labelEl) labelEl.textContent = data.name;

            this.animProgress = 0;
            this.animateCurve();
        }

        playAudioTone(toneNum) {
            try {
                if (this.currentOsc) {
                    try { this.currentOsc.stop(); } catch (ignore) {}
                    this.currentOsc = null;
                }

                const data = TONES_DATA[toneNum];
                if (!this.audioCtx) {
                    const AC = window.AudioContext || window.webkitAudioContext;
                    if (AC) this.audioCtx = new AC();
                }
                if (!this.audioCtx) return;
                if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                this.currentOsc = osc;

                osc.type = 'sine';
                const now = this.audioCtx.currentTime;
                const duration = 0.45;

                if (toneNum === 1) {
                    osc.frequency.setValueAtTime(data.freqStart, now);
                } else if (toneNum === 2) {
                    osc.frequency.setValueAtTime(data.freqStart, now);
                    osc.frequency.exponentialRampToValueAtTime(data.freqEnd, now + duration);
                } else if (toneNum === 3) {
                    osc.frequency.setValueAtTime(240, now);
                    osc.frequency.linearRampToValueAtTime(170, now + duration * 0.4);
                    osc.frequency.exponentialRampToValueAtTime(300, now + duration);
                } else if (toneNum === 4) {
                    osc.frequency.setValueAtTime(data.freqStart, now);
                    osc.frequency.exponentialRampToValueAtTime(data.freqEnd, now + duration);
                }

                gain.gain.setValueAtTime(0.001, now);
                gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

                osc.connect(gain);
                gain.connect(this.audioCtx.destination);

                osc.onended = () => {
                    try {
                        osc.disconnect();
                        gain.disconnect();
                    } catch (ignore) {}
                };

                osc.start(now);
                osc.stop(now + duration + 0.05);
            } catch (ignore) {}
        }

        unmount() {
            if (this.animId) cancelAnimationFrame(this.animId);
            if (this.currentOsc) {
                try { this.currentOsc.stop(); } catch (ignore) {}
            }
            if (this.card && this.card.parentNode) {
                this.card.parentNode.removeChild(this.card);
            }
            this.container = null;
            this.card = null;
        }

        drawStaticFrame() {
            if (!this.canvas || !this.ctx) return;
            const rect = this.canvas.getBoundingClientRect();
            const w = rect.width || 400;
            const h = rect.height || 180;
            const data = TONES_DATA[this.activeTone];

            this.ctx.clearRect(0, 0, w, h);

            // Grid pitch lines
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
            this.ctx.lineWidth = 1;
            for (let i = 1; i <= 5; i++) {
                const y = h - (h * 0.18 * i);
                this.ctx.beginPath();
                this.ctx.moveTo(30, y);
                this.ctx.lineTo(w - 20, y);
                this.ctx.stroke();

                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
                this.ctx.font = "10px 'DM Mono', monospace";
                this.ctx.fillText(`P${i}`, 10, y + 3);
            }

            // Draw Tone Curve
            const pts = data.points;
            const startX = 40;
            const endX = w - 30;
            const stepX = (endX - startX) / (pts.length - 1);

            this.ctx.beginPath();
            for (let i = 0; i < pts.length; i++) {
                const px = startX + stepX * i;
                const py = h - (pts[i] * h * 0.75 + h * 0.1);

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    const prevX = startX + stepX * (i - 1);
                    const prevY = h - (pts[i - 1] * h * 0.75 + h * 0.1);
                    const cpX = (prevX + px) / 2;
                    this.ctx.quadraticCurveTo(cpX, prevY, px, py);
                }
            }

            this.ctx.strokeStyle = data.color;
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }

        animateCurve() {
            if (this.animId) cancelAnimationFrame(this.animId);

            const draw = () => {
                this.drawStaticFrame();

                const rect = this.canvas.getBoundingClientRect();
                const w = rect.width || 400;
                const h = rect.height || 180;
                const data = TONES_DATA[this.activeTone];
                const pts = data.points;
                const startX = 40;
                const endX = w - 30;
                const stepX = (endX - startX) / (pts.length - 1);

                this.animProgress = Math.min(this.animProgress + 0.04, 1.0);

                // Moving particle head along the curve
                const currentIdx = Math.min(Math.floor(this.animProgress * (pts.length - 1)), pts.length - 2);
                const subT = (this.animProgress * (pts.length - 1)) - currentIdx;
                const p1X = startX + stepX * currentIdx;
                const p1Y = h - (pts[currentIdx] * h * 0.75 + h * 0.1);
                const p2X = startX + stepX * (currentIdx + 1);
                const p2Y = h - (pts[currentIdx + 1] * h * 0.75 + h * 0.1);

                const headX = p1X + (p2X - p1X) * subT;
                const headY = p1Y + (p2Y - p1Y) * subT;

                this.ctx.beginPath();
                this.ctx.arc(headX, headY, 7, 0, Math.PI * 2);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.fill();

                if (this.animProgress < 1.0) {
                    this.animId = requestAnimationFrame(draw);
                }
            };

            draw();
        }
    }

    global.ToneVisualizer = new ToneVisualizerComponent();
})(window);
