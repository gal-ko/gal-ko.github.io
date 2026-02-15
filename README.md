# Keygen Homage - 90s Warez Scene Tribute

A nostalgic 90s-style keygen interface paying homage to the warez scene era. 

Features Windows 95 aesthetic, chiptune music, starfield animation, and authentic ASCII art.

Try it live here: https://gal-ko.github.io/

<img width="70%" alt="image" src="https://github.com/user-attachments/assets/516aadce-141a-4c4e-8b0e-c82780be59f9" />

## Features

- **Age Gate**: Nostalgic age verification dialog with Windows 95 styling
- **Multiple Warez Groups**: Rotate through 5 legendary groups (DEViANCE, ORION, RAZOR 1911, SKIDROW, FAiRLiGHT)
- **Theme Switcher**: Rotate through 5 color themes (Sub-Zero, Cyberpunk, Unicorn, Stargazing, Venice Beach)
- **Authentic ASCII Art**: DOS Rebel font style logos for each group
- **Keyboard Controls**:
  - Space: Generate serial key
  - Up/Down arrows: Switch between groups
  - Left/Right arrows: Switch between themes
- **Starfield Animation**: Moving stars background effect
- **Chiptune Music**: Royalty-free music with CC BY 4.0 attribution
- **Serial Generator**: Random key generation with cycling animation
- **Mobile Responsive**: Works on tablets and phones

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
