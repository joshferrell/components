import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, variant, SpaceProps } from 'styled-system';

import { BackgroundVariant, SizeVariant } from '../../lib/theme/variants';
import { isButton } from '../../lib/atoms/button';
import { ChipTypes } from '../../lib/atoms/chip';

type PropTypes = SpaceProps & {
    size?: SizeVariant;
    variant?: BackgroundVariant;
    onClick?: () => void;
    chipType?: ChipTypes;
    disabled?: boolean;
}

const chipSize = variant({
    prop: 'size',
    key: 'chipSize'
});

const outlineStyle = variant({ key: 'outlineStyles' });
const outlineStyleHover = variant({ key: 'outlineStylesHover' });
const fillStyle = variant({ key: 'solidStyles' });
const fillStyleHover = variant({ key: 'solidStylesHover' });

const disabled = css`
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.main.l7};
    color: ${props => props.theme.colors.main.l1};

    &:hover {
        background-color: ${props => props.theme.colors.main.l7};
    }
`;

const baseStyle = css`
    display: inline-flex;
    align-items: center;
    border-radius: 500px;
    font-weight: 500;

    ${space};
    ${chipSize};
`;

const BaseFill = styled.div<PropTypes>`
    border: none;

    ${baseStyle};
    ${fillStyle};
    ${props => props.disabled && disabled};
    ${props => props.onClick && css`
        cursor: pointer;
        ${fillStyleHover};
    `};
`;

const BaseOutline = styled.div<PropTypes>`
    border: 1px solid;

    ${baseStyle};
    ${outlineStyle};
    ${props => props.disabled && disabled};
    ${props => props.onClick && css`
        cursor: pointer;
        ${outlineStyleHover};
    `};
`;

const Chip: React.FC<PropTypes> = React.forwardRef(({ chipType, ...props }, ref) => {
    const type = isButton(props) ? 'button' : 'div';

    switch (chipType) {
        case ChipTypes.Outline:
            return <BaseOutline {...props} ref={ref} as={type} />;
        default:
            return <BaseFill {...props} ref={ref} as={type} />;
    }
})

Chip.defaultProps = {
    variant: BackgroundVariant.Secondary,
    size: SizeVariant.Regular,
    chipType: ChipTypes.Filled,
    pl: 2,
    pr: 2
}

export default Chip;