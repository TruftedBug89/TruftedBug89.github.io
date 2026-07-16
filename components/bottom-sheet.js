var BottomSheet = (function () {
    'use strict';

    var root = null;
    var backdrop = null;
    var panel = null;
    var onClose = null;
    var isOpen = false;
    var touchStartY = 0;
    var touchDeltaY = 0;
    var sheetHeight = 0;
    var previousFocus = null;

    function createDOM() {
        if (root) return;
        root = document.createElement('div');
        root.id = 'sheet-root';
        root.setAttribute('aria-hidden', 'true');

        backdrop = document.createElement('div');
        backdrop.className = 'sheet-backdrop';
        backdrop.addEventListener('click', close);

        panel = document.createElement('div');
        panel.className = 'sheet-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.setAttribute('aria-label', 'Menu');

        root.appendChild(backdrop);
        root.appendChild(panel);
        document.body.appendChild(root);

        panel.addEventListener('touchstart', onTouchStart, { passive: true });
        panel.addEventListener('touchmove', onTouchMove, { passive: false });
        panel.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    function onTouchStart(e) {
        if (!isOpen) return;
        var t = e.touches[0];
        touchStartY = t.clientY;
        touchDeltaY = 0;
        sheetHeight = panel.offsetHeight;
    }

    function onTouchMove(e) {
        if (!isOpen) return;
        var t = e.touches[0];
        touchDeltaY = t.clientY - touchStartY;
        if (touchDeltaY > 0 && panel.scrollTop <= 1) {
            e.preventDefault();
            var pct = Math.min(1, Math.max(0, touchDeltaY / sheetHeight));
            panel.style.transform = 'translateY(' + (touchDeltaY) + 'px)';
            backdrop.style.opacity = String(1 - pct);
            panel.style.transition = 'none';
            backdrop.style.transition = 'none';
        }
    }

    function onTouchEnd() {
        if (!isOpen) return;
        panel.style.transition = '';
        backdrop.style.transition = '';
        if (touchDeltaY > sheetHeight * 0.25) {
            close();
        } else {
            panel.style.transform = 'translateY(0)';
            backdrop.style.opacity = '1';
        }
    }

    function trapFocus() {
        var focusable = panel.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (panel._focusHandler) {
            panel.removeEventListener('keydown', panel._focusHandler);
        }

        panel._focusHandler = function(e) {
            if (e.key !== 'Tab') return;
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        panel.addEventListener('keydown', panel._focusHandler);
    }

    function close() {
        if (!isOpen) return;
        isOpen = false;
        root.setAttribute('aria-hidden', 'true');
        panel.style.transform = 'translateY(100%)';
        backdrop.style.opacity = '0';
        document.body.style.overflow = '';

        if (panel._focusHandler) {
            panel.removeEventListener('keydown', panel._focusHandler);
            panel._focusHandler = null;
        }

        if (previousFocus) {
            try { previousFocus.focus(); } catch (ignore) {}
            previousFocus = null;
        }

        if (typeof onClose === 'function') {
            var cb = onClose;
            onClose = null;
            setTimeout(cb, 340);
        }
    }

    function buildRows(rows) {
        var html = '';
        for (var i = 0; i < rows.length; i++) {
            var r = rows[i];
            if (r.type === 'divider') {
                html += '<div class="sheet-divider"></div>';
            } else if (r.type === 'section') {
                html += '<div class="sheet-section-label">' + r.label + '</div>';
            } else {
                var cls = r.danger ? ' sheet-row danger' : ' sheet-row';
                var arrow = r.arrow === false ? '' : '<span class="sheet-row-arrow" aria-hidden="true">›</span>';
                var iconHtml = '';
                if (r.icon) {
                    if (r.icon.indexOf('<svg') === 0) {
                        iconHtml = '<span class="sheet-row-icon">' + r.icon + '</span>';
                    } else {
                        iconHtml = '<span class="sheet-row-icon" aria-hidden="true">' + r.icon + '</span>';
                    }
                }
                html += '<button type="button" class="' + cls + '" data-sheet-action="' + (r.action || '') + '">' +
                    iconHtml +
                    '<span class="sheet-row-label">' + r.label + '</span>' +
                    arrow +
                    '</button>';
            }
        }
        return html;
    }

    // =============================================

    return {
        open: function (config) {
            if (!config) return;
            createDOM();

            previousFocus = document.activeElement;
            onClose = config.onClose || null;

            var title = config.title || '';
            var subtitle = config.subtitle || '';

            var headerHtml = '<div class="sheet-grabber"></div>';
            if (title) {
                headerHtml += '<div class="sheet-header"><h2>' + title + '</h2>' +
                    (subtitle ? '<p>' + subtitle + '</p>' : '') +
                    '</div>';
            } else {
                headerHtml += '<div class="sheet-grabber" style="padding-bottom:16px"></div>';
            }

            var bodyHtml = '';
            if (config.rows && Array.isArray(config.rows)) {
                bodyHtml = '<div class="sheet-body">' + buildRows(config.rows) + '</div>';
            } else if (config.html) {
                bodyHtml = '<div class="sheet-body">' + config.html + '</div>';
            }

            panel.innerHTML = headerHtml + bodyHtml;
            root.setAttribute('aria-hidden', 'false');
            panel.setAttribute('aria-label', title || 'Menu');
            panel.scrollTop = 0;
            panel.style.transform = '';
            backdrop.style.opacity = '1';
            document.body.style.overflow = 'hidden';
            isOpen = true;

            panel.querySelectorAll('[data-sheet-action]').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var action = btn.getAttribute('data-sheet-action');
                    if (config.onAction) {
                        config.onAction(action);
                    }
                    close();
                });
            });

            if (config.autoFocus !== false) {
                setTimeout(function () {
                    var first = panel.querySelector('button, [href], input, select, textarea');
                    if (first) first.focus();
                }, 400);
            }

            trapFocus();
        },

        close: close,

        isOpen: function () {
            return isOpen;
        },

        onKeydown: function (e) {
            if (e.key === 'Escape' && isOpen) {
                e.preventDefault();
                close();
            }
        }
    };
})();
