/**
 * ==========================================
 * CANVAS RADIAL PROGRESS RINGS COMPONENT
 * ==========================================
 * Renders high-precision glowing radial progress rings on HTML5 canvas.
 */
(function (global) {
    'use strict';

    class CanvasRingsManager {
        renderRing(container, value = 0, color = '#6c5ce7', label = '') {
            if (!container) return;

            container.innerHTML = `
                <canvas></canvas>
                <div class="radial-canvas-content">
                    <div class="radial-canvas-value">${Math.round(value)}%</div>
                    ${label ? `<div class="radial-canvas-label">${label}</div>` : ''}
                </div>
            `;

            const canvas = container.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            const size = container.clientWidth || 120;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = size * dpr;
            canvas.height = size * dpr;
            ctx.scale(dpr, dpr);

            const center = size / 2;
            const radius = size / 2 - 8;
            const startAngle = -Math.PI / 2;
            let currentPct = 0;

            const animate = () => {
                currentPct += (value - currentPct) * 0.1;
                ctx.clearRect(0, 0, size, size);

                // Background track ring
                ctx.beginPath();
                ctx.arc(center, center, radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.lineWidth = 8;
                ctx.stroke();

                // Active progress arc
                const endAngle = startAngle + (Math.PI * 2 * (currentPct / 100));
                ctx.beginPath();
                ctx.arc(center, center, radius, startAngle, endAngle);
                ctx.strokeStyle = color;
                ctx.lineWidth = 8;
                ctx.lineCap = 'round';
                ctx.shadowColor = color;
                ctx.shadowBlur = 12;
                ctx.stroke();

                if (Math.abs(value - currentPct) > 0.5) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
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
