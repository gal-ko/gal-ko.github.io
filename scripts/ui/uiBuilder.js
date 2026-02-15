/**
 * UI Builder - Populates the interface from constants
 */

class UIBuilder {
    static initialize() {
        // Set browser tab title
        document.title = APP_STRINGS.PAGE_TITLE;

        // Logo and subtitle - handled by GroupRotator

        // Borders and decorations
        DOMUtils.setText('borderTop', APP_STRINGS.BORDER_TOP);
        DOMUtils.setText('borderBottom', APP_STRINGS.BORDER_BOTTOM);
        DOMUtils.setText('decoration1', APP_STRINGS.DECORATION_1);

        // Serial section
        DOMUtils.setText('serialBox', APP_STRINGS.SERIAL_PLACEHOLDER);

        // Buttons
        DOMUtils.setText('generateBtn', APP_STRINGS.GENERATE_BUTTON);
        DOMUtils.setText('musicToggle', APP_STRINGS.MUSIC_OFF);

        // Status bar - Created by
        DOMUtils.setHTML('createdBy', `<a href="${APP_STRINGS.LINKEDIN_URL}" target="_blank"><span class="uppercase">${APP_STRINGS.CREATOR_NAME}</span></a>`);

        // Group credits - handled by GroupRotator

        // Keyboard controls
        DOMUtils.setHTML('controlsBox', this.buildControls());

        // Disclaimer
        DOMUtils.setHTML('disclaimer', this.buildDisclaimer());
    }

    static buildControls() {
        const controls = APP_STRINGS.KEYBOARD_CONTROLS;

        // Build controls lines with flex layout
        const lines = controls.map(control => {
            return `<div class="controls-line"><span class="controls-label">${control.key}</span><span class="controls-dots">................................................................................................</span><span class="controls-value">${control.action}</span></div>`;
        });

        return lines.join('');
    }

    static buildDisclaimer() {
        let disclaimer = APP_STRINGS.DISCLAIMER;
        disclaimer = disclaimer.replace('warez scene', `<a href="${APP_STRINGS.WAREZ_SCENE_URL}" target="_blank">warez scene</a>`);

        const credits = `Music: "${APP_STRINGS.MUSIC_TRACK}" by <a href="${APP_STRINGS.URL_ARTIST}" target="_blank">${APP_STRINGS.MUSIC_ARTIST}</a> (<a href="${APP_STRINGS.URL_LICENSE}" target="_blank">${APP_STRINGS.MUSIC_LICENSE}</a>).<br>ASCII Art: <a href="${APP_STRINGS.DOS_REBEL_URL}" target="_blank">${APP_STRINGS.FONT_NAME}</a> by ${APP_STRINGS.FONT_AUTHOR}.<br>Color themes by <a href="${APP_STRINGS.COLOR_HUNT_URL}" target="_blank">Color Hunt</a>.<br>Generated serial numbers are <a href="${APP_STRINGS.GITHUB_URL}" target="_blank">totally random</a>.<br>No software was harmed in the making of this website.`;

        return disclaimer + '<br>' + credits;
    }
}

// Initialize UI when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UIBuilder.initialize());
} else {
    UIBuilder.initialize();
}
