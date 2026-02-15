# Keygen Homage - 90s Warez Scene Tribute

A nostalgic 90s-style keygen interface paying homage to the warez scene era. Features Windows 95 aesthetic, chiptune music, starfield animation, and authentic ASCII art.

## Project Structure

```
gal-ko/
├── index.html           # Main HTML file
├── assets/              # Media files
│   └── audio/
│       └── music.mp3   # Chiptune music (CC BY 4.0)
├── styles/              # Stylesheets (organized by purpose)
│   ├── core/
│   │   ├── variables.css   # CSS custom properties
│   │   └── base.css        # Base styles and resets
│   ├── layout/
│   │   ├── window.css      # Windows 95 window chrome
│   │   ├── components.css  # Component styles
│   │   └── age-gate.css    # Age gate overlay styles
│   └── effects/
│       ├── animations.css  # CSS animations
│       └── responsive.css  # Mobile responsive styles
├── scripts/             # JavaScript modules (organized by function)
│   ├── core/
│   │   ├── main.js         # Application initialization
│   │   └── utils.js        # DOM utility functions
│   ├── config/
│   │   ├── constants.js    # App strings and configuration
│   │   ├── themes.js       # Theme color definitions
│   │   └── groups.js       # Group data with ASCII art logos
│   ├── state/
│   │   ├── themeManager.js # Theme switching logic
│   │   └── groupRotator.js # Group switching and credits
│   ├── ui/
│   │   ├── uiBuilder.js        # UI population from constants
│   │   ├── starfield.js        # Starfield background animation
│   │   ├── musicPlayer.js      # Music player controller
│   │   ├── serialGenerator.js  # Serial key generator
│   │   ├── ageGate.js          # Age verification gate
│   │   └── keyboard.js         # Keyboard shortcuts
│   └── debug/
│       └── logger.js       # Console logger utility
└── README.md            # This file
```

## Features

- **Age Gate**: Nostalgic age verification dialog with Windows 95 styling
- **Multiple Warez Groups**: Rotate through 5 legendary groups (ORION, DEViANCE, RAZOR 1911, SKIDROW, FAiRLiGHT)
- **Authentic ASCII Art**: DOS Rebel font style logos for each group
- **Warez Scene Credits**: Authentic roles (CRACKER, SUPPLIER, COURIER, GFX) with unique members per group
- **Theme Switcher**: 8 color themes (Midnight Aurora, Forest Trails, Tropical Paradise, Desert Sunset, Phoenix Fire, Deep Ocean, Peach Blossom, Neon Nights)
- **Keyboard Controls**:
  - Space: Generate serial key
  - Up/Down arrows: Switch between groups
  - Left/Right arrows: Switch between themes
- **Starfield Animation**: Moving stars background effect
- **Chiptune Music**: Royalty-free music with CC BY 4.0 attribution
- **Serial Generator**: Random key generation with cycling animation
- **Windows 95 Chrome**: Authentic window styling with dynamic title
- **Mobile Responsive**: Works on tablets and phones
- **Theme Persistence**: Selected theme is saved to localStorage

## CSS Architecture

### Core Styles
**variables.css**
- CSS custom properties for theme colors
- Dynamically updated by ThemeManager
- Text size, card padding, and spacing variables

**base.css**
- Global resets
- Body and font styles using CSS variables
- Starfield canvas positioning
- DOS-style font stack

### Layout Styles
**window.css**
- Windows 95 window styling
- Title bar with controls (theme-aware gradient)
- Container layout

**components.css**
- ASCII art logos (left-aligned with inline-block)
- Serial number display (theme-aware)
- Buttons and controls (theme-aware with keyboard-active states)
- Credits and attribution cards (theme-aware)
- Status bar with group/theme toggles
- Bold styling for labels and titles

### Effects
**animations.css**
- Color shift animation for logo (uses CSS variables)
- Pulse animation for subtitle
- Ripple effect for logo on click

**responsive.css**
- Tablet breakpoint (768px)
- Mobile breakpoint (480px)

## JavaScript Architecture

### Core
**utils.js**
- `DOMUtils`: Helper functions for DOM manipulation
- Methods: `getById`, `setText`, `setHTML`, `setCSSVars`, `centerText`

**main.js**
- Application initialization on DOM ready
- Sets CSS variables from config
- Initializes all components in correct order
- Coordinates dependencies between modules
- Logo click animation setup

### Configuration
**constants.js**
- `APP_STRINGS`: All visible text and UI strings
- `APP_CONFIG`: Configuration values (volumes, speeds, padding, spacing)
- Centralized string management for easy customization

**themes.js**
- `THEMES`: Color definitions for all 8 themes
- `DEFAULT_THEME`: Default theme name
- Available themes: Midnight Aurora, Forest Trails, Tropical Paradise, Desert Sunset, Phoenix Fire, Deep Ocean, Peach Blossom, Neon Nights

**groups.js**
- `GROUPS`: Array of 5 warez groups with name, slogan, ASCII art, and unique members
- Each group includes complete ASCII logo using DOS Rebel font style with ░ characters
- Logos: ORION, DEVIANCE, RAZOR_1911, SKIDROW, FAIRLIGHT

### State Management
**themeManager.js** (`ThemeManager`)
- Apply theme by setting CSS custom properties
- Cycle through available themes
- Persist theme selection to localStorage
- Update theme button text

**groupRotator.js** (`GroupRotator`)
- Cycle through warez groups
- Generate dynamic titles and subtitles from group data
- Update window title, group credits, and ASCII logo
- Handle group switching button

### UI Components
**uiBuilder.js** (`UIBuilder`)
- Populate UI elements from APP_STRINGS
- Build dynamic content (credits, attribution, disclaimer)
- Initialize on DOM ready

**starfield.js** (`Star`, `Starfield`)
- Canvas initialization and resizing
- Star movement and rendering with depth effect
- Animation loop management

**musicPlayer.js** (`MusicPlayer`)
- Audio element control
- Play/pause toggle
- UI button state management

**serialGenerator.js** (`SerialGenerator`)
- Random serial key generation
- Cycling animation effect
- Key counter tracking

**ageGate.js** (`AgeGate`)
- Age verification overlay on first visit
- Stores verification state in localStorage
- Windows 95-style dialog with theme integration
- Correct/incorrect answer handling

**keyboard.js** (`KeyboardController`)
- Handle keyboard shortcuts
- Flash button visual feedback with theme colors
- Navigate groups (Up/Down) and themes (Left/Right)
- Generate keys (Space)

### Debug
**logger.js** (`ConsoleLogger`)
- ASCII banner generation
- Console output formatting
- Keygen info display

## Attributions

### Music
"Spell" by Rolemusic
- License: CC BY 4.0
- https://creativecommons.org/licenses/by/4.0/

### ASCII Art Font
[DOS Rebel](https://patorjk.com/software/taag/#p=display&f=DOS%20Rebel) by Rockford T. Rockford
- Generated using TAAG (Text to ASCII Art Generator)

## Development

The project is organized into logical modules that can be modified independently:

**Styles:**
- Theme colors: `styles/core/variables.css` and `scripts/config/themes.js`
- Layout: `styles/layout/window.css`, `styles/layout/components.css`, and `styles/layout/age-gate.css`
- Effects: `styles/effects/animations.css`

**Scripts:**
- Add new groups: `scripts/config/groups.js` (includes both group data and ASCII art)
- Add new themes: `scripts/config/themes.js`
- Adjust starfield: `scripts/ui/starfield.js`
- Modify keyboard controls: `scripts/ui/keyboard.js`
- Modify age gate: `scripts/ui/ageGate.js`
- Main initialization: `scripts/core/main.js`

**Configuration:**
- Text size, padding, spacing: `scripts/config/constants.js` (APP_CONFIG)
- All UI text: `scripts/config/constants.js` (APP_STRINGS)

## Browser Support

- Modern browsers with ES6 support
- Canvas API support required
- Audio API support required
- localStorage support for theme persistence
