import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, variant, width, display, borderRadius, boxShadow, BoxShadowProps, BorderRadiusProps, SpaceProps, WidthProps, DisplayProps } from 'styled-system';

import { hoverShadow } from '../../styles/utility';
import { BackgroundVariant, BoxVariant } from '../../lib/theme/variants';
import { isButton } from '../../lib/atoms/button';

type PropTypes = SpaceProps & DisplayProps & WidthProps & BoxShadowProps & BorderRadiusProps & {
    variant?: BackgroundVariant;
    onClick?: () => void;
    allowHover?: boolean;
    boxType?: BoxVariant;
    disabled?: boolean;
};

const outlineStyle = variant({ key: 'outlineStyles' });
const fillHoverStyle = variant({ key: 'solidStylesHover' });
const fillStyle = variant({ key: 'solidStyles' });

const disabled = css`
    cursor: not-allowed;
    box-shadow: none;

    &:hover, &:focus {
        box-shadow: none;
    }
`;

const hoverStyle = css<PropTypes>`
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover, &:focus {
        ${hoverShadow};
        ${fillHoverStyle};
        outline: none;
    }  
`;

const baseStyle = css`
    text-align: left;
    box-sizing: border-box;

    ${borderRadius};
    ${display};
    ${width};
    ${boxShadow};
    ${space};
`;

const BaseFill = styled.div<PropTypes>`
    border: none;

    ${baseStyle};
    ${fillStyle};
    ${props => (props.onClick || props.allowHover) && hoverStyle};
    ${props => props.disabled && disabled};
`;

const BaseOutline = styled.div<PropTypes>`
    border: 1px solid;

    ${baseStyle};
    ${outlineStyle};
    ${props => (props.onClick || props.allowHover) && hoverStyle};
    ${props => props.disabled && disabled};
`;

// @ts-ignore
const Card: React.FC<PropTypes> = React.forwardRef(({ boxType, ...props }, ref) => {
    const type = isButton(props) ? 'button' : 'div';

    return boxType === BoxVariant.Outline ?
        // @ts-ignore
        <BaseOutline {...props} as={type} ref={ref} /> :
        // @ts-ignore
        <BaseFill {...props} as={type} ref={ref} />;
});

Card.defaultProps = {
    p: 3,
    width: '100%',
    borderRadius: 4,
    display: 'inline-flex',
    variant: BackgroundVariant.Secondary,
    boxType: BoxVariant.Filled
}

export default Card;