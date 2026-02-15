/**
 * Utility functions for common DOM operations
 */

const DOMUtils = {
    /**
     * Get element by ID
     */
    getById(id) {
        return document.getElementById(id);
    },

    /**
     * Set text content of an element
     */
    setText(id, text) {
        const element = this.getById(id);
        if (element) {
            element.textContent = text;
        }
    },

    /**
     * Set HTML content of an element
     */
    setHTML(id, html) {
        const element = this.getById(id);
        if (element) {
            element.innerHTML = html;
        }
    },

    /**
     * Set multiple CSS custom properties at once
     */
    setCSSVars(element, vars) {
        Object.entries(vars).forEach(([name, value]) => {
            element.style.setProperty(name, value);
        });
    },

    /**
     * Center text by padding both sides
     */
    centerText(text, width) {
        if (text.length >= width) return text;
        const totalPadding = width - text.length;
        const leftPadding = Math.floor(totalPadding / 2);
        const rightPadding = totalPadding - leftPadding;
        return ' '.repeat(leftPadding) + text + ' '.repeat(rightPadding);
    },

    /**
     * Setup a toggle button with click handler and initial state
     */
    setupToggleButton(buttonId, clickHandler, updateCallback) {
        const button = this.getById(buttonId);
        if (button) {
            button.addEventListener('click', clickHandler);
            updateCallback(button);
        }
    },

    /**
     * Update a status toggle button with label, current value, and tooltip
     */
    updateToggleButton(buttonId, label, currentName, nextName, tooltipPrefix) {
        const button = this.getById(buttonId);
        if (button) {
            const centeredName = this.centerText(currentName, 12);
            button.innerHTML = `<div class="status-label">${label}</div><div class="status-value">${centeredName}</div>`;
            button.title = `${tooltipPrefix} ${nextName}`;
        }
    }
};
