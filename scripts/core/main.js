/**
 * Main application initialization
 */

document.addEventListener('DOMContentLoaded', () => {
    // Apply CSS variables from config (text size, card padding, and spacing)
    document.documentElement.style.setProperty('--text-size', APP_CONFIG.TEXT_SIZE);
    document.documentElement.style.setProperty('--mobile-text-size', APP_CONFIG.MOBILE_TEXT_SIZE);
    document.documentElement.style.setProperty('--card-padding', APP_CONFIG.CARD_PADDING);
    document.documentElement.style.setProperty('--card-spacing', APP_CONFIG.CARD_SPACING);

    // Create and initialize theme manager (must be first to apply saved theme before rendering)
    const themeManager = new ThemeManager();
    themeManager.initialize();

    // Create starfield background animation with configured number of stars
    const starfield = new Starfield('starfield', APP_CONFIG.NUM_STARS);

    // Create music player controller (starts paused, user must enable)
    const musicPlayer = new MusicPlayer('keygenMusic', 'musicToggle', APP_CONFIG.MUSIC_VOLUME);

    // Create age gate overlay (starts music on verification)
    const ageGate = new AgeGate(musicPlayer);

    // Create serial key generator with animation and counter
    const serialGenerator = new SerialGenerator('serialBox', 'generateBtn', 'keyCount');

    // Create group rotator to cycle through warez groups
    const groupRotator = new GroupRotator('logo', 'subtitle', 'groupToggle');

    // Create keyboard controller for shortcuts (Space, Arrows, Shift)
    const keyboardController = new KeyboardController(serialGenerator, groupRotator, themeManager, musicPlayer);

    // Setup logo click animation
    const logo = DOMUtils.getById('logo');
    logo.style.cursor = 'pointer'; // Show pointer cursor on hover
    // Set animation duration and opacity from config
    DOMUtils.setCSSVars(logo, {
        '--shimmer-duration': `${APP_CONFIG.LOGO_SHIMMER_DURATION}ms`,
        '--shimmer-alpha': APP_CONFIG.LOGO_SHIMMER_ALPHA
    });

    // Trigger ripple animation on click
    logo.addEventListener('click', () => {
        logo.classList.remove('ripple'); // Remove class to reset animation
        void logo.offsetWidth; // Force reflow to restart animation
        logo.classList.add('ripple'); // Add class to trigger animation
    });

    // Clean up ripple class when animation completes
    logo.addEventListener('animationend', () => {
        logo.classList.remove('ripple');
    });

    // Output keygen info to browser console
    ConsoleLogger.logKeygenInfo();
});
