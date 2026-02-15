/**
 * Application constants and strings
 * Note: Groups are loaded from groups.js
 */

const APP_STRINGS = {
    // Browser tab title
    PAGE_TITLE: 'a keygen homage.',

    // UI Templates
    WINDOW_TITLE_TEMPLATE: 'KEYGEN V2.5 (CRACKED BY {name})',
    GROUP_TITLE_TEMPLATE: '═══ Group {name} ═══',
    SUBTITLE_TEMPLATE: '░▒▓ {slogan} ▓▒░',

    // Credits layout configuration
    CREDITS_ROLES: [
        { key: 'cracker', label: 'CRACKER' },
        { key: 'supplier', label: 'SUPPLIER' },
        { key: 'courier', label: 'COURIER' },
        { key: 'gfx', label: 'GFX' }
    ],
    CREDITS_LABEL_WIDTH: 10,  // Width for role labels (e.g., "CRACKER")
    CREDITS_VALUE_WIDTH: 13,  // Width for member names

    // Serial section
    SERIAL_PLACEHOLDER: 'xxxx-xxxx-xxxx-xxxx-xxxx',

    // Buttons
    GENERATE_BUTTON: '[ Generate ]',
    MUSIC_ON: '[▓] Sound: On',
    MUSIC_OFF: '[ ] Sound: Off',
    MUSIC_LOADING: '[ ] Sound: Loading...',

    // Creator
    CREATOR_NAME: 'Galko',

    // Age Gate
    AGE_GATE_TITLE: 'AGE VERIFICATION',
    AGE_GATE_INTRO: 'Before we move on,',
    AGE_GATE_QUESTION: 'Can you identify this object?',
    AGE_GATE_EMOJI: '💾',
    AGE_GATE_CORRECT: 'A floppy disk!<br>This baby can hold up to 1.44MB.',
    AGE_GATE_WRONG: "That's the save icon. boomer.",

    // Disclaimer
    DISCLAIMER: `A tribute to the 90s warez scene.`,
    WAREZ_SCENE_URL: 'https://en.wikipedia.org/wiki/Warez_scene',

    // URLs
    LINKEDIN_URL: 'https://www.linkedin.com/in/galkoren',
    GITHUB_URL: 'https://github.com/gal-ko/gal-ko.github.io',

    // Attributions
    ATTRIBUTIONS_TITLE: 'Credits',
    MUSIC_TRACK: 'Spell',
    MUSIC_ARTIST: 'Rolemusic',
    MUSIC_LICENSE: 'CC BY 4.0',
    FONT_NAME: 'DOS Rebel',
    FONT_AUTHOR: 'Valerie Mates',

    URL_ARTIST: 'https://freemusicarchive.org/music/Rolemusic/',
    URL_LICENSE: 'https://creativecommons.org/licenses/by/4.0/',
    DOS_REBEL_URL: 'https://patorjk.com/software/taag/#p=display&f=DOS+Rebel&t=Type+Something+&x=none&v=4&h=4&w=80&we=false',
    COLOR_HUNT_URL: 'https://colorhunt.co/',

    // ASCII decoration widths
    BORDER_WIDTH: 83,
    DECORATION_WIDTH: 41,

    // Keyboard controls
    KEYBOARD_CONTROLS: [
        { key: 'SPACE', action: 'GENERATE KEY' },
        { key: 'SHIFT', action: 'TOGGLE SOUND' },
        { key: '↑ / ↓', action: 'PREVIOUS / NEXT GROUP' },
        { key: '← / →', action: 'PREVIOUS / NEXT THEME' }
    ],
    CONTROLS_KEY_WIDTH: 10,
    CONTROLS_ACTION_WIDTH: 15,

    // ASCII decorations (generated dynamically with repeat)
    get BORDER_TOP() {
        return '╔' + '═'.repeat(this.BORDER_WIDTH) + '╗';
    },
    get BORDER_BOTTOM() {
        return '╚' + '═'.repeat(this.BORDER_WIDTH) + '╝';
    },
    get DECORATION_1() {
        return '▀▄'.repeat(this.DECORATION_WIDTH) + '▀';
    }
};

const APP_CONFIG = {
    // Music
    MUSIC_VOLUME: 0.1,
    MUSIC_PATH: 'assets/audio/music.mp3',

    // Starfield
    NUM_STARS: 100,
    STAR_SPEED: 4,

    // Serial generator
    SERIAL_CHARS: 'abcdefghijklmnopqrstuvwxyz0123456789',
    SERIAL_SEGMENTS: 5,
    SERIAL_SEGMENT_LENGTH: 4,
    GENERATION_SPEED: 40, // Speed of randomizing animation in ms
    CHAR_LOCK_DELAY: 30, // Delay between each character locking in ms (0 = all at once)

    // Logo animation
    LOGO_SHIMMER_DURATION: 250, // Duration in milliseconds
    LOGO_SHIMMER_ALPHA: 0.2, // Opacity of shimmer effect (0.0 - 1.0)

    // Keyboard feedback
    KEYBOARD_FLASH_DURATION: 200, // Duration of button flash on keyboard shortcut (ms)

    // Typography
    TEXT_SIZE: '12px', // Universal text size for desktop
    MOBILE_TEXT_SIZE: '10px', // Universal text size for mobile

    // Card spacing
    CARD_PADDING: '16px', // Inner padding for all cards
    CARD_SPACING: '16px' // Spacing between cards
};
