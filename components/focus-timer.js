const FocusTimer = {
    time: 25 * 60,
    interval: null,
    isPlaying: false,

    init() {
        this.render();
        this.setupEventListeners();
        this.makeDraggable();
    },

    render() {
        if (document.getElementById('floating-timer')) return;

        const html = `
            <div id="floating-timer" class="floating-timer hidden">
                <div class="timer-drag-handle" aria-hidden="true" title="Drag timer">≡</div>
                <div class="timer-display" role="timer">
                    <span id="timer-mins">25</span>:<span id="timer-secs">00</span>
                </div>
                <div class="timer-controls">
                    <button id="timer-play-pause" class="btn btn-primary btn-icon" aria-label="Play timer">▶</button>
                    <button id="timer-reset" class="btn btn-secondary btn-icon" aria-label="Reset timer">↻</button>
                    <button id="timer-close" class="btn btn-secondary btn-icon" aria-label="Close timer">✕</button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);

        // Add toggle button to nav or dashboard (we'll do dashboard for now)
        const dashboardHero = document.querySelector('.neo-hero__actions');
        if (dashboardHero) {
            dashboardHero.insertAdjacentHTML('beforeend', `
                <button class="neo-ghost-button" type="button" id="toggle-focus-timer">
                    ⏱️ Focus Timer
                </button>
            `);
        }
    },

    setupEventListeners() {
        const toggleBtn = document.getElementById('toggle-focus-timer');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const timer = document.getElementById('floating-timer');
                if (timer) timer.classList.toggle('hidden');
            });
        }

        const playBtn = document.getElementById('timer-play-pause');
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                this.isPlaying = !this.isPlaying;
                playBtn.textContent = this.isPlaying ? '⏸' : '▶';
                playBtn.setAttribute('aria-label', this.isPlaying ? 'Pause timer' : 'Play timer');
                if (this.isPlaying) {
                    this.start();
                } else {
                    this.pause();
                }
            });
        }

        const resetBtn = document.getElementById('timer-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.reset();
            });
        }

        const closeBtn = document.getElementById('timer-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                const timer = document.getElementById('floating-timer');
                if (timer) timer.classList.add('hidden');
                this.pause();
                this.isPlaying = false;
                if(playBtn) {
                    playBtn.textContent = '▶';
                    playBtn.setAttribute('aria-label', 'Play timer');
                }
            });
        }
    },

    start() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.time > 0) {
                this.time--;
                this.updateDisplay();
            } else {
                this.pause();
                this.isPlaying = false;
                const playBtn = document.getElementById('timer-play-pause');
                if(playBtn) {
                    playBtn.textContent = '▶';
                    playBtn.setAttribute('aria-label', 'Play timer');
                }
                Utils.playSound('success'); // Assuming there's a sound utility
                Utils.showToast('Focus session complete!', 'success');
            }
        }, 1000);
    },

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    },

    reset() {
        this.pause();
        this.time = 25 * 60;
        this.isPlaying = false;
        const playBtn = document.getElementById('timer-play-pause');
        if(playBtn) {
            playBtn.textContent = '▶';
            playBtn.setAttribute('aria-label', 'Play timer');
        }
        this.updateDisplay();
    },

    updateDisplay() {
        const mins = Math.floor(this.time / 60);
        const secs = this.time % 60;
        const minsEl = document.getElementById('timer-mins');
        const secsEl = document.getElementById('timer-secs');
        if (minsEl) minsEl.textContent = mins.toString().padStart(2, '0');
        if (secsEl) secsEl.textContent = secs.toString().padStart(2, '0');
    },

    makeDraggable() {
        const timer = document.getElementById('floating-timer');
        const handle = timer.querySelector('.timer-drag-handle');
        if (!timer || !handle) return;

        let isDragging = false;
        let startX, startY, initialX, initialY;

        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            const rect = timer.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;

            timer.style.position = 'fixed';
            timer.style.margin = '0';
            timer.style.left = initialX + 'px';
            timer.style.top = initialY + 'px';
            timer.style.bottom = 'auto';
            timer.style.right = 'auto';

            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            let newX = initialX + dx;
            let newY = initialY + dy;

            // Keep within bounds
            if (newX < 0) newX = 0;
            if (newY < 0) newY = 0;
            if (newX + timer.offsetWidth > window.innerWidth) {
                newX = window.innerWidth - timer.offsetWidth;
            }
            if (newY + timer.offsetHeight > window.innerHeight) {
                newY = window.innerHeight - timer.offsetHeight;
            }

            timer.style.left = newX + 'px';
            timer.style.top = newY + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
};

window.FocusTimer = FocusTimer;
