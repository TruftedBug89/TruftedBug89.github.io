/* ZHI Studio interface motion — progressive enhancement over the learning engine. */
(function () {
    'use strict';

    var prefersReducedMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasAnimatedIntro = false;

    function openQuickStart(target) {
        if (typeof App === 'undefined') return;
        if (typeof App.handleQuickAction === 'function') {
            App.handleQuickAction(target);
            return;
        }
        if (typeof App.navigateTo === 'function') {
            App.navigateTo(target === 'vocab-review' ? 'vocabulary' : 'placement');
        }
    }

    function wireQuickStarts() {
        document.querySelectorAll('[data-quick-start]').forEach(function (button) {
            if (button.dataset.futureBound) return;
            button.dataset.futureBound = 'true';
            button.addEventListener('click', function () {
                openQuickStart(button.dataset.quickStart);
            });
        });
    }

    function wireHeroDepth() {
        var hero = document.querySelector('.neo-hero');
        if (!hero || hero.dataset.depthBound || prefersReducedMotion) return;
        hero.dataset.depthBound = 'true';

        hero.addEventListener('pointermove', function (event) {
            if (event.pointerType === 'touch') return;
            var rect = hero.getBoundingClientRect();
            var x = (event.clientX - rect.left) / rect.width - 0.5;
            var y = (event.clientY - rect.top) / rect.height - 0.5;
            hero.style.setProperty('--zhi-pointer-x', (x * 8).toFixed(2) + 'px');
            hero.style.setProperty('--zhi-pointer-y', (y * 8).toFixed(2) + 'px');
        });

        hero.addEventListener('pointerleave', function () {
            hero.style.setProperty('--zhi-pointer-x', '0px');
            hero.style.setProperty('--zhi-pointer-y', '0px');
        });
    }

    function animateIntro() {
        if (hasAnimatedIntro || prefersReducedMotion || !window.gsap) return;
        hasAnimatedIntro = true;

        var heroCopy = document.querySelector('.neo-hero__copy');
        var radar = document.querySelector('.neo-radar');
        var metrics = document.querySelectorAll('.hero-metric');
        var statCards = document.querySelectorAll('.neo-stats .stats-card');
        var launchCards = document.querySelectorAll('.action-cards .action-card');

        var timeline = window.gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (heroCopy) {
            timeline.fromTo(heroCopy, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.62 });
        }
        if (radar) {
            timeline.fromTo(radar, { autoAlpha: 0, scale: 0.83, rotation: -12 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.78 }, '-=0.42');
        }
        if (metrics.length) {
            timeline.fromTo(metrics, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.08 }, '-=0.42');
        }
        if (statCards.length) {
            timeline.fromTo(statCards, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.07 }, '-=0.24');
        }
        if (launchCards.length) {
            timeline.fromTo(launchCards, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.05 }, '-=0.1');
        }
    }

    function init() {
        wireQuickStarts();
        wireHeroDepth();
    }

    document.addEventListener('DOMContentLoaded', init);
    window.addEventListener('app-ready', function () {
        init();
        window.setTimeout(animateIntro, 80);
    });
})();
