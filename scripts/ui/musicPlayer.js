/**
 * Music player controller
 */

class MusicPlayer {
    constructor(audioId, toggleButtonId, volume = APP_CONFIG.MUSIC_VOLUME) {
        this.audio = DOMUtils.getById(audioId);
        this.toggleButton = DOMUtils.getById(toggleButtonId);
        this.isPlaying = false;
        this.isLoaded = false;

        this.audio.volume = volume;

        // Show loading state initially
        this.toggleButton.textContent = APP_STRINGS.MUSIC_LOADING;
        this.toggleButton.disabled = true;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.toggleButton.addEventListener('click', () => this.toggle('button'));

        // Listen for when audio is ready to play
        this.audio.addEventListener('canplay', () => {
            if (!this.isLoaded) {
                this.isLoaded = true;
                this.toggleButton.textContent = APP_STRINGS.MUSIC_OFF;
                this.toggleButton.disabled = false;
            }
        });

        // Listen for loading errors
        this.audio.addEventListener('error', () => {
            this.toggleButton.textContent = '[ ] Sound: Error';
            this.toggleButton.disabled = true;
        });
    }

    toggle(method = 'button') {
        if (this.isPlaying) {
            this.pause(method);
        } else {
            this.play(method);
        }
    }

    play(method = 'button') {
        this.audio.play().catch(() => {
            console.log('Play failed');
        });
        this.toggleButton.textContent = APP_STRINGS.MUSIC_ON;
        this.isPlaying = true;

        // Track analytics event
        Analytics.trackMusicToggle('play', method);
    }

    pause(method = 'button') {
        this.audio.pause();
        this.toggleButton.textContent = APP_STRINGS.MUSIC_OFF;
        this.isPlaying = false;

        // Track analytics event
        Analytics.trackMusicToggle('pause', method);
    }
}
