/**
 * Theme Manager - Handles theme switching and persistence
 */

class ThemeManager {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.themeButtonId = 'themeToggle';
    }

    initialize() {
        this.applyTheme(this.currentTheme);
        this.setupThemeButton();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('keygenTheme');
        return savedTheme && THEMES[savedTheme] ? savedTheme : DEFAULT_THEME;
    }

    saveTheme(themeName) {
        localStorage.setItem('keygenTheme', themeName);
    }

    applyTheme(themeName, method = null) {
        const theme = THEMES[themeName];
        if (!theme) {
            console.error(`Theme ${themeName} not found`);
            return;
        }

        const root = document.documentElement;
        const colors = theme.colors;

        // Apply CSS custom properties
        DOMUtils.setCSSVars(root, {
            '--color-primary': colors.primary,
            '--color-secondary': colors.secondary,
            '--color-tertiary': colors.tertiary,
            '--color-accent': colors.accent,
            '--color-background': colors.background,
            '--color-text': colors.text,
            '--glow-primary': colors.primaryGlow,
            '--glow-secondary': colors.secondaryGlow,
            '--glow-tertiary': colors.tertiaryGlow,
            '--glow-accent': colors.accentGlow,
            '--bg-primary': colors.primaryBg,
            '--bg-secondary': colors.secondaryBg,
            '--bg-tertiary': colors.tertiaryBg,
            '--titlebar-start': colors.titleBarStart,
            '--titlebar-end': colors.titleBarEnd
        });

        this.currentTheme = themeName;
        this.saveTheme(themeName);
        this.updateThemeButton();

        // Track analytics event (only if method is provided, skip on initial load)
        if (method) {
            Analytics.trackThemeChange(theme.name, method);
        }
    }

    getNextTheme() {
        const themeKeys = Object.keys(THEMES);
        const currentIndex = themeKeys.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        return themeKeys[nextIndex];
    }

    switchTheme(method = 'button') {
        const nextTheme = this.getNextTheme();
        this.applyTheme(nextTheme, method);
    }

    setupThemeButton() {
        DOMUtils.setupToggleButton(
            this.themeButtonId,
            () => this.switchTheme('button'),
            () => this.updateThemeButton()
        );
    }

    updateThemeButton() {
        const themeKeys = Object.keys(THEMES);
        const currentIndex = themeKeys.indexOf(this.currentTheme);
        const position = `${currentIndex + 1}/${themeKeys.length}`;
        const currentThemeName = THEMES[this.currentTheme].name;
        const nextTheme = this.getNextTheme();
        const nextThemeName = THEMES[nextTheme].name;
        DOMUtils.updateToggleButton(
            this.themeButtonId,
            `Theme (${position}):`,
            currentThemeName,
            nextThemeName,
            'Switch to'
        );
    }

    getCurrentThemeName() {
        return THEMES[this.currentTheme].name;
    }
}
