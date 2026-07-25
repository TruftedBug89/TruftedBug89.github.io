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
            this.wrapper = null;
            this.canvas = null;
            this.ctx = null;
            this.isDrawing = false;
            this.points = [];
            this.strokes = [];
            this.currentChar = '水';
        }

        mount(targetEl, initialChar = '水') {
            if (!targetEl) return;
            this.currentChar = initialChar;

            const container = document.createElement('div');
            container.className = 'glass-panel';
            container.style.padding = '24px';
            container.style.marginTop = '24px';
            container.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div>
                        <h3 style="font-size:1.1rem; font-weight:700; color:#fff; margin:0;">✍️ Interactive Canvas Stroke Studio</h3>
                        <p style="font-size:0.8rem; color:#a0a0c0; margin:4px 0 0 0;">Practice writing Chinese characters stroke-by-stroke</p>
                    </div>
                </div>

                <div class="stroke-canvas-wrapper">
                    <div class="stroke-canvas-grid"></div>
                    <div class="stroke-canvas-guide" id="stroke-guide-char">${this.currentChar}</div>
                    <canvas id="stroke-drawing-canvas"></canvas>
                </div>

                <div class="stroke-controls">
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-stroke-clear">🧹 Clear Ink</button>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-stroke-toggle-guide">👁️ Toggle Guide</button>
                </div>
            `;

            targetEl.appendChild(container);

            this.canvas = container.querySelector('#stroke-drawing-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.resizeCanvas();
            this.bindEvents(container);
        }

        setChar(char) {
            this.currentChar = char;
            const guide = document.getElementById('stroke-guide-char');
            if (guide) guide.textContent = char;
            this.clear();
        }

        resizeCanvas() {
            if (!this.canvas) return;
            const rect = this.canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            this.canvas.width = (rect.width || 240) * dpr;
            this.canvas.height = (rect.height || 240) * dpr;
            this.ctx.scale(dpr, dpr);
        }

        bindEvents(container) {
            window.addEventListener('resize', () => this.resizeCanvas());

            const clearBtn = container.querySelector('#btn-stroke-clear');
            if (clearBtn) clearBtn.addEventListener('click', () => this.clear());

            const guideBtn = container.querySelector('#btn-stroke-toggle-guide');
            const guideEl = container.querySelector('#stroke-guide-char');
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
                this.isDrawing = true;
                this.points = [getPos(e)];
            };

            const draw = (e) => {
                if (!this.isDrawing) return;
                e.preventDefault();

                const p = getPos(e);
                this.points.push(p);

                if (this.points.length > 2) {
                    const p1 = this.points[this.points.length - 2];
                    const p2 = this.points[this.points.length - 1];

                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = '#00b894';
                    this.ctx.lineWidth = 6;
                    this.ctx.lineCap = 'round';
                    this.ctx.lineJoin = 'round';
                    this.ctx.shadowColor = '#00b894';
                    this.ctx.shadowBlur = 8;
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            };

            const stopDraw = () => {
                if (this.isDrawing) {
                    this.isDrawing = false;
                    this.strokes.push([...this.points]);
                    this.points = [];
                }
            };

            this.canvas.addEventListener('mousedown', startDraw);
            this.canvas.addEventListener('mousemove', draw);
            window.addEventListener('mouseup', stopDraw);

            this.canvas.addEventListener('touchstart', startDraw);
            this.canvas.addEventListener('touchmove', draw);
            window.addEventListener('touchend', stopDraw);
        }

        clear() {
            if (!this.canvas) return;
            const rect = this.canvas.getBoundingClientRect();
            this.ctx.clearRect(0, 0, rect.width || 240, rect.height || 240);
            this.strokes = [];
            this.points = [];
        }
    }

    global.StrokeCanvas = new StrokeCanvasComponent();
})(window);
