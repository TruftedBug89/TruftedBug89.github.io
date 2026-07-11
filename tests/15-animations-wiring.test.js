import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('15 — Animations Wiring', () => {
  let indexContent;
  let animContent;
  let appContent;

  it('index.html, animations.js, app.js are readable', () => {
    indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    animContent = fs.readFileSync(path.join(ROOT_DIR, 'js', 'animations.js'), 'utf8');
    appContent = fs.readFileSync(path.join(ROOT_DIR, 'js', 'app.js'), 'utf8');
    assert.ok(indexContent.length > 100);
    assert.ok(animContent.length > 100);
    assert.ok(appContent.length > 100);
  });

  it('index.html links css/loading.css (required for .fade-out loader fade)', () => {
    assert.ok(
      /href="css\/loading\.css"/.test(indexContent),
      'css/loading.css not linked in index.html — loader .fade-out path broken'
    );
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'css', 'loading.css')), 'css/loading.css missing on disk');
  });

  it('css/loading.css defines #loading-screen.fade-out rule', () => {
    const loadingCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'loading.css'), 'utf8');
    assert.ok(/#loading-screen\.fade-out/.test(loadingCss), '.fade-out rule missing in loading.css');
  });

  it('css/animations.css defines .gsap-reveal-visible visibility rule (no-GSAP fallback)', () => {
    const animCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'animations.css'), 'utf8');
    assert.ok(/\.gsap-reveal-visible/.test(animCss), '.gsap-reveal-visible rule missing — no-GSAP fallback leaves elements invisible');
  });

  it('animations.js exposes required InkAnimations API surface', () => {
    const required = [
      'pageTransition', 'moduleEnter', 'moduleExit', 'hideLoader',
      'revealModule', 'refreshInteractions',
      'moduleHeroReveal', 'animateXP', 'countUp', 'floatXP',
      'showLevelUp', 'achievementUnlock', 'celebrateCorrect',
      'celebrateMissionComplete', 'celebrateStreakMilestone', 'celebrateLoginReward',
      'registerModuleEnter'
    ];
    const missing = required.filter(fn => !new RegExp(`InkAnimations\\.${fn}\\b`).test(animContent));
    assert.deepEqual(missing, [], `missing InkAnimations methods:\n  ${missing.join('\n  ')}`);
  });

  it('animations.js defines internal revealAllWithoutGSAP fallback function', () => {
    assert.ok(/function\s+revealAllWithoutGSAP\s*\(/.test(animContent), 'revealAllWithoutGSAP function not defined');
  });

  it('animations.js gates heavy effects on isTouch + saveData (navigator.connection)', () => {
    assert.ok(/navigator\.connection/.test(animContent), 'no navigator.connection check — saveData gating missing');
    assert.ok(/isLowEnd/.test(animContent), 'isLowEnd flag not defined');
    assert.ok(/_heavyEffectsAllowed/.test(animContent), '_heavyEffectsAllowed helper missing');
    // Particles, parallax, tilt, magnetic must reference the heavy-effects gate
    assert.ok(/if\s*\(_heavyEffectsAllowed\(\)\)\s*initParticles/.test(animContent), 'particles not gated on heavyEffectsAllowed');
    assert.ok(/if\s*\(_heavyEffectsAllowed\(\)\)\s*initParallaxOrbs/.test(animContent), 'parallax not gated on heavyEffectsAllowed');
    assert.ok(/if\s*\(_heavyEffectsAllowed\(\)\)\s*initCardTilt/.test(animContent), 'card tilt not gated on heavyEffectsAllowed');
    assert.ok(/if\s*\(_heavyEffectsAllowed\(\)\)\s*initMagneticButtons/.test(animContent), 'magnetic buttons not gated on heavyEffectsAllowed');
  });

  it('animations.js card tilt + magnetic are idempotent (data-bound attributes)', () => {
    assert.ok(/data-tilt-bound|tiltBound/.test(animContent), 'card tilt lacks idempotency guard (tiltBound)');
    assert.ok(/data-magnetic-bound|magneticBound/.test(animContent), 'magnetic buttons lacks idempotency guard (magneticBound)');
  });

  it('app.js calls moduleEnter exactly once per navigateTo (no double entrance)', () => {
    // Count actual calls (open-paren), not guard-check truthiness expressions
    const calls = appContent.match(/InkAnimations\.moduleEnter\s*\(/g) || [];
    assert.equal(calls.length, 1, `expected 1 moduleEnter call, found ${calls.length}`);
  });

  it('app.js wires revealModule + refreshInteractions after populateModule', () => {
    assert.ok(/InkAnimations\.revealModule/.test(appContent), 'revealModule not called in app.js');
    assert.ok(/InkAnimations\.refreshInteractions/.test(appContent), 'refreshInteractions not called in app.js');
  });

  it('animations.js pageTransition skips old-module fade when moduleExit owns it', () => {
    assert.ok(/_moduleExiting/.test(animContent), 'pageTransition does not check _moduleExiting — double-tween overlap with moduleExit');
  });

  it('index.html has no reference to fix.js (deleted one-off)', () => {
    assert.ok(!/fix\.js/.test(indexContent), 'index.html still references fix.js');
    assert.ok(!fs.existsSync(path.join(ROOT_DIR, 'fix.js')), 'fix.js still exists in repo root');
  });

  it('index.html has #app wrapper containing #main-nav and #main-content', () => {
    const appOpen = indexContent.indexOf('<div id="app">');
    const appClose = indexContent.indexOf('</div>', appOpen);
    const navIdx = indexContent.indexOf('id="main-nav"', appOpen);
    const contentIdx = indexContent.indexOf('id="main-content"', appOpen);
    assert.ok(appOpen > -1, '#app wrapper missing');
    assert.ok(navIdx > appOpen && navIdx < appClose, '#main-nav not inside #app');
    assert.ok(contentIdx > appOpen && contentIdx < appClose, '#main-content not inside #app');
  });

  it('index.html loads scripts in correct animation dependency order', () => {
    const order = (s) => {
      const i = indexContent.indexOf(s);
      assert.ok(i > -1, `${s} not found in index.html`);
      return i;
    };
    const gsapIdx = order('vendor/gsap.min.js');
    const stIdx = order('vendor/ScrollTrigger.min.js');
    const animIdx = order('js/animations.js');
    const appIdx = order('js/app.js');
    assert.ok(gsapIdx < stIdx, 'gsap.min.js must load before ScrollTrigger.min.js');
    assert.ok(stIdx < animIdx, 'ScrollTrigger.min.js must load before animations.js');
    assert.ok(animIdx < appIdx, 'animations.js must load before app.js');
  });

  it('animations.js + app.js parse without syntax errors', () => {
    for (const f of ['js/animations.js', 'js/app.js']) {
      const content = fs.readFileSync(path.join(ROOT_DIR, f), 'utf8');
      let ok;
      try { new Function(content); ok = true; } catch (e) { ok = false; }
      assert.ok(ok, `${f} — syntax error`);
    }
  });

  it('celebrateLoginReward has a reduced-motion fallback (not silent)', () => {
    // Extract the celebrateLoginReward function body
    const fnMatch = animContent.match(/celebrateLoginReward\s*=\s*function[\s\S]*?burstParticles/);
    assert.ok(fnMatch, 'celebrateLoginReward not found');
    const body = fnMatch[0];
    assert.ok(/prefersReducedMotion/.test(body), 'celebrateLoginReward missing prefersReducedMotion branch');
    assert.ok(/showToast/.test(body), 'celebrateLoginReward reduced-motion path has no showToast fallback');
  });

  it('index.html loads vendor/lenis.min.js between ScrollTrigger and animations.js (3rd animation lib)', () => {
    const lenisIdx = indexContent.indexOf('vendor/lenis.min.js');
    assert.ok(lenisIdx > -1, 'vendor/lenis.min.js not loaded in index.html');
    const stIdx = indexContent.indexOf('vendor/ScrollTrigger.min.js');
    const animIdx = indexContent.indexOf('js/animations.js');
    assert.ok(stIdx < lenisIdx, 'lenis must load after ScrollTrigger');
    assert.ok(lenisIdx < animIdx, 'lenis must load before animations.js');
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'vendor', 'lenis.min.js')), 'vendor/lenis.min.js missing on disk');
  });

  it('animations.js wires Lenis smooth-scroll (gated + public API)', () => {
    assert.ok(/var LenisCtor\s*=\s*window\.Lenis/.test(animContent), 'LenisCtor not captured from window.Lenis');
    assert.ok(/function\s+initSmoothScroll\s*\(/.test(animContent), 'initSmoothScroll function missing');
    assert.ok(/if\s*\(_heavyEffectsAllowed\(\)\)\s*return|_heavyEffectsAllowed\(\)\)/.test(animContent) && /initSmoothScroll\(\)/.test(animContent), 'initSmoothScroll not called or not gated');
    // GSAP ticker drives Lenis rAF (single loop, 60fps)
    assert.ok(/gsap\.ticker\.add/.test(animContent), 'Lenis not driven by gsap.ticker');
    assert.ok(/lenis\.on\(['"]scroll['"]/.test(animContent), 'Lenis scroll->ScrollTrigger.update sync missing');
    // Public API surface
    for (const fn of ['getLenis', 'scrollTo', 'stopSmoothScroll', 'startSmoothScroll']) {
      assert.ok(new RegExp(`InkAnimations\\.${fn}\\b`).test(animContent), `InkAnimations.${fn} not exposed`);
    }
  });

  it('app.js resets scroll on module switch via InkAnimations.scrollTo (Lenis-aware)', () => {
    assert.ok(/InkAnimations\.scrollTo\(0/.test(appContent), 'app.js does not call InkAnimations.scrollTo(0) on module switch');
  });

  it('sw.js precaches lenis.min.js + loading.css + placement-test.css and bumped cache version', () => {
    const swContent = fs.readFileSync(path.join(ROOT_DIR, 'sw.js'), 'utf8');
    assert.ok(/chinese-master-v[3-9]/.test(swContent), 'CACHE_NAME not bumped to v3+');
    for (const u of ['/vendor/lenis.min.js', '/css/loading.css', '/css/placement-test.css']) {
      assert.ok(swContent.indexOf(u) > -1, `sw.js does not precache ${u}`);
    }
  });

  it('animations.js initializes window.InkAnimations namespace BEFORE any property assignments in IIFE body', () => {
    // The IIFE assigns window.InkAnimations.revealModule and window.InkAnimations.refreshInteractions
    // in the IIFE body (outside init()). Without early namespace init, these throw TypeError
    // and kill the entire IIFE — breaking all animations.
    const namespaceInitIdx = animContent.indexOf("window.InkAnimations = window.InkAnimations || {}");
    assert.ok(namespaceInitIdx > -1, 'window.InkAnimations namespace not initialized in animations.js');
    // Find first property assignment (revealModule or refreshInteractions)
    const revealIdx = animContent.indexOf('window.InkAnimations.revealModule');
    const refreshIdx = animContent.indexOf('window.InkAnimations.refreshInteractions');
    const firstAssign = Math.min(
      revealIdx > -1 ? revealIdx : Infinity,
      refreshIdx > -1 ? refreshIdx : Infinity
    );
    if (firstAssign !== Infinity) {
      assert.ok(namespaceInitIdx < firstAssign,
        'window.InkAnimations namespace must be initialized BEFORE first property assignment (revealModule/refreshInteractions)');
    }
  });
});
