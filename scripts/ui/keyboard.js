/**
 * Keyboard Controller - Handles keyboard shortcuts
 */

class KeyboardController {
    constructor(serialGenerator, groupRotator, themeManager, musicPlayer) {
        this.serialGenerator = serialGenerator;
        this.groupRotator = groupRotator;
        this.themeManager = themeManager;
        this.musicPlayer = musicPlayer;

        this.setupKeyboardListeners();
    }

    flashButton(buttonId, duration = APP_CONFIG.KEYBOARD_FLASH_DURATION) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.add('keyboard-active');
            setTimeout(() => {
                button.classList.remove('keyboard-active');
            }, duration);
        }
    }

    setupKeyboardListeners() {
        document.addEventListener('keydown', (event) => {
            // Prevent default behavior for arrow keys and space to avoid page scrolling
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
                event.preventDefault();
            }

            // Prevent default for Shift key
            if (event.key === 'Shift') {
                event.preventDefault();
            }

            switch(event.key) {
                case ' ': // Space - Generate serial key
                    this.serialGenerator.generate('keyboard');
                    this.flashButton('generateBtn');
                    break;

                case 'ArrowUp': // Up - Previous group
                    this.previousGroup();
                    this.flashButton('groupToggle');
                    break;

                case 'ArrowDown': // Down - Next group
                    this.nextGroup();
                    this.flashButton('groupToggle');
                    break;

                case 'ArrowLeft': // Left - Previous theme
                    this.previousTheme();
                    this.flashButton('themeToggle');
                    break;

                case 'ArrowRight': // Right - Next theme
                    this.themeManager.switchTheme('keyboard');
                    this.flashButton('themeToggle');
                    break;

                case 'Shift': // Shift - Toggle music
                    this.musicPlayer.toggle('keyboard');
                    this.flashButton('musicToggle');
                    break;
            }
        });
    }

    previousGroup() {
        const currentIndex = this.groupRotator.currentIndex;
        const totalGroups = this.groupRotator.groups.length;
        const previousIndex = (currentIndex - 1 + totalGroups) % totalGroups;
        this.groupRotator.currentIndex = previousIndex;
        this.groupRotator.displayGroup(previousIndex, 'keyboard');
        this.groupRotator.saveGroup(previousIndex);
    }

    nextGroup() {
        this.groupRotator.next('keyboard');
    }

    previousTheme() {
        const themeKeys = Object.keys(THEMES);
        const currentIndex = themeKeys.indexOf(this.themeManager.currentTheme);
        const previousIndex = (currentIndex - 1 + themeKeys.length) % themeKeys.length;
        this.themeManager.applyTheme(themeKeys[previousIndex], 'keyboard');
    }
}
