import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { fonts, fontSizes } from './font';
import colors from './colors';
import space from './space';
import backgroundStyles from './background';

export const GlobalStyle = createGlobalStyle`
    ${normalize};
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: ${fonts.primary};
	}
	::selection {
		background: rgba(0, 122, 255, .4);
    }
    
    body {
        font-family: ${fonts.primary};
        text-rendering: optimizeLegibility;
        font-feature-settings: none;
        font-variant-ligatures: none;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: .7px;
    }
`;

// TODO: use colors for shadow colors

export const theme = {
    fonts,
    fontSizes,
    space,
    colors,
    lineHeights: [1, 1.125, 1.25, 1.5, 1.75],
    shadows: [
        'none',
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    ],
    chipSize: {
        'extra-large': {
            fontSize: '24px',
            height: '64px',
            padding: '0 24px'
        },
        large: {
            fontSize: '20px',
            height: '32px',
            padding: '0 16px'
        },
        regular: {
            fontSize: '16px',
            height: '32px',
            padding: '0 16px'
        },
        small: {
            fontSize: '14px',
            height: '24px',
            padding: '0 8px'
        }
    },
    buttonSize: {
        'extra-large': {
            fontSize: '32px',
            height: '128px',
            paddingLeft: '64px',
            paddingRight: '64px'
        },
        large: {
            fontSize: '20px',
            height: '64px',
            paddingLeft: '24px',
            paddingRight: '24px'
        },
        regular: {
            fontSize: '14px',
            height: '48px',
            paddingLeft: '16px',
            paddingRight: '16px'
        },
        small: {
            fontSize: '14px',
            height: '32px',
            paddingLeft: '16px',
            paddingRight: '16px'
        }
    },
    linkSize: {
        large: {
            fontSize: '20px'
        },
        regular: {
            fontSize: '14px'
        }
    },
    ...backgroundStyles
}