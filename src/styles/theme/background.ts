import colors from './colors';

type ColorType = 'main' | 'secondary' | 'tertiary' | 'highlight' | 'success' | 'danger' | 'warning';

const getSolidStyle = (value: ColorType) => ({
    color: colors[value].dark2,
    backgroundColor: colors[value].l7,
    '& svg': {
        color: colors[value].l1
    }
});

const getSolidStyleHover = (value: ColorType) => ({
    '&:hover, &:focus': {
        backgroundColor: colors[value].l6
    },
    '&:focus': {
        boxShadow: `0px 0px 0px 3px ${colors[value].l3}`,
        outline: 'none',
    }
});

const getOutlineStyle = (value: ColorType) => ({
    color: colors[value].dark2,
    borderColor: colors[value].l6,
    '& svg': {
        color: colors[value].l1
    }
});

const getOutlineStyleHover = (value: ColorType) => ({
    '&:hover, &:focus': {
        backgroundColor: colors[value].l7
    },
    '&:focus': {
        outline: 'none',
        borderColor: colors[value].l4
    }
});

const getLinkStyle = (value: ColorType) => ({
    color: colors[value].primary,
    '& svg': {
        color: colors[value].l2
    }
});

const getLinkStyleHover = (value: ColorType) => ({
    '&:hover, &:focus': {
        color: colors[value].l1,
        textDecoration: 'underline',
    },
    '&:focus': {
        outline: 'none'
    }
})

const solidStyles = {
    primary: {
        color: colors.text.negative,
        backgroundColor: colors.main.primary,
        '& svg': {
            color: colors.main.l5
        }
    },
    secondary: Object.assign({}, getSolidStyle('main'), {
        '& svg': {
            color: colors.secondary.l1
        }
    }),
    tertiary: getSolidStyle('secondary'),
    danger: getSolidStyle('danger'),
    warning: getSolidStyle('warning'),
    success: getSolidStyle('success')
};

const solidStylesHover = {
    primary: {
        '&:hover, &:focus': {
            backgroundColor: colors.main.l1
        },
        '&:focus': {
            boxShadow: `0px 0px 0px 3px ${colors.secondary.l3}`,
            outline: 'none'
        }
    },
    secondary: getSolidStyleHover('main'),
    tertiary: getSolidStyleHover('secondary'),
    danger: getSolidStyleHover('danger'),
    warning: getSolidStyleHover('warning'),
    success: getSolidStyleHover('success')
}

const outlineStyles = {
    primary: {
        color: colors.text.positive,
        borderColor: colors.main.primary,
        '& svg': {
            color: colors.secondary.primary
        }
    },
    secondary: Object.assign({}, getOutlineStyle('main'), {
        '& svg': {
            color: colors.secondary.l1
        }
    }),
    tertiary: getOutlineStyle('secondary'),
    danger: getOutlineStyle('danger'),
    warning: getOutlineStyle('warning'),
    success: getOutlineStyle('success')
};

const outlineStylesHover = {
    primary: {
        '&:hover, &:focus': {
            backgroundColor: colors.main.l7
        },
        '&:focus': {
            borderColor: colors.secondary.l3,
            outline: 'none'
        }
    },
    secondary: getOutlineStyleHover('main'),
    tertiary: getOutlineStyleHover('secondary'),
    danger: getOutlineStyleHover('danger'),
    warning: getOutlineStyleHover('warning'),
    success: getOutlineStyleHover('success')
}

const linkStyles = {
    primary: getLinkStyle('main'),
    secondary: getLinkStyle('secondary'),
    tertiary: getLinkStyle('tertiary'),
    danger: getLinkStyle('danger'),
    success: getLinkStyle('success'),
    warning: getLinkStyle('warning')
}

const linkStylesHover = {
    primary: getLinkStyleHover('main'),
    secondary: getLinkStyleHover('secondary'),
    tertiary: getLinkStyleHover('tertiary'),
    danger: getLinkStyleHover('danger'),
    success: getLinkStyleHover('success'),
    warning: getLinkStyleHover('warning')
}

const backgroundStyles = {
    solidStyles,
    solidStylesHover,
    outlineStyles,
    outlineStylesHover,
    linkStyles,
    linkStylesHover
};

export default backgroundStyles;