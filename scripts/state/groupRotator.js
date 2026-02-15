/**
 * Logo Rotator - Cycles through different warez groups
 */

class GroupRotator {
    constructor(logoElementId, subtitleElementId, groupButtonId) {
        this.logoElement = DOMUtils.getById(logoElementId);
        this.subtitleElement = DOMUtils.getById(subtitleElementId);
        this.groupButtonId = groupButtonId;
        this.currentIndex = this.loadGroup();
        this.groups = GROUPS;

        this.displayGroup(this.currentIndex);
        this.setupGroupButton();
    }

    loadGroup() {
        const savedIndex = localStorage.getItem('keygenGroup');
        const index = savedIndex ? parseInt(savedIndex, 10) : 0;
        // Validate index is within bounds
        return (index >= 0 && index < GROUPS.length) ? index : 0;
    }

    saveGroup(index) {
        localStorage.setItem('keygenGroup', index.toString());
    }

    generateWindowTitle(name) {
        return APP_STRINGS.WINDOW_TITLE_TEMPLATE.replace('{name}', name);
    }

    generateGroupTitle(name) {
        return APP_STRINGS.GROUP_TITLE_TEMPLATE.replace('{name}', name);
    }

    generateSubtitle(slogan) {
        return APP_STRINGS.SUBTITLE_TEMPLATE.replace('{slogan}', slogan);
    }

    displayGroup(index) {
        const group = this.groups[index];

        this.logoElement.textContent = group.ascii;
        this.subtitleElement.textContent = this.generateSubtitle(group.slogan);

        const windowTitle = this.generateWindowTitle(group.name);

        // Update window title
        DOMUtils.setText('windowTitle', windowTitle);

        // Update group title
        DOMUtils.setText('groupTitle', this.generateGroupTitle(group.name));

        // Update group credits
        this.updateGroupCredits(group.members);

        this.updateGroupButton();
    }

    updateGroupCredits(members) {
        const roles = APP_STRINGS.CREDITS_ROLES;

        // Build credits lines with flex layout
        const lines = roles.map(role => {
            return `<div class="credits-line"><span class="credits-label">${role.label}</span><span class="credits-dots">................................................................................................</span><span class="credits-value">${members[role.key]}</span></div>`;
        });

        DOMUtils.setHTML('groupCredits', lines.join(''));
    }

    getCurrentGroup() {
        return this.groups[this.currentIndex];
    }

    getNextIndex() {
        return (this.currentIndex + 1) % this.groups.length;
    }

    next() {
        this.currentIndex = this.getNextIndex();
        this.displayGroup(this.currentIndex);
        this.saveGroup(this.currentIndex);
    }

    setupGroupButton() {
        DOMUtils.setupToggleButton(
            this.groupButtonId,
            () => this.next(),
            () => this.updateGroupButton()
        );
    }

    updateGroupButton() {
        const currentGroupName = this.groups[this.currentIndex].name;
        const position = `${this.currentIndex + 1}/${this.groups.length}`;
        const nextIndex = this.getNextIndex();
        const nextGroupName = this.groups[nextIndex].name;
        DOMUtils.updateToggleButton(
            this.groupButtonId,
            `Group (${position}):`,
            currentGroupName,
            nextGroupName,
            'Switch to'
        );
    }
}
