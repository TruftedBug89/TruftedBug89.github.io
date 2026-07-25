/**
 * ==========================================
 * CANVAS UI ENGINE - Interactive HTML-in-Canvas
 * ==========================================
 * High-performance 60fps canvas background engine with particle dynamics,
 * calligraphy ink brush ribbon, and magnetic interactive character nodes.
 */
(function (global) {
    'use strict';

    const CHARACTERS = ['字', '学', '知', '龙', '凤', '和', '道', '智', '福', '明', '德', '心', '美', '声', '义', '书', '爱', '力', '天', '地'];

    class CanvasEngine {
        constructor() {
            this.canvas = null;
            this.ctx = null;
            this.width = 0;
            this.height = 0;
            this.dpr = 1;
            this.particles = [];
            this.trail = [];
            this.ripples = [];
            this.pointer = { x: -1000, y: -1000, active: false, speed: 0, lastX: 0, lastY: 0 };
            this.mode = 'flow'; // 'flow', 'ink', 'matrix'
            this.animId = null;
            this.isPaused = false;
        }

        init() {
            if (this.canvas) return;

            this.canvas = document.createElement('canvas');
            this.canvas.id = 'canvas-ui-bg';
            this.canvas.className = 'canvas-ui-bg';
            document.body.prepend(this.canvas);

            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.bindEvents();
            this.createParticles();
            this.createControlsBadge();
            this.animate();
        }

        resize() {
            this.dpr = window.devicePixelRatio || 1;
            this.width = window.innerWidth;
            this.height = window.innerHeight;

            this.canvas.width = this.width * this.dpr;
            this.canvas.height = this.height * this.dpr;
            this.canvas.style.width = this.width + 'px';
            this.canvas.style.height = this.height + 'px';

            this.ctx.scale(this.dpr, this.dpr);
        }

        createParticles() {
            const count = Math.min(Math.floor((this.width * this.height) / 22000), 45);
            this.particles = [];

            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
                    size: 14 + Math.random() * 22,
                    alpha: 0.12 + Math.random() * 0.3,
                    baseAlpha: 0.12 + Math.random() * 0.3,
                    color: Math.random() > 0.4 ? '#6c5ce7' : (Math.random() > 0.5 ? '#00b894' : '#ff7675'),
                    angle: Math.random() * Math.PI * 2,
                    spin: (Math.random() - 0.5) * 0.01
                });
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => this.resize());

            window.addEventListener('mousemove', (e) => {
                const dx = e.clientX - this.pointer.lastX;
                const dy = e.clientY - this.pointer.lastY;
                this.pointer.speed = Math.sqrt(dx * dx + dy * dy);
                this.pointer.x = e.clientX;
                this.pointer.y = e.clientY;
                this.pointer.lastX = e.clientX;
                this.pointer.lastY = e.clientY;
                this.pointer.active = true;

                if (this.pointer.speed > 2) {
                    this.trail.push({
                        x: e.clientX,
                        y: e.clientY,
                        radius: Math.min(this.pointer.speed * 0.5 + 4, 18),
                        alpha: 0.4,
                        life: 1.0
                    });
                    if (this.trail.length > 25) this.trail.shift();
                }
            });

            window.addEventListener('mouseleave', () => {
                this.pointer.active = false;
            });

            window.addEventListener('click', (e) => {
                this.ripples.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 10,
                    maxRadius: 160 + Math.random() * 80,
                    alpha: 0.7
                });
            });
        }

        createControlsBadge() {
            if (document.querySelector('.canvas-ui-controls')) return;

            const controls = document.createElement('div');
            controls.className = 'canvas-ui-controls';
            controls.innerHTML = `
                <div class="canvas-ui-badge">
                    <span class="canvas-ui-badge__dot"></span>
                    <span>Canvas UI</span>
                </div>
                <button type="button" class="canvas-ui-btn" id="btn-canvas-toggle-mode" title="Switch Canvas Theme Mode">
                    ✨ Flow
                </button>
            `;
            document.body.appendChild(controls);

            const modeBtn = controls.querySelector('#btn-canvas-toggle-mode');
            if (modeBtn) {
                modeBtn.addEventListener('click', () => {
                    if (this.mode === 'flow') {
                        this.mode = 'ink';
                        modeBtn.textContent = '🖌️ Ink';
                    } else if (this.mode === 'ink') {
                        this.mode = 'matrix';
                        modeBtn.textContent = '🌌 Matrix';
                    } else {
                        this.mode = 'flow';
                        modeBtn.textContent = '✨ Flow';
                    }
                });
            }
        }

        animate() {
            if (this.isPaused) return;

            this.ctx.clearRect(0, 0, this.width, this.height);

            // 1. Draw ripples
            for (let i = this.ripples.length - 1; i >= 0; i--) {
                const r = this.ripples[i];
                r.radius += 4;
                r.alpha -= 0.015;

                if (r.alpha <= 0 || r.radius >= r.maxRadius) {
                    this.ripples.splice(i, 1);
                    continue;
                }

                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(108, 92, 231, ${r.alpha})`;
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.restore();
            }

            // 2. Draw brush trail
            if (this.trail.length > 1) {
                this.ctx.save();
                for (let i = 0; i < this.trail.length - 1; i++) {
                    const p1 = this.trail[i];
                    const p2 = this.trail[i + 1];

                    p1.life -= 0.03;
                    if (p1.life <= 0) continue;

                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = this.mode === 'ink' 
                        ? `rgba(255, 255, 255, ${p1.life * 0.3})`
                        : `rgba(0, 184, 148, ${p1.life * 0.35})`;
                    this.ctx.lineWidth = p1.radius * p1.life;
                    this.ctx.lineCap = 'round';
                    this.ctx.stroke();
                }
                this.trail = this.trail.filter(p => p.life > 0);
                this.ctx.restore();
            }

            // 3. Draw particles & constellation lines
            const pLen = this.particles.length;
            for (let i = 0; i < pLen; i++) {
                const p = this.particles[i];

                p.x += p.vx;
                p.y += p.vy;
                p.angle += p.spin;

                // Screen bounce
                if (p.x < 0 || p.x > this.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.height) p.vy *= -1;

                // Pointer magnetic interaction
                if (this.pointer.active) {
                    const dx = this.pointer.x - p.x;
                    const dy = this.pointer.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 180;

                    if (dist < maxDist) {
                        const force = (maxDist - dist) / maxDist;
                        const angle = Math.atan2(dy, dx);
                        p.x -= Math.cos(angle) * force * 3;
                        p.y -= Math.sin(angle) * force * 3;
                        p.alpha = Math.min(p.baseAlpha + force * 0.4, 0.9);
                    } else {
                        p.alpha += (p.baseAlpha - p.alpha) * 0.05;
                    }
                }

                // Render particle character
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.angle * 0.2);
                this.ctx.font = `${Math.round(p.size)}px 'Noto Sans SC', sans-serif`;
                this.ctx.fillStyle = p.color;
                this.ctx.globalAlpha = p.alpha;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(p.char, 0, 0);
                this.ctx.restore();

                // Draw connections
                for (let j = i + 1; j < pLen; j++) {
                    const p2 = this.particles[j];
                    const dx = p2.x - p.x;
                    const dy = p2.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * 0.15;
                        this.ctx.beginPath();
                        this.ctx.moveTo(p.x, p.y);
                        this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.stroke();
                    }
                }
            }

            this.animId = requestAnimationFrame(() => this.animate());
        }
    }

    // Export CanvasUI global
    global.CanvasUI = {
        engine: new CanvasEngine(),
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.engine.init());
            } else {
                this.engine.init();
            }
        }
    };

    global.CanvasUI.init();
})(window);
