/**
 * Age Gate - Entry verification overlay
 */

class AgeGate {
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
        this.overlay = DOMUtils.getById('ageGateOverlay');
        this.correctButton = DOMUtils.getById('ageCorrect');
        this.wrongButton = DOMUtils.getById('ageWrong');
        this.closeButton = DOMUtils.getById('ageGateClose');

        this.initialize();
        this.setupEventListeners();
    }

    initialize() {
        // Set content from constants
        DOMUtils.setText('ageGateTitle', APP_STRINGS.AGE_GATE_TITLE);
        DOMUtils.setText('ageGateIntro', APP_STRINGS.AGE_GATE_INTRO);
        DOMUtils.setText('ageGateEmoji', APP_STRINGS.AGE_GATE_EMOJI);
        DOMUtils.setText('ageGateQuestion', APP_STRINGS.AGE_GATE_QUESTION);
        DOMUtils.setHTML('ageCorrect', APP_STRINGS.AGE_GATE_CORRECT);
        DOMUtils.setHTML('ageWrong', APP_STRINGS.AGE_GATE_WRONG);
    }

    setupEventListeners() {
        this.correctButton.addEventListener('click', () => this.handleCorrect());
        this.wrongButton.addEventListener('click', () => this.handleWrong());
        this.closeButton.addEventListener('click', () => this.handleCorrect());

        // Keyboard support (1 for correct, 2 for wrong)
        document.addEventListener('keydown', (event) => {
            if (!this.overlay.classList.contains('hidden')) {
                if (event.key === '1') {
                    this.handleCorrect();
                } else if (event.key === '2') {
                    this.handleWrong();
                }
            }
        });
    }

    handleCorrect() {
        // Knows what a floppy disk is = old enough, let them in
        this.overlay.classList.add('hidden');

        // Start music automatically
        if (this.musicPlayer && this.musicPlayer.isLoaded) {
            this.musicPlayer.play();
        }
    }

    handleWrong() {
        // Thinks it's just a save icon = too young, redirect to TikTok
        window.location.href = 'https://www.tiktok.com';
    }
}
