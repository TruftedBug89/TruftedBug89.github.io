/**
 * ==========================================
 * CANVAS RADIAL PROGRESS RINGS COMPONENT
 * ==========================================
 * Renders high-precision glowing radial progress rings on HTML5 canvas with
 * clean rAF lifecycle management, DPR scaling, and exact lerp convergence.
 */
(function (global) {
    'use strict';

    class CanvasRingsManager {
        renderRing(container, value = 0, color = '#6c5ce7', label = '') {
            if (!container) return;

            // Cancel any previous rAF loop on this container
            if (container._ringAnimId) {
                cancelAnimationFrame(container._ringAnimId);
                container._ringAnimId = null;
            }

            container.setAttribute('role', 'progressbar');
            container.setAttribute('aria-valuenow', Math.round(value));
            container.setAttribute('aria-valuemin', '0');
            container.setAttribute('aria-valuemax', '100');
            container.setAttribute('aria-label', (label || 'Progress') + ' ring');

            container.innerHTML = `
                <canvas role="img" aria-hidden="true"></canvas>
                <div class="radial-canvas-content">
                    <div class="radial-canvas-value">${Math.round(value)}%</div>
                    ${label ? `<div class="radial-canvas-label">${label}</div>` : ''}
                </div>
            `;

            const canvas = container.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const size = container.clientWidth || 120;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = size * dpr;
            canvas.height = size * dpr;
            canvas.style.width = size + 'px';
            canvas.style.height = size + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const center = size / 2;
            const radius = Math.max(size / 2 - 8, 4);
            const startAngle = -Math.PI / 2;
            let currentPct = 0;
            const targetVal = Math.max(0, Math.min(100, value));

            const drawFrame = (pct) => {
                ctx.clearRect(0, 0, size, size);

                // Background track ring
                ctx.beginPath();
                ctx.arc(center, center, radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.lineWidth = 8;
                ctx.stroke();

                // Active progress arc (only draw if > 0 to avoid WebKit round cap dot artifact)
                if (pct > 0) {
                    const endAngle = startAngle + (Math.PI * 2 * (pct / 100));
                    ctx.beginPath();
                    ctx.arc(center, center, radius, startAngle, endAngle);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 8;
                    ctx.lineCap = 'round';
                    ctx.stroke();
                }
            };

            const animate = () => {
                const diff = targetVal - currentPct;
                if (Math.abs(diff) < 0.1) {
                    currentPct = targetVal;
                    drawFrame(currentPct);
                    container._ringAnimId = null;
                    return;
                }

                currentPct += diff * 0.12;
                drawFrame(currentPct);
                container._ringAnimId = requestAnimationFrame(animate);
            };

            animate();
        }

        unmount(container) {
            if (!container) return;
            if (container._ringAnimId) {
                cancelAnimationFrame(container._ringAnimId);
                container._ringAnimId = null;
            }
            container.textContent = '';
        }

        renderAll() {
            const rings = document.querySelectorAll('.radial-canvas-ring');
            rings.forEach(el => {
                const val = parseFloat(el.dataset.value || 0);
                const color = el.dataset.color || '#6c5ce7';
                const label = el.dataset.label || '';
                this.renderRing(el, val, color, label);
            });
        }
    }

    global.CanvasRings = new CanvasRingsManager();
})(window);
