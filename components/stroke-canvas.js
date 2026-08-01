/**
 * ==========================================
 * CHARACTER STROKE DRAWING CANVAS COMPONENT
 * ==========================================
 * Interactive Canvas component allowing users to practice drawing Chinese character
 * strokes with fluid ink simulation, clear controls, and visual effects.
 */
(function (global) {
    'use strict';

    class StrokeCanvasComponent {
        constructor() {
            this.container = null;
            this.canvas = null;
            this.ctx = null;
            this.isDrawing = false;
            this.points = [];
            this.strokes = [];
            this.currentChar = '水';
        }

        mount(targetEl, initialChar = '水') {
            if (!targetEl) return;
            this.container = targetEl;
            this.currentChar = initialChar;

            const card = document.createElement('div');
            card.className = 'glass-panel';
            card.style.padding = '24px';
            card.style.marginTop = '24px';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div>
                        <h3 style="font-size:1.1rem; font-weight:700; color:#fff; margin:0;">✍️ Interactive Canvas Stroke Studio</h3>
                        <p style="font-size:0.8rem; color:#a0a0c0; margin:4px 0 0 0;">Practice writing Chinese characters stroke-by-stroke</p>
                    </div>
                </div>

                <div class="stroke-canvas-wrapper">
                    <div class="stroke-canvas-grid"></div>
                    <div class="stroke-canvas-guide" id="stroke-guide-char">${this.currentChar}</div>
                    <canvas id="stroke-drawing-canvas" role="img" aria-label="Interactive character stroke practice area"></canvas>
                </div>

                <div class="stroke-controls">
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-stroke-undo">↩️ Undo</button>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-stroke-clear">🧹 Clear Ink</button>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-stroke-toggle-guide">👁️ Toggle Guide</button>
                </div>
            `;

            targetEl.appendChild(card);

            this.canvas = card.querySelector('#stroke-drawing-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.resizeCanvas();
            this.bindEvents(card);
        }

        setChar(char) {
            this.currentChar = char;
            const guide = this.container ? this.container.querySelector('#stroke-guide-char') : null;
            if (guide) guide.textContent = char;
            this.clear();
        }

        resizeCanvas() {
            if (!this.canvas || !this.ctx) return;
            const rect = this.canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            this.canvas.width = (rect.width || 240) * dpr;
            this.canvas.height = (rect.height || 240) * dpr;
            this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            this.redrawStrokes();
        }

        bindEvents(card) {
            // ⚡ Bolt optimization: Debounce resize events to prevent reflows
            const debouncedResize = Utils.debounce(() => this.resizeCanvas(), 150);
            window.addEventListener('resize', debouncedResize);

            const clearBtn = card.querySelector('#btn-stroke-clear');
            if (clearBtn) clearBtn.addEventListener('click', () => this.clear());

            const undoBtn = card.querySelector('#btn-stroke-undo');
            if (undoBtn) undoBtn.addEventListener('click', () => this.undo());

            const guideBtn = card.querySelector('#btn-stroke-toggle-guide');
            const guideEl = card.querySelector('#stroke-guide-char');
            if (guideBtn && guideEl) {
                guideBtn.addEventListener('click', () => {
                    guideEl.style.display = guideEl.style.display === 'none' ? 'block' : 'none';
                });
            }

            const getPos = (e) => {
                const rect = this.canvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return {
                    x: clientX - rect.left,
                    y: clientY - rect.top,
                    t: Date.now()
                };
            };

            const startDraw = (e) => {
                if (e.touches && e.touches.length > 1) return;
                this.isDrawing = true;
                this.points = [getPos(e)];
            };

            const draw = (e) => {
                if (!this.isDrawing) return;
                if (e.preventDefault && e.cancelable) e.preventDefault();

                const p = getPos(e);
                this.points.push(p);

                if (this.points.length >= 2) {
                    const p1 = this.points[this.points.length - 2];
                    const p2 = this.points[this.points.length - 1];
                    this.renderSegment(p1, p2);
                }
            };

            const stopDraw = () => {
                if (this.isDrawing) {
                    this.isDrawing = false;
                    if (this.points.length === 1) {
                        const p = this.points[0];
                        this.renderDot(p);
                    }
                    this.strokes.push([...this.points]);
                    this.points = [];
                }
            };

            this.canvas.addEventListener('mousedown', startDraw);
            this.canvas.addEventListener('mousemove', draw);
            window.addEventListener('mouseup', stopDraw);

            this.canvas.addEventListener('touchstart', startDraw, { passive: true });
            this.canvas.addEventListener('touchmove', draw, { passive: false });
            window.addEventListener('touchend', stopDraw);
        }

        renderSegment(p1, p2) {
            if (!this.ctx) return;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = '#00b894';
            this.ctx.lineWidth = 6;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            this.ctx.stroke();
            this.ctx.restore();
        }

        renderDot(p) {
            if (!this.ctx) return;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            this.ctx.fillStyle = '#00b894';
            this.ctx.fill();
            this.ctx.restore();
        }

        redrawStrokes() {
            if (!this.canvas || !this.ctx) return;
            const rect = this.canvas.getBoundingClientRect();
            this.ctx.clearRect(0, 0, rect.width || 240, rect.height || 240);

            this.strokes.forEach(pts => {
                if (pts.length === 1) {
                    this.renderDot(pts[0]);
                } else {
                    for (let i = 0; i < pts.length - 1; i++) {
                        this.renderSegment(pts[i], pts[i + 1]);
                    }
                }
            });
        }

        undo() {
            if (this.strokes.length > 0) {
                this.strokes.pop();
                this.redrawStrokes();
            }
        }

        clear() {
            if (!this.canvas || !this.ctx) return;
            const rect = this.canvas.getBoundingClientRect();
            this.ctx.clearRect(0, 0, rect.width || 240, rect.height || 240);
            this.strokes = [];
            this.points = [];
        }

        unmount() {
            this.clear();
            this.container = null;
            this.canvas = null;
            this.ctx = null;
        }
    }

    global.StrokeCanvas = new StrokeCanvasComponent();
})(window);
