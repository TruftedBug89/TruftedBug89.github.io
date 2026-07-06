// ============================================
// CHINESE MASTER - Audio Manager
// ============================================

const AudioManager = {
    // Speech synthesis instance
    synth: window.speechSynthesis,
    
    // Current utterance
    currentUtterance: null,
    
    // Audio state
    isPlaying: false,
    isPaused: false,
    
    // Chinese voice
    chineseVoice: null,
    
    // Initialize audio manager
    init() {
        this.loadVoices();
        
        // Voices may load asynchronously
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.loadVoices();
        }
    },
    
    // Load available voices
    loadVoices() {
        const voices = this.synth.getVoices();
        
        // Find Chinese voice
        this.chineseVoice = voices.find(voice => 
            voice.lang.includes('zh') || 
            voice.lang.includes('cmn') ||
            voice.name.includes('Chinese')
        );
        
        // Fallback to any available voice
        if (!this.chineseVoice && voices.length > 0) {
            this.chineseVoice = voices[0];
        }
    },
    
    // Speak text in Chinese
    speak(text, options = {}) {
        return new Promise((resolve, reject) => {
            // Cancel any current speech
            this.stop();
            
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Set voice
            if (this.chineseVoice) {
                utterance.voice = this.chineseVoice;
            }
            
            // Set language
            utterance.lang = options.lang || 'zh-CN';
            
            // Set rate (speed)
            var userData = StorageManager.getUserData();
            utterance.rate = options.rate || (userData && userData.settings && userData.settings.audioSpeed) || 0.8;
            
            // Set pitch
            utterance.pitch = options.pitch || 1;
            
            // Set volume
            utterance.volume = options.volume || 1;
            
            // Event handlers
            utterance.onstart = () => {
                this.isPlaying = true;
                this.isPaused = false;
                if (options.onStart) options.onStart();
            };
            
            utterance.onend = () => {
                this.isPlaying = false;
                this.isPaused = false;
                this.currentUtterance = null;
                if (options.onEnd) options.onEnd();
                resolve();
            };
            
            utterance.onerror = (event) => {
                this.isPlaying = false;
                this.isPaused = false;
                this.currentUtterance = null;
                if (options.onError) options.onError(event);
                reject(event);
            };
            
            // Store current utterance
            this.currentUtterance = utterance;
            
            // Speak
            this.synth.speak(utterance);
        });
    },
    
    // Stop speech
    stop() {
        if (this.synth.speaking) {
            this.synth.cancel();
        }
        this.isPlaying = false;
        this.isPaused = false;
        this.currentUtterance = null;
    },
    
    // Pause speech
    pause() {
        if (this.synth.speaking && !this.isPaused) {
            this.synth.pause();
            this.isPaused = true;
        }
    },
    
    // Resume speech
    resume() {
        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
        }
    },
    
    // Speak with delay between characters
    async speakSlow(text, charDelay = 500) {
        for (const char of text) {
            if (/[\u4e00-\u9fff]/.test(char)) {
                await this.speak(char, { rate: 0.5 });
                await this.delay(charDelay);
            }
        }
    },
    
    // Speak sentence with repetition
    async speakWithRepetition(text, repetitions = 2, delayBetween = 1000) {
        for (let i = 0; i < repetitions; i++) {
            await this.speak(text);
            if (i < repetitions - 1) {
                await this.delay(delayBetween);
            }
        }
    },
    
    // Speak at different speeds
    async speakAtSpeeds(text, speeds = [0.5, 0.8, 1.0]) {
        for (const speed of speeds) {
            await this.speak(text, { rate: speed });
            await this.delay(500);
        }
    },
    
    // Delay helper
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    // Get available voices
    getVoices() {
        return this.synth.getVoices();
    },
    
    // Set audio speed
    setSpeed(speed) {
        StorageManager.updateUserData('settings.audioSpeed', speed);
    },
    
    // Get current speed
    getSpeed() {
        var userData = StorageManager.getUserData();
        return (userData && userData.settings && userData.settings.audioSpeed) || 0.8;
    },
    
    // Check if speech synthesis is supported
    isSupported() {
        return 'speechSynthesis' in window;
    },
    
    // Speak English text
    speakEnglish(text, options = {}) {
        return this.speak(text, {
            ...options,
            lang: 'en-US',
            rate: options.rate || 1.0
        });
    },
    
    // Speak pinyin (as English approximation)
    speakPinyin(pinyin, options = {}) {
        // Convert pinyin to approximate English pronunciation
        const approximations = {
            'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
            'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
            'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
            'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
            'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
            'ǖ': 'v', 'ǘ': 'v', 'ǚ': 'v', 'ǜ': 'v'
        };
        
        let approx = pinyin;
        Object.entries(approximations).forEach(([toned, plain]) => {
            approx = approx.replace(new RegExp(toned, 'g'), plain);
        });
        
        return this.speak(approx, {
            ...options,
            lang: 'en-US',
            rate: options.rate || 0.7
        });
    },
    
    // Create audio visualization
    createVisualization(container) {
        const bars = [];
        for (let i = 0; i < 7; i++) {
            const bar = document.createElement('div');
            bar.className = 'wave-bar';
            container.appendChild(bar);
            bars.push(bar);
        }
        
        return {
            start() {
                container.classList.remove('paused');
            },
            stop() {
                container.classList.add('paused');
            }
        };
    }
};

// Export for use in other modules
window.AudioManager = AudioManager;
