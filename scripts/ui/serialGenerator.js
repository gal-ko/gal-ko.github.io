/**
 * Serial key generator
 */

class SerialGenerator {
    constructor(displayElementId, generateButtonId, counterElementId) {
        this.displayElement = DOMUtils.getById(displayElementId);
        this.generateButton = DOMUtils.getById(generateButtonId);
        this.counterElement = DOMUtils.getById(counterElementId);
        this.keyCount = 0;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.generateButton.addEventListener('click', () => this.generate());
    }

    generateSerial() {
        const segments = [];
        const { SERIAL_CHARS, SERIAL_SEGMENTS, SERIAL_SEGMENT_LENGTH } = APP_CONFIG;

        for (let i = 0; i < SERIAL_SEGMENTS; i++) {
            let segment = '';
            for (let j = 0; j < SERIAL_SEGMENT_LENGTH; j++) {
                segment += SERIAL_CHARS.charAt(Math.floor(Math.random() * SERIAL_CHARS.length));
            }
            segments.push(segment);
        }

        return segments.join('-');
    }

    generateRandomChar() {
        const { SERIAL_CHARS } = APP_CONFIG;
        return SERIAL_CHARS.charAt(Math.floor(Math.random() * SERIAL_CHARS.length));
    }

    generate() {
        const { SERIAL_SEGMENTS, SERIAL_SEGMENT_LENGTH, GENERATION_SPEED, CHAR_LOCK_DELAY } = APP_CONFIG;

        // Increment counter immediately when generate is clicked
        this.keyCount++;
        this.counterElement.textContent = this.keyCount;

        // Generate the final serial
        const finalSerial = this.generateSerial();
        const finalChars = finalSerial.split('');
        const totalChars = finalChars.length;

        // Track locked characters
        const lockedPositions = new Array(totalChars).fill(false);
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;

            // Calculate how many positions should be locked by now
            let lockedCount = 0;
            if (CHAR_LOCK_DELAY === 0) {
                // All characters lock immediately
                lockedCount = totalChars;
            } else {
                // Lock characters one by one based on elapsed time
                lockedCount = Math.floor(elapsed / CHAR_LOCK_DELAY);
            }

            // Lock positions from left to right
            for (let i = 0; i < Math.min(lockedCount, totalChars); i++) {
                lockedPositions[i] = true;
            }

            // Build the display string
            let result = '';
            for (let i = 0; i < totalChars; i++) {
                if (lockedPositions[i]) {
                    result += finalChars[i];
                } else {
                    // Generate random character or dash
                    if (finalChars[i] === '-') {
                        result += '-';
                    } else {
                        result += this.generateRandomChar();
                    }
                }
            }

            this.displayElement.textContent = result;

            // Stop when all positions are locked
            if (lockedCount >= totalChars) {
                clearInterval(interval);
            }
        }, GENERATION_SPEED);
    }
}
