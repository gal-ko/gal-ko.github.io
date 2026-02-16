/**
 * Google Analytics event tracking
 */

class Analytics {
    /**
     * Track a custom event
     * @param {string} eventName - Name of the event
     * @param {object} params - Additional parameters
     */
    static trackEvent(eventName, params = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, params);
            console.log(`[Analytics] Event tracked: ${eventName}`, params);
        }
    }

    /**
     * Track serial key generation
     * @param {string} method - 'button' or 'keyboard'
     * @param {number} keyCount - Total number of keys generated
     */
    static trackGenerateKey(method, keyCount) {
        this.trackEvent('generate_key', {
            event_category: 'engagement',
            event_label: method,
            value: keyCount
        });
    }

    /**
     * Track music toggle
     * @param {string} action - 'play' or 'pause'
     * @param {string} method - 'button' or 'keyboard'
     */
    static trackMusicToggle(action, method) {
        this.trackEvent('music_toggle', {
            event_category: 'engagement',
            event_label: `${action}_${method}`,
            music_action: action
        });
    }

    /**
     * Track group change
     * @param {string} groupName - Name of the group
     * @param {string} method - 'button' or 'keyboard'
     */
    static trackGroupChange(groupName, method) {
        this.trackEvent('group_change', {
            event_category: 'engagement',
            event_label: method,
            group_name: groupName
        });
    }

    /**
     * Track theme change
     * @param {string} themeName - Name of the theme
     * @param {string} method - 'button' or 'keyboard'
     */
    static trackThemeChange(themeName, method) {
        this.trackEvent('theme_change', {
            event_category: 'engagement',
            event_label: method,
            theme_name: themeName
        });
    }

    /**
     * Track age gate interaction
     * @param {string} answer - 'correct' or 'wrong'
     */
    static trackAgeGate(answer) {
        this.trackEvent('age_gate', {
            event_category: 'engagement',
            event_label: answer,
            age_verification: answer
        });
    }

    /**
     * Track external link clicks
     * @param {string} url - URL being clicked
     * @param {string} linkText - Text of the link
     */
    static trackExternalLink(url, linkText) {
        this.trackEvent('click', {
            event_category: 'outbound',
            event_label: linkText,
            link_url: url
        });
    }
}
