/**
 * 中文大师 — Ink Wash Animation Engine v2
 * GSAP-powered: 3D tilt, magnetic buttons, parallax orbs, 
 * brush-stroke reveals, text splits, scroll progress, 
 * goal ring, page transitions, particles, micro-interactions
 */
var InkAnimations = (function() {
    'use strict';

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    var isTouch = false;
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var _toastObserver = null;
    var _modalObserver = null;
    var _storedDelayedCalls = [];
    var _trackedTweens = [];
    var _trackedScrollTriggers = [];

    function _trackTween(t) { if (t) { _trackedTweens.push(t); } return t; }

    function init() {
        if (!gsap || !ScrollTrigger) {
            console.warn('GSAP not loaded — animations disabled');
            revealAllWithoutGSAP();
            return;
        }
        gsap.registerPlugin(ScrollTrigger);
        isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            revealAllWithoutGSAP();
            initPageTransitions();   /* defines pageTransition (instant-set under reduced motion) */
            initLoadingAnimation();  /* defines hideLoader (GSAP fade, short) */
            return;
        }
        initScrollReveals();
        initPageTransitions();
        if (!prefersReducedMotion) initParticles();
        initLoadingAnimation();
        initMicroInteractions();
        initNavAnimations();
        if (!isTouch && !prefersReducedMotion) initCardTilt();
        if (!isTouch && !prefersReducedMotion) initMagneticButtons();
        if (!prefersReducedMotion) initParallaxOrbs();
        initScrollProgressBar();
        initSVGBrushStrokes();
    }

    /* === NO-GSAP / REDUCED-MOTION FALLBACK: reveal everything === */
    function revealAllWithoutGSAP() {
        document.querySelectorAll(
            '.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-scale, .gsap-reveal-fade'
        ).forEach(function(el) { el.classList.add('gsap-reveal-visible'); });
        document.querySelectorAll('.stagger-children > *, .ink-stagger > *').forEach(function(el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'none';
        });
        var bar = document.getElementById('scroll-progress-fill');
        if (bar) bar.style.transform = 'scaleX(1)';
    }

    /* === SCROLL-TRIGGERED REVEALS === */
    function initScrollReveals() {
        var reveals = document.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-scale, .gsap-reveal-fade');
        reveals.forEach(function(el) {
            var direction = 'up';
            if (el.classList.contains('gsap-reveal-left')) direction = 'left';
            else if (el.classList.contains('gsap-reveal-right')) direction = 'right';
            else if (el.classList.contains('gsap-reveal-scale')) direction = 'scale';
            else if (el.classList.contains('gsap-reveal-fade')) direction = 'fade';
            var fromVars = { opacity: 0 };
            switch (direction) {
                case 'left': fromVars.x = -60; break;
                case 'right': fromVars.x = 60; break;
                case 'up': fromVars.y = 48; break;
                case 'scale': fromVars.scale = 0.85; break;
            }
            gsap.fromTo(el, fromVars, {
                opacity: 1, x: 0, y: 0, scale: 1,
                duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', once: true }
            });
        });
        /* Stagger children */
        document.querySelectorAll('.stagger-children, .ink-stagger').forEach(function(group) {
            var kids = group.children;
            if (!kids.length) return;
            gsap.fromTo(kids, { opacity: 0, y: 24, filter: 'blur(3px)' }, {
                opacity: 1, y: 0, filter: 'blur(0px)',
                duration: 0.65, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none', once: true }
            });
        });
    }

    /* === PAGE TRANSITIONS === */
    function initPageTransitions() {
        window.InkAnimations = window.InkAnimations || {};
        window.InkAnimations.pageTransition = function(oldModule, newModule) {
            if (!gsap) return;
            if (!newModule) return;
            if (prefersReducedMotion) {
                if (oldModule && oldModule !== newModule) gsap.set(oldModule, { opacity: 0, y: 0 });
                gsap.set(newModule, { opacity: 1, y: 0 });
                var ch = newModule.querySelectorAll(':scope > *');
                if (ch.length) gsap.set(ch, { opacity: 1, y: 0 });
                gsap.delayedCall(0.1, function() { ScrollTrigger.refresh(); });
                return;
            }
            var tl = gsap.timeline();
            if (oldModule && oldModule !== newModule) {
                tl.to(oldModule, { opacity: 0, y: -12, duration: 0.2, ease: 'power2.in' });
            }
            tl.fromTo(newModule, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, oldModule && oldModule !== newModule ? '>' : 0);
            var directChildren = newModule.querySelectorAll(':scope > *');
            if (directChildren.length) {
                tl.fromTo(directChildren, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out' }, '-=0.25');
            }
            /* Auto text-split h1 in new module */
            var h1 = newModule.querySelector('h1');
            if (h1 && !h1.dataset.splitDone) {
                var splitFn = window.InkAnimations.textSplitReveal;
                if (splitFn) tl.add(function() { splitFn(h1); }, '-=0.1');
            }
            // Kill any pending refresh delayed call from a previous transition
            if (window.InkAnimations._pageTransitionDelayedCall) {
                window.InkAnimations._pageTransitionDelayedCall.kill();
            }
            /* Refresh scroll triggers after transition */
            window.InkAnimations._pageTransitionDelayedCall = gsap.delayedCall(0.6, function() { ScrollTrigger.refresh(); });
        };
    }

    /* === FLOATING INK PARTICLES === */
    function initParticles() {
        var container = document.querySelector('.particles-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'particles-container';
            container.setAttribute('aria-hidden', 'true');
            document.body.appendChild(container);
        }
        var colors = ['#d4432d', '#c9a65b', '#5aab8a', '#e6ddd2'];
        for (var i = 0; i < 30; i++) {
            var p = document.createElement('div');
            p.className = 'ink-particle';
            var s = Math.random() * 4 + 1.5;
            p.style.cssText =
                'width:' + s + 'px;height:' + s + 'px;' +
                'left:' + (Math.random() * 100) + '%;' +
                'background:' + colors[Math.floor(Math.random() * 4)] + ';' +
                'animation-duration:' + (Math.random() * 22 + 14) + 's;' +
                'animation-delay:' + (Math.random() * 22) + 's;' +
                'border-radius:' + (Math.random() > 0.5 ? '50%' : '1px') + ';' +
                'opacity:' + (Math.random() * 0.15 + 0.02) + ';';
            container.appendChild(p);
        }
    }

    /* === LOADING SCREEN === */
    function initLoadingAnimation() {
        window.InkAnimations = window.InkAnimations || {};
        window.InkAnimations.hideLoader = function(callback) {
            var loader = document.getElementById('loading-screen');
            if (!loader) { if (callback) callback(); return; }
            // Fill-bar width is owned by load-progress.js (app-ready → 100%). Don't tween it here.
            if (gsap && !prefersReducedMotion) {
                gsap.killTweensOf(loader);
                gsap.to(loader, { opacity: 0, duration: 0.55, ease: 'power3.inOut', delay: 0.15, onComplete: function() {
                    loader.classList.add('fade-out');
                    initNavEntrance();
                    if (callback) callback();
                }});
            } else {
                loader.classList.add('fade-out');
                setTimeout(function() { initNavEntrance(); if (callback) callback(); }, 600);
            }
        };
    }

    /* === NAV-LINK STAGGER ENTRANCE (after loader) === */
    function initNavEntrance() {
        if (!gsap || prefersReducedMotion) return;
        var links = document.querySelectorAll('.main-nav:not(.hidden) .nav-link, .main-nav:not(.hidden) .nav-section-label');
        if (!links.length) return;
        // Kill existing tweens on nav elements before re-animating
        gsap.killTweensOf(links);
        gsap.fromTo(links, { opacity: 0, x: -20 }, {
            opacity: 1, x: 0,
            duration: 0.4, stagger: 0.04, ease: 'power2.out'
        });
        var footer = document.querySelector('.main-nav:not(.hidden) .nav-footer');
        if (footer) {
            gsap.fromTo(footer, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.3 });
        }
    }

    /* === MICRO INTERACTIONS === */
    function initMicroInteractions() {
        if (!gsap) return;
        document.querySelectorAll('.btn-press').forEach(function(btn) {
            btn.addEventListener('mousedown', function() { gsap.to(btn, { scale: 0.95, duration: 0.08, ease: 'power2.in' }); });
            btn.addEventListener('mouseup', function() { gsap.to(btn, { scale: 1, duration: 0.25, ease: 'elastic.out(1, 0.3)' }); });
            btn.addEventListener('mouseleave', function() { gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' }); });
        });
        /* Toast entrance */
        var tc = document.getElementById('toast-container');
        if (tc) {
            _toastObserver = new MutationObserver(function(ms) {
                ms.forEach(function(m) {
                    m.addedNodes.forEach(function(n) {
                        if (n.classList && n.classList.contains('toast')) {
                            gsap.fromTo(n, { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.3)' });
                        }
                    });
                });
            });
            _toastObserver.observe(tc, { childList: true });
        }
        /* Modal entrance */
        var modal = document.getElementById('modal');
        if (modal) {
            _modalObserver = new MutationObserver(function(ms) {
                ms.forEach(function(m) {
                    if (!modal.classList.contains('hidden')) {
                        var content = modal.querySelector('.modal-content');
                        if (content) { gsap.fromTo(content, { scale: 0.9, y: 30, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.5)' }); }
                    }
                });
            });
            _modalObserver.observe(modal, { attributes: true, attributeFilter: ['class'] });
        }
    }

    /* === NAV LINK HOVER === */
    function initNavAnimations() {
        if (!gsap) return;
        document.querySelectorAll('.nav-link').forEach(function(link) {
            var icon = link.querySelector('.nav-icon');
            if (!icon) return;
            link.addEventListener('mouseenter', function() {
                if (link.classList.contains('active')) return;
                gsap.to(icon, { x: 4, duration: 0.25, ease: 'power2.out' });
            });
            link.addEventListener('mouseleave', function() {
                gsap.to(icon, { x: 0, duration: 0.3, ease: 'power2.out' });
            });
        });
        var themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                var ico = themeToggle.querySelector('.toggle-icon');
                if (!ico) return;
                // Read current theme state to decide target rotation (0 = dark, 180 = light)
                var isLight = document.body.classList.contains('theme-light');
                var targetRot = isLight ? 180 : 0;
                gsap.fromTo(ico, { scale: 1 }, {
                    rotation: targetRot,
                    scale: 1.25,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    onComplete: function() { gsap.to(ico, { scale: 1, duration: 0.2, ease: 'power2.out' }); }
                });
            });
        }
    }

    /* === 3D CARD TILT === */
    function initCardTilt() {
        if (!gsap || isTouch) return;
        var cards = document.querySelectorAll('.stats-card, .action-card, .exercise-type-card');
        cards.forEach(function(card) {
            card.classList.add('tilt-active');
            gsap.set(card, { rotateX: 0, rotateY: 0, z: 0 });
            var qX = gsap.quickTo(card, 'rotateX', { duration: 0.4, ease: 'power2.out' });
            var qY = gsap.quickTo(card, 'rotateY', { duration: 0.4, ease: 'power2.out' });
            var qZ = gsap.quickTo(card, 'z', { duration: 0.3, ease: 'power2.out' });
            var parent = card.parentElement;
            if (parent && !parent.style.perspective) { parent.style.perspective = '800px'; }
            card.style.transformStyle = 'preserve-3d';
            card.addEventListener('mouseenter', function() {
                gsap.to(card, { boxShadow: '0 20px 50px rgba(0,0,0,0.4)', duration: 0.3 });
            });
            card.addEventListener('mousemove', function(e) {
                var rect = card.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                qY(x * 8);
                qX(-y * 8);
                qZ(12);
            });
            card.addEventListener('mouseleave', function() {
                qY(0); qX(0); qZ(0);
                gsap.to(card, { boxShadow: 'none', duration: 0.5 });
            });
        });
    }

    /* === MAGNETIC BUTTONS === */
    function initMagneticButtons() {
        if (!gsap || isTouch) return;
        document.querySelectorAll('.btn:not(.nav-link):not(.modal-close):not([data-no-magnetic])').forEach(function(btn) {
            var qX = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' });
            var qY = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' });
            btn.addEventListener('mousemove', function(e) {
                var rect = btn.getBoundingClientRect();
                var dx = e.clientX - (rect.left + rect.width / 2);
                var dy = e.clientY - (rect.top + rect.height / 2);
                qX(dx * 0.25);
                qY(dy * 0.25);
            });
            btn.addEventListener('mouseleave', function() {
                qX(0); qY(0);
            });
        });
    }

    /* === PARALLAX ORBS (GSAP drift + mouse + scroll, single owner) === */
    function initParallaxOrbs() {
        if (!gsap) return;
        var orbs = document.querySelectorAll('.ambient-orb');
        if (!orbs.length) return;
        /* Organic drift on x/y (px) — re-rolled each cycle so it never repeats */
        orbs.forEach(function(orb, i) {
            gsap.to(orb, {
                x: 'random(-45,45)',
                y: 'random(-35,35)',
                duration: 14 + i * 4,
                ease: 'sine.inOut',
                repeat: -1,
                repeatRefresh: true,
                yoyo: true
            });
        });
        /* Mouse parallax on xPercent/yPercent — composes with drift (different sub-properties) */
        var qOrbs = [];
        orbs.forEach(function(orb, i) {
            qOrbs.push({
                x: gsap.quickTo(orb, 'xPercent', { duration: 1.2, ease: 'power2.out' }),
                y: gsap.quickTo(orb, 'yPercent', { duration: 1.2, ease: 'power2.out' })
            });
        });
        document.addEventListener('mousemove', function(e) {
            var mx = (e.clientX / window.innerWidth - 0.5) * 30;
            var my = (e.clientY / window.innerHeight - 0.5) * 30;
            qOrbs.forEach(function(q, i) {
                q.x(mx * (i + 1) * 0.5);
                q.y(my * (i + 1) * 0.5);
            });
        });
        /* Scroll depth via scale (no conflict with x/y/xPercent/yPercent) */
        if (ScrollTrigger) {
            orbs.forEach(function(orb, i) {
                gsap.to(orb, {
                    scale: 1 + 0.12 * (i + 1),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.5
                    }
                });
            });
        }
    }

    /* === SCROLL PROGRESS BAR === */
    function initScrollProgressBar() {
        if (!gsap || !ScrollTrigger) return;
        var bar = document.getElementById('scroll-progress-fill');
        if (!bar) return;
        gsap.to(bar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3
            }
        });
    }

    /* === SVG BRUSH-STROKE DRAWING === */
    function initSVGBrushStrokes() {
        if (!gsap || !ScrollTrigger) return;
        document.querySelectorAll('.brush-stroke-path').forEach(function(path) {
            var len;
            try { len = path.getTotalLength(); } catch(e) { return; }
            if (!len) return;
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: path,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        });
    }

    /* === GOAL RING GSAP FILL === */
    window.InkAnimations = window.InkAnimations || {};
    window.InkAnimations.animateGoalRing = function(targetPercent) {
        if (!gsap) return;
        var goalFill = document.getElementById('goal-fill');
        var goalPercent = document.getElementById('goal-percent');
        if (!goalFill) return;
        var circumference = 2 * Math.PI * 40;
        goalFill.style.strokeDasharray = circumference;
        if (prefersReducedMotion) {
            goalFill.style.strokeDashoffset = circumference - (targetPercent / 100) * circumference;
            if (goalPercent) goalPercent.textContent = targetPercent;
            return;
        }
        goalFill.style.strokeDashoffset = circumference;
        gsap.to(goalFill, {
            strokeDashoffset: circumference - (targetPercent / 100) * circumference,
            duration: 1.2,
            ease: 'power3.out'
        });
        if (goalPercent) {
            gsap.fromTo(goalPercent, { textContent: 0 }, {
                textContent: targetPercent,
                duration: 1.2,
                ease: 'power3.out',
                snap: { textContent: 1 }
            });
        }
    };

    /* === TEXT-SPLIT REVEAL === */
    window.InkAnimations.textSplitReveal = function(selector) {
        if (!gsap) return;
        var el = typeof selector === 'string' ? document.querySelector(selector) : selector;
        if (!el || el.dataset.splitDone) return;
        el.dataset.splitDone = '1';
        if (prefersReducedMotion) { return; } /* leave text intact, no char animation */
        var text = el.textContent.trim();
        el.textContent = '';
        var chars = text.split('');
        chars.forEach(function(ch) {
            var span = document.createElement('span');
            span.textContent = ch === ' ' ? '\u00A0' : ch;
            span.style.display = 'inline-block';
            el.appendChild(span);
        });
        gsap.fromTo(el.children, { opacity: 0, y: 20, rotation: 1 }, {
            opacity: 1, y: 0, rotation: 0,
            duration: 0.5, stagger: 0.03, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none', once: true }
        });
    };

    /* === XP BAR ANIMATION === */
    window.InkAnimations.animateXP = function(fromPct, toPct) {
        if (!gsap) return;
        var fill = document.getElementById('xp-progress');
        if (!fill) return;
        if (prefersReducedMotion) { fill.style.width = toPct + '%'; return; }
        gsap.fromTo(fill, { width: fromPct + '%' }, { width: toPct + '%', duration: 1.2, ease: 'power3.inOut' });
    };

    /* === NUMBER COUNTER === */
    window.InkAnimations.countUp = function(element, target, duration) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) { element.textContent = target; return; }
        duration = duration || 1.4;
        var start = parseInt(element.textContent) || 0;
        gsap.fromTo(element, { textContent: start }, {
            textContent: target,
            duration: duration,
            ease: 'power3.out',
            snap: { textContent: 1 },
            onUpdate: function() { element.textContent = Math.round(element.textContent); }
        });
    };

    /* === ENTRANCE STAGGER (for any container) === */
    window.InkAnimations.entranceStagger = function(container, opts) {
        if (!gsap || !container) return;
        opts = opts || {};
        var children = container.children;
        if (!children.length) return;
        if (prefersReducedMotion) { gsap.set(children, { opacity: 1, y: 0, scale: 1 }); return; }
        gsap.fromTo(children, {
            opacity: 0,
            y: opts.y || 30,
            scale: opts.scale || 1
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: opts.duration || 0.5,
            stagger: opts.stagger || 0.06,
            ease: opts.ease || 'power3.out',
            delay: opts.delay || 0
        });
    };

    /* === EXERCISE CARD REVEAL === */
    window.InkAnimations.exerciseCardReveal = function(container) {
        if (!gsap || !container) return;
        var cards = container.querySelectorAll('.exercise-type-card, .vocab-mode-card, .game-card');
        if (!cards.length) return;
        if (prefersReducedMotion) { gsap.set(cards, { opacity: 1, y: 0, scale: 1, rotateX: 0 }); return; }
        gsap.fromTo(cards, {
            opacity: 0,
            y: 40,
            scale: 0.92,
            rotateX: 4
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(1.4)'
        });
    };

    /* === SCORE POP-UP === */
    window.InkAnimations.scorePopup = function(element, score) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) { gsap.set(element, { scale: 1, opacity: 1 }); return; }
        gsap.fromTo(element, {
            scale: 0.3,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)'
        });
    };

    /* === FEEDBACK PULSE (correct/incorrect) + particle burst === */
    window.InkAnimations.feedbackPulse = function(element, type) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        var color = type === 'correct' ? '#5aab8a' : type === 'close' ? '#d4952b' : '#d4432d';
        gsap.fromTo(element, {
            borderColor: 'transparent',
            boxShadow: '0 0 0 0 ' + color
        }, {
            borderColor: color,
            boxShadow: '0 0 0 8px rgba(' + (type === 'correct' ? '74,150,128' : type === 'close' ? '212,168,75' : '196,32,32') + ',0)',
            duration: 0.6,
            ease: 'power2.out'
        });
        /* Particle burst on correct */
        if (type === 'correct') {
            burstParticles(element, 10, ['#5aab8a','#a0e0c0','#fff','#58d68d']);
        }
    };

    /* === SHAKE ELEMENT (for incorrect answers) === */
    window.InkAnimations.shakeElement = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        gsap.fromTo(element, { x: 0 }, {
            x: 8,
            duration: 0.07,
            repeat: 4,
            yoyo: true,
            ease: 'power2.inOut',
            onComplete: function() { gsap.set(element, { x: 0 }); }
        });
    };

    /* === SLIDE IN PANEL === */
    window.InkAnimations.slideInPanel = function(element, direction) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) { gsap.set(element, { opacity: 1, x: 0, y: 0 }); return; }
        var x = direction === 'left' ? -60 : direction === 'right' ? 60 : 0;
        var y = direction === 'up' ? -40 : direction === 'down' ? 40 : 0;
        gsap.fromTo(element, {
            opacity: 0,
            x: x,
            y: y
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: 'power3.out'
        });
    };

    /* === COUNTER BOUNCE === */
    window.InkAnimations.counterBounce = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) { gsap.set(element, { scale: 1, opacity: 1 }); return; }
        gsap.fromTo(element, { scale: 0.5, opacity: 0 }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)'
        });
    };

    /* === ATTENTION PULSE === */
    window.InkAnimations.attentionPulse = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            repeat: 1,
            yoyo: true,
            ease: 'power2.inOut'
        });
    };

    /* === HIGHLIGHT FLASH === */
    window.InkAnimations.highlightFlash = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        gsap.fromTo(element, {
            backgroundColor: 'rgba(90, 171, 138,0.25)'
        }, {
            backgroundColor: 'rgba(90, 171, 138,0)',
            duration: 1.2,
            ease: 'power2.out'
        });
    };

    /* === PROGRESS BAR FILL === */
    window.InkAnimations.progressBarFill = function(element, fromPct, toPct) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) { element.style.width = toPct + '%'; return; }
        gsap.fromTo(element, { width: fromPct + '%' }, {
            width: toPct + '%',
            duration: 0.8,
            ease: 'power3.inOut'
        });
    };

    /* === DOT INDICATOR PULSE === */
    window.InkAnimations.dotPulse = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        gsap.fromTo(element, { scale: 0.8 }, {
            scale: 1.4,
            duration: 0.35,
            ease: 'back.out(2)'
        });
    };

    /* === MODULE HERO REVEAL === */
    window.InkAnimations.moduleHeroReveal = function(moduleEl) {
        if (!gsap || !moduleEl) return;
        var h1 = moduleEl.querySelector('h1');
        var subtitle = moduleEl.querySelector('.module-subtitle');
        if (prefersReducedMotion) {
            if (h1) gsap.set(h1, { opacity: 1, y: 0, filter: 'blur(0px)' });
            if (subtitle) gsap.set(subtitle, { opacity: 1, y: 0 });
            return;
        }
        var tl = gsap.timeline();
        if (h1) {
            tl.fromTo(h1, { opacity: 0, y: -20, filter: 'blur(4px)' }, {
                opacity: 1, y: 0, filter: 'blur(0px)',
                duration: 0.6, ease: 'power3.out'
            });
        }
        if (subtitle) {
            tl.fromTo(subtitle, { opacity: 0, y: 10 }, {
                opacity: 1, y: 0,
                duration: 0.5, ease: 'power2.out'
            }, '-=0.3');
        }
    };

    /* === FLASHCARD 3D FLIP (GSAP-powered) === */
    window.InkAnimations.flashcardFlip = function(card, toFront) {
        if (!gsap || !card) return;
        gsap.set(card, { rotationY: toFront ? 0 : 180 });
        if (prefersReducedMotion) return;
        gsap.to(card, { rotationY: toFront ? 0 : 180, duration: 0.7, ease: 'power3.inOut' });
    };

    /* === CORRECT ANSWER CELEBRATE (pop + glow + sparkle) === */
    window.InkAnimations.celebrateCorrect = function(element) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        var tl = gsap.timeline();
        tl.to(element, { scale: 1.06, duration: 0.12, ease: 'power2.out' });
        tl.to(element, { scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.3)' });
        gsap.to(element, {
            boxShadow: '0 0 0 0 rgba(90, 171, 138,0.6)',
            duration: 0.01
        });
        gsap.to(element, {
            boxShadow: '0 0 0 16px rgba(90, 171, 138,0)',
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.05
        });
        /* mini particles */
        burstParticles(element, 12, ['#5aab8a','#a0e0c0','#fff']);
    };

    /* === PARTICLE BURST from element === */
    function burstParticles(element, count, colors) {
        if (!gsap || !element) return;
        var rect = element.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        colors = colors || ['#d4432d','#c9a65b','#5aab8a','#e6ddd2','#fff'];
        for (var i = 0; i < (count || 16); i++) {
            var p = document.createElement('div');
            p.style.cssText = 'position:fixed;z-index:99998;pointer-events:none;' +
                'width:' + (3 + Math.random() * 5) + 'px;height:' + (3 + Math.random() * 5) + 'px;' +
                'border-radius:' + (Math.random() > 0.5 ? '50%' : '1px') + ';' +
                'background:' + colors[Math.floor(Math.random() * colors.length)] + ';';
            document.body.appendChild(p);
            var angle = Math.random() * Math.PI * 2;
            var dist = 30 + Math.random() * 80;
            gsap.fromTo(p, { x: cx, y: cy, opacity: 1, scale: 1 }, {
                x: cx + Math.cos(angle) * dist,
                y: cy + Math.sin(angle) * dist,
                opacity: 0,
                scale: 0,
                duration: 0.6 + Math.random() * 0.6,
                ease: 'power3.out',
                onComplete: function() { p.remove(); }
            });
        }
    }



    /* === COMPLETION RING GSAP FILL === */
    window.InkAnimations.animateCompletionRing = function(ringEl, pctNum, color) {
        if (!gsap || !ringEl) return;
        var pctEl = ringEl.querySelector('.completion-pct');
        var scoreEl = ringEl.querySelector('.completion-score');
        if (prefersReducedMotion) {
            ringEl.style.background = 'conic-gradient(' + color + ' ' + (pctNum * 3.6) + 'deg, rgba(255,255,255,0.08) ' + (pctNum * 3.6) + 'deg)';
            if (pctEl) pctEl.textContent = pctNum + '%';
            if (scoreEl) scoreEl.textContent = parseInt(scoreEl.dataset.score || 0);
            return;
        }
        gsap.fromTo(ringEl, { '--pct': 0 }, {
            '--pct': pctNum,
            duration: 1.5,
            ease: 'power3.out',
            onUpdate: function() {
                var v = Math.round(gsap.getProperty(ringEl, '--pct'));
                ringEl.style.background = 'conic-gradient(' + color + ' ' + (v * 3.6) + 'deg, rgba(255,255,255,0.08) ' + (v * 3.6) + 'deg)';
                if (pctEl) pctEl.textContent = v + '%';
            }
        });
        if (scoreEl && parseInt(scoreEl.textContent) === 0) {
            gsap.fromTo(scoreEl, { textContent: 0 }, {
                textContent: parseInt(scoreEl.dataset.score || 0),
                duration: 1.5,
                ease: 'power3.out',
                snap: { textContent: 1 },
                onUpdate: function() { scoreEl.textContent = Math.round(scoreEl.textContent); }
            });
        }
    };

    /* === MISSION COMPLETE CELEBRATION === */
    window.InkAnimations.celebrateMissionComplete = function(mission) {
        if (!gsap) return;
        if (prefersReducedMotion) {
            try { Utils.showToast((mission.icon || '🎯') + ' Mission Complete! +' + mission.reward + ' XP', 'success'); } catch (_) {}
            return;
        }
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99998;pointer-events:none;display:flex;align-items:center;justify-content:center;';
        overlay.innerHTML = '<div class="mission-celebrate" style="text-align:center;opacity:0;">' +
            '<div style="font-size:48px;margin-bottom:8px;">' + (mission.icon || '🎯') + '</div>' +
            '<div style="color:#ffd86b;font-size:20px;font-weight:700;">Mission Complete!</div>' +
            '<div style="color:#5aab8a;font-size:16px;margin-top:4px;">+' + mission.reward + ' XP</div>' +
            '</div>';
        document.body.appendChild(overlay);
        var card = overlay.querySelector('.mission-celebrate');
        var tl = gsap.timeline({ onComplete: function() {
            gsap.to(overlay, { opacity: 0, duration: 0.4, onComplete: function() { overlay.remove(); } });
        }});
        tl.fromTo(card, { scale: 0.5, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' });
        tl.to(card, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
        tl.to(card, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.4)' });
        burstParticles(overlay, 20, ['#ffd86b', '#5aab8a', '#f1c40f', '#fff']);
    };

    /* === STREAK MILESTONE CELEBRATION === */
    window.InkAnimations.celebrateStreakMilestone = function(days) {
        if (!gsap) return;
        if (prefersReducedMotion) {
            try { Utils.showToast('🔥 ' + days + ' Day Streak!', 'success'); } catch (_) {}
            return;
        }
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99998;pointer-events:none;display:flex;align-items:center;justify-content:center;';
        overlay.innerHTML = '<div class="streak-celebrate" style="text-align:center;opacity:0;">' +
            '<div style="font-size:64px;">🔥</div>' +
            '<div style="color:#ff6b6b;font-size:28px;font-weight:800;margin-top:8px;">' + days + ' Day Streak!</div>' +
            '<div style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:4px;">Keep the flame alive</div>' +
            '</div>';
        document.body.appendChild(overlay);
        var card = overlay.querySelector('.streak-celebrate');
        var tl = gsap.timeline({ onComplete: function() {
            gsap.to(overlay, { opacity: 0, duration: 0.5, delay: 0.5, onComplete: function() { overlay.remove(); } });
        }});
        tl.fromTo(card, { scale: 0.3, opacity: 0 }, { scale: 1.1, opacity: 1, duration: 0.6, ease: 'back.out(2)' });
        tl.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        /* Flame particles rising */
        for (var i = 0; i < 15; i++) {
            var fp = document.createElement('div');
            fp.style.cssText = 'position:fixed;z-index:99998;pointer-events:none;width:6px;height:6px;border-radius:50%;';
            fp.style.background = ['#ff6b6b', '#f1c40f', '#e67e22', '#ff9500'][Math.floor(Math.random() * 4)];
            overlay.appendChild(fp);
            var startX = window.innerWidth / 2 + (Math.random() - 0.5) * 100;
            var startY = window.innerHeight / 2 + 30;
            gsap.fromTo(fp, { x: startX, y: startY, opacity: 1, scale: 1 }, {
                y: startY - 80 - Math.random() * 120,
                x: startX + (Math.random() - 0.5) * 60,
                opacity: 0, scale: 0,
                duration: 1 + Math.random() * 1.5,
                ease: 'power2.out',
                delay: Math.random() * 0.5,
                onComplete: function() { fp.remove(); }
            });
        }
    };

    /* === LOGIN REWARD CELEBRATION === */
    window.InkAnimations.celebrateLoginReward = function(result) {
        if (!gsap) return;
        if (prefersReducedMotion) return;
        burstParticles(document.body, 25, ['#ffd86b', '#f1c40f', '#5aab8a', '#a78bfa', '#fff']);
    };

    /* === ENHANCED LEVEL UP (more particles, subtle glow) === */
    window.InkAnimations.showLevelUp = function(level, title, xp) {
        if (!gsap || prefersReducedMotion) {
            try { Utils.showToast('Level Up! ' + (typeof title === 'string' ? title : '') + ' (L' + level + ')', 'success'); } catch(_) {}
            return;
        }
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none;';
        overlay.innerHTML = '<div style="position:absolute;inset:0;background:radial-gradient(circle,rgba(201, 166, 91,0.2),rgba(0,0,0,0.85));"></div>' +
            '<div class="levelup-card" style="position:relative;text-align:center;z-index:1;">' +
                '<div class="levelup-badge" style="display:inline-flex;align-items:center;justify-content:center;width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#c9a65b,#f1c40f);box-shadow:0 0 80px rgba(241,196,15,0.7);font-size:48px;font-weight:900;color:#0a0a0a;">' + level + '</div>' +
                '<h2 style="color:#f1c40f;font-size:32px;margin:16px 0 8px;font-weight:800;">LEVEL UP!</h2>' +
                '<p style="color:#e6ddd2;font-size:18px;margin:0 0 8px;">' + (typeof Utils !== 'undefined' && Utils.escapeHtml ? Utils.escapeHtml(title || '') : (title || '')) + '</p>' +
                '<p style="color:#c9a65b;font-size:14px;">⭐ +' + (xp || 0) + ' XP total</p>' +
            '</div>';
        document.body.appendChild(overlay);

        var card = overlay.querySelector('.levelup-card');
        var badge = overlay.querySelector('.levelup-badge');
        var tl = gsap.timeline({ onComplete: function() {
            gsap.to(overlay, { opacity: 0, duration: 0.5, delay: 0.6, ease: 'power2.in', onComplete: function() { overlay.remove(); } });
        }});
        tl.fromTo(overlay.firstElementChild, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        tl.fromTo(badge, { scale: 0, rotation: -30 }, { scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(2)' }, '-=0.1');
        tl.fromTo(card.querySelectorAll('h2,p'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' });
        /* Subtle screen glow */
        gsap.fromTo(overlay.firstElementChild, { background: 'radial-gradient(circle,rgba(201,166,91,0.05),rgba(0,0,0,0.85))' }, {
            background: 'radial-gradient(circle,rgba(201,166,91,0.25),rgba(0,0,0,0.85))',
            duration: 0.8, ease: 'power2.out'
        });
        /* 50 golden particles */
        for (var i = 0; i < 50; i++) {
            var gp = document.createElement('div');
            gp.style.cssText = 'position:fixed;z-index:99998;pointer-events:none;width:4px;height:4px;border-radius:50%;background:#f1c40f;box-shadow:0 0 8px 2px rgba(241,196,15,0.8);';
            overlay.appendChild(gp);
            var a = Math.random() * Math.PI * 2;
            var d = 120 + Math.random() * 350;
            gsap.fromTo(gp, { x: window.innerWidth/2, y: window.innerHeight/2, scale: 1, opacity: 1 }, {
                x: window.innerWidth/2 + Math.cos(a) * d,
                y: window.innerHeight/2 + Math.sin(a) * d,
                scale: 0, opacity: 0,
                duration: 1.8 + Math.random() * 2,
                ease: 'power3.out',
                delay: 0.3 + Math.random() * 0.5,
                onComplete: function() { gp.remove(); }
            });
        }
        try { Utils.playSound('levelup'); } catch(_) {}
    };

    /* === ENHANCED ACHIEVEMENT UNLOCK (shimmer overlay) === */
    window.InkAnimations.achievementUnlock = function(card) {
        if (!gsap || !card) return;
        if (prefersReducedMotion) { gsap.set(card, { scale: 1, rotation: 0, opacity: 1 }); return; }
        var tl = gsap.timeline();
        tl.fromTo(card, { scale: 0, rotation: -15, opacity: 0 }, {
            scale: 1.1, rotation: 2, opacity: 1,
            duration: 0.5, ease: 'back.out(2)'
        });
        tl.to(card, {
            scale: 1, rotation: 0,
            duration: 0.3, ease: 'power2.out'
        });
        var icon = card.querySelector('.achievement-icon');
        if (icon) {
            tl.fromTo(icon, { scale: 0 }, {
                scale: 1.2,
                duration: 0.4, ease: 'back.out(2)'
            }, '-=0.2');
            tl.to(icon, { scale: 1, duration: 0.2, ease: 'power2.out' });
        }
        /* Golden glow + shimmer */
        gsap.fromTo(card, { boxShadow: '0 0 0 0 rgba(201, 166, 91,0)' }, {
            boxShadow: '0 0 30px 8px rgba(201, 166, 91,0.4)',
            duration: 0.8,
            delay: 0.8,
            ease: 'power2.out'
        });
        gsap.to(card, {
            boxShadow: '0 0 15px 4px rgba(201, 166, 91,0.2)',
            duration: 1.2,
            delay: 1.6,
            ease: 'power2.inOut'
        });
        burstParticles(card, 15, ['#c9a65b', '#f1c40f', '#ffd86b', '#fff']);
    };

    /* === ENHANCED FLOAT XP (scale bounce) === */
    window.InkAnimations.floatXP = function(element, xpAmount) {
        if (!gsap || !element) return;
        if (prefersReducedMotion) return;
        var float = document.createElement('div');
        float.className = 'xp-float';
        float.textContent = '+' + xpAmount + ' XP';
        float.style.cssText = 'position:fixed;z-index:99999;pointer-events:none;' +
            'font-weight:800;font-size:20px;' +
            'background:linear-gradient(135deg,#f1c40f,#e67e22);' +
            '-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;' +
            'text-shadow:0 0 12px rgba(241,196,15,0.6);';
        document.body.appendChild(float);
        var rect = element.getBoundingClientRect();
        gsap.set(float, {
            left: rect.left + rect.width / 2,
            top: rect.top,
            xPercent: -50,
            opacity: 1,
            scale: 0.5
        });
        gsap.to(float, {
            y: -80,
            scale: 1.2,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            onComplete: function() { float.remove(); }
        });
        /* Scale bounce on spawn */
        gsap.fromTo(float, { scale: 0.3 }, { scale: 1.3, duration: 0.2, ease: 'back.out(3)' });
        try { Utils.playSound('xp'); } catch(e) {}
    };

    /* === MODULE TRANSITION REGISTRY === */
    window.InkAnimations._moduleEnterHooks = {};
    window.InkAnimations.registerModuleEnter = function(name, fn) {
        window.InkAnimations._moduleEnterHooks[name] = fn;
    };
    window.InkAnimations.moduleEnter = function(targetEl, moduleName) {
        if (!gsap || !targetEl) return;
        var hook = window.InkAnimations._moduleEnterHooks[moduleName];
        if (hook && typeof hook === 'function') {
            hook(targetEl);
        }
    };
    window.InkAnimations.moduleExit = function(el, done) {
        if (!gsap || !el) { if (done) done(); return; }
        if (el._moduleExiting) { if (done) done(); return; }
        el._moduleExiting = true;

        // Kill ScrollTriggers whose trigger is inside the module OR is body (global)
        var st = ScrollTrigger.getAll();
        if (st && st.length) {
            st.forEach(function(t) {
                try {
                    var trigger = t.trigger;
                    if (!trigger) return;
                    // String triggers like 'body' — treat as global, keep alive
                    if (typeof trigger === 'string') return;
                    if (el.contains(trigger) || el === trigger) t.kill();
                } catch(_) {}
            });
        }

        // Kill tweens on the container AND all its descendants
        try {
            gsap.killTweensOf(el);
            var kids = el.querySelectorAll('*');
            for (var i = 0; i < kids.length; i++) {
                gsap.killTweensOf(kids[i]);
            }
        } catch(_) {}

        gsap.to(el, { opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: function() {
            el._moduleExiting = false;
            if (done) done();
        }});
    };

    /* Initialize */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    return window.InkAnimations;
})();
