/**
 * Theme definitions
 */

const THEMES = {
    sub_zero: {
        name: 'Sub-Zero',
        colors: {
            primary: '#00bfff',       // Deep sky blue
            secondary: '#48d1cc',     // Medium turquoise
            tertiary: '#f0e68c',      // Khaki/sand
            accent: '#87cefa',        // Light sky blue
            background: '#0a0f1a',    // Very dark blue
            text: '#e6f3ff',          // Light blue

            primaryGlow: 'rgba(0, 191, 255, 0.5)',
            secondaryGlow: 'rgba(72, 209, 204, 0.5)',
            tertiaryGlow: 'rgba(240, 230, 140, 0.5)',
            accentGlow: 'rgba(135, 206, 250, 0.5)',

            primaryBg: 'rgba(10, 20, 35, 0.9)',
            secondaryBg: 'rgba(10, 25, 40, 0.9)',
            tertiaryBg: 'rgba(15, 30, 45, 0.9)',

            titleBarStart: '#1e3a5f',
            titleBarEnd: '#2e5a8f'
        }
    },

    cyberpunk: {
        name: 'Cyberpunk',
        colors: {
            primary: '#ff6347',       // Tomato red
            secondary: '#ffa500',     // Orange
            tertiary: '#ffd700',      // Gold
            accent: '#da70d6',        // Orchid purple
            background: '#150a0a',    // Very dark red
            text: '#fff5ee',          // Seashell

            primaryGlow: 'rgba(255, 99, 71, 0.5)',
            secondaryGlow: 'rgba(255, 165, 0, 0.5)',
            tertiaryGlow: 'rgba(255, 215, 0, 0.5)',
            accentGlow: 'rgba(218, 112, 214, 0.5)',

            primaryBg: 'rgba(30, 10, 10, 0.9)',
            secondaryBg: 'rgba(35, 15, 10, 0.9)',
            tertiaryBg: 'rgba(40, 20, 10, 0.9)',

            titleBarStart: '#4a2c5c',
            titleBarEnd: '#7b4397'
        }
    },

    unicorn: {
        name: 'Unicorn',
        colors: {
            primary: '#ff1493',       // Deep pink
            secondary: '#ff69b4',     // Hot pink
            tertiary: '#ff6347',      // Tomato/coral
            accent: '#da70d6',        // Orchid violet
            background: '#0a0015',    // Very dark purple
            text: '#ffe4ff',          // Light pink

            primaryGlow: 'rgba(255, 20, 147, 0.5)',
            secondaryGlow: 'rgba(255, 105, 180, 0.5)',
            tertiaryGlow: 'rgba(255, 99, 71, 0.5)',
            accentGlow: 'rgba(218, 112, 214, 0.5)',

            primaryBg: 'rgba(20, 5, 30, 0.9)',
            secondaryBg: 'rgba(25, 10, 35, 0.9)',
            tertiaryBg: 'rgba(30, 15, 40, 0.9)',

            titleBarStart: '#4b0082',
            titleBarEnd: '#8b008b'
        }
    },

    stargazing: {
        name: 'Stargazing',
        colors: {
            primary: '#9d4edd',       // Deep purple
            secondary: '#5b8dee',     // Blue
            tertiary: '#00ffff',      // Cyan
            accent: '#ffd60a',        // Yellow
            background: '#0a0a15',    // Very dark
            text: '#e6e6fa',          // Lavender

            primaryGlow: 'rgba(157, 78, 221, 0.5)',
            secondaryGlow: 'rgba(91, 141, 238, 0.5)',
            tertiaryGlow: 'rgba(0, 255, 255, 0.5)',
            accentGlow: 'rgba(255, 214, 10, 0.5)',

            primaryBg: 'rgba(15, 10, 25, 0.9)',
            secondaryBg: 'rgba(10, 15, 30, 0.9)',
            tertiaryBg: 'rgba(10, 20, 35, 0.9)',

            titleBarStart: '#4a148c',
            titleBarEnd: '#7b1fa2'
        }
    },

    venice_beach: {
        name: 'Venice Beach',
        colors: {
            primary: '#ff6b9d',       // Pink
            secondary: '#ff9966',     // Coral
            tertiary: '#ffd700',      // Gold
            accent: '#20b2aa',        // Teal
            background: '#0d0a15',    // Very dark
            text: '#fff0f5',          // Light pink

            primaryGlow: 'rgba(255, 107, 157, 0.5)',
            secondaryGlow: 'rgba(255, 153, 102, 0.5)',
            tertiaryGlow: 'rgba(255, 215, 0, 0.5)',
            accentGlow: 'rgba(32, 178, 170, 0.5)',

            primaryBg: 'rgba(20, 10, 25, 0.9)',
            secondaryBg: 'rgba(25, 15, 20, 0.9)',
            tertiaryBg: 'rgba(20, 20, 30, 0.9)',

            titleBarStart: '#d4477e',
            titleBarEnd: '#ff9966'
        }
    }
};

const DEFAULT_THEME = 'sub_zero';
