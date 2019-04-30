import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { fonts } from './font';
import colors from './colors';
import space from './space';

export const GlobalStyle = createGlobalStyle`
    ${normalize};
    font-family: ${fonts.sans};
	text-rendering: optimizeLegibility;
	font-feature-settings: none;
	font-variant-ligatures: none;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: ${fonts.sans};
	}
	::selection {
		background: rgba(0, 122, 255, .4);
	}
`;

// TODO: use colors for shadow colors

export const theme = {
    fonts,
    space,
    colors,
    lineHeights: [1, 1.125, 1.25, 1.5, 1.75],
    shadows: [
		'none',
		'rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px',
		'0 0 16px rgba(0, 0, 0, 0.1)',
		'0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)'
    ],
    buttonSize: {
        large: {
            fontSize: '20px',
            height: '64px'
        },
        regular: {
            fontSize: '14px',
            height: '48px'
        }
    },
    buttons: {
        primary: {
            color: colors.text.negative,
            backgroundColor: colors.main.primary,
            '& svg': {
                color: colors.main.l5
            },
            '&:hover': {
                backgroundColor: colors.main.l1
            }
        },
        secondary: {
            color: colors.main.dark2,
            backgroundColor: colors.main.l6,
            '& svg': {
                color: colors.main.l1
            },
            '&:hover': {
                backgroundColor: colors.main.l5
            }
        },
        tertiary: {
            color: colors.tertiary.dark2,
            backgroundColor: colors.tertiary.l6,
            '& svg': {
                color: colors.tertiary.l2
            },
            '&:hover': {
                backgroundColor: colors.tertiary.l5
            }
        },
        danger: {
            color: colors.danger.dark2,
            backgroundColor: colors.danger.l6,
            '& svg': {
                color: colors.danger.l3
            },
            '&:hover': {
                backgroundColor: colors.danger.l5
            }
        },
        warning: {
            color: colors.warning.dark2,
            backgroundColor: colors.warning.l6,
            '& svg': {
                color: colors.warning.l3
            },
            '&:hover': {
                backgroundColor: colors.warning.l5
            }
        },
        success: {
            color: colors.success.dark2,
            backgroundColor: colors.success.l6,
            '& svg': {
                color: colors.success.l3
            },
            '&:hover': {
                backgroundColor: colors.success.l5
            }
        }
    }
}