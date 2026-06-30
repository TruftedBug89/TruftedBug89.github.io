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

    function init() {
        if (!gsap || !ScrollTrigger) {
            console.warn('GSAP not loaded — animations disabled');
            return;
        }
        gsap.registerPlugin(ScrollTrigger);
        isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        initScrollReveals();
        initPageTransitions();
        initParticles();
        initLoadingAnimation();
        initMicroInteractions();
        initNavAnimations();
        initCardTilt();
        initMagneticButtons();
        initParallaxOrbs();
        initScrollProgressBar();
        initSVGBrushStrokes();
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
            /* Refresh scroll triggers after transition */
            gsap.delayedCall(0.6, function() { ScrollTrigger.refresh(); });
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
        var colors = ['#c42020', '#c9a84c', '#4a9680', '#e8e0d5'];
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
            var fill = document.getElementById('ink-loading-fill');
            if (fill && gsap) { gsap.to(fill, { width: '100%', duration: 0.35, ease: 'power2.in' }); }
            if (gsap) {
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
        if (!gsap) return;
        var links = document.querySelectorAll('.main-nav:not(.hidden) .nav-link, .main-nav:not(.hidden) .nav-section-label');
        if (!links.length) return;
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
            new MutationObserver(function(ms) {
                ms.forEach(function(m) {
                    m.addedNodes.forEach(function(n) {
                        if (n.classList && n.classList.contains('toast')) {
                            gsap.fromTo(n, { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.3)' });
                        }
                    });
                });
            }).observe(tc, { childList: true });
        }
        /* Modal entrance */
        var modal = document.getElementById('modal');
        if (modal) {
            new MutationObserver(function(ms) {
                ms.forEach(function(m) {
                    if (!modal.classList.contains('hidden')) {
                        var content = modal.querySelector('.modal-content');
                        if (content) { gsap.fromTo(content, { scale: 0.9, y: 30, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.5)' }); }
                    }
                });
            }).observe(modal, { attributes: true, attributeFilter: ['class'] });
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
                if (ico) { gsap.fromTo(ico, { rotation: 0, scale: 1 }, { rotation: 180, scale: 1.25, duration: 0.5, ease: 'back.out(1.7)' }); }
            });
        }
    }

    /* === 3D CARD TILT === */
    function initCardTilt() {
        if (!gsap || isTouch) return;
        var cards = document.querySelectorAll('.stats-card, .action-card, .exercise-type-card');
        cards.forEach(function(card) {
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
        document.querySelectorAll('.btn').forEach(function(btn) {
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

    /* === PARALLAX ORBS (mouse + scroll) === */
    function initParallaxOrbs() {
        if (!gsap) return;
        var orbs = document.querySelectorAll('.ambient-orb');
        if (!orbs.length) return;
        var qOrbs = [];
        orbs.forEach(function(orb, i) {
            qOrbs.push({
                x: gsap.quickTo(orb, 'x', { duration: 1.2, ease: 'power2.out' }),
                y: gsap.quickTo(orb, 'y', { duration: 1.2, ease: 'power2.out' })
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
        /* Scroll-driven depth */
        if (ScrollTrigger) {
            ScrollTrigger.create({
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: function(self) {
                    var p = self.progress;
                    orbs.forEach(function(orb, i) {
                        orb.style.transform = orb.style.transform.replace(/translateY\([^)]*\)/, '') + ' translateY(' + (p * 40 * (i + 1)) + 'px)';
                    });
                }
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
            var len = path.getTotalLength();
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
        gsap.fromTo(fill, { width: fromPct + '%' }, { width: toPct + '%', duration: 1.2, ease: 'power3.inOut' });
    };

    /* === NUMBER COUNTER === */
    window.InkAnimations.countUp = function(element, target, duration) {
        if (!gsap || !element) return;
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

    /* === FEEDBACK PULSE (correct/incorrect) === */
    window.InkAnimations.feedbackPulse = function(element, type) {
        if (!gsap || !element) return;
        var color = type === 'correct' ? '#4a9680' : type === 'close' ? '#d4a84b' : '#c42020';
        gsap.fromTo(element, {
            borderColor: 'transparent',
            boxShadow: '0 0 0 0 ' + color
        }, {
            borderColor: color,
            boxShadow: '0 0 0 8px rgba(' + (type === 'correct' ? '74,150,128' : type === 'close' ? '212,168,75' : '196,32,32') + ',0)',
            duration: 0.6,
            ease: 'power2.out'
        });
    };

    /* === SHAKE ELEMENT (for incorrect answers) === */
    window.InkAnimations.shakeElement = function(element) {
        if (!gsap || !element) return;
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
        gsap.fromTo(element, {
            backgroundColor: 'rgba(74,150,128,0.25)'
        }, {
            backgroundColor: 'rgba(74,150,128,0)',
            duration: 1.2,
            ease: 'power2.out'
        });
    };

    /* === PROGRESS BAR FILL === */
    window.InkAnimations.progressBarFill = function(element, fromPct, toPct) {
        if (!gsap || !element) return;
        gsap.fromTo(element, { width: fromPct + '%' }, {
            width: toPct + '%',
            duration: 0.8,
            ease: 'power3.inOut'
        });
    };

    /* === DOT INDICATOR PULSE === */
    window.InkAnimations.dotPulse = function(element) {
        if (!gsap || !element) return;
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

    /* === ACHIEVEMENT UNLOCK === */
    window.InkAnimations.achievementUnlock = function(card) {
        if (!gsap || !card) return;
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
        /* Golden glow pulse */
        gsap.fromTo(card, { boxShadow: '0 0 0 0 rgba(201,168,76,0)' }, {
            boxShadow: '0 0 30px 8px rgba(201,168,76,0.4)',
            duration: 0.8,
            delay: 0.8,
            ease: 'power2.out'
        });
    };

    /* === FLASHCARD 3D FLIP (GSAP-powered) === */
    window.InkAnimations.flashcardFlip = function(card, toFront) {
        if (!gsap || !card) return;
        if (toFront) {
            gsap.to(card, { rotationY: 0, duration: 0.7, ease: 'power3.inOut' });
        } else {
            gsap.to(card, { rotationY: 180, duration: 0.7, ease: 'power3.inOut' });
        }
    };

    /* Initialize */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    return window.InkAnimations;
})();
