import * as React from 'react';
import styled, { css } from 'styled-components';
import { height, space, variant, fontFamily } from 'styled-system';

import { ButtonProps, ButtonType, PropTypes, isLink } from '../../lib/atoms/button';
import { BackgroundVariant, SizeVariant } from '../../lib/theme/variants';

const buttonSize = variant({
    key: 'buttonSize',
    prop: 'buttonSize'
})

const outlineStyle = variant({ key: 'outlineStyles' });
const outlineStyleHover = variant({ key: 'outlineStylesHover' });

const fillStyle = variant({ key: 'solidStyles' });
const fillStyleHover = variant({ key: 'solidStylesHover' });

const linkStyle = variant({ key: 'linkStyles' });
const linkStyleHover = variant({ key: 'linkStylesHover' });

const baseStyle = css<{ rounded?: boolean }>`
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;

    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;

    border-radius: 0;

    cursor: pointer;
    
    transition: all .1s linear;

    ${({ rounded }) => rounded && 'border-radius: 4px'};

    ${height};
    ${fontFamily};
    ${buttonSize};
    ${space};
`;

const BaseLink = styled.div<ButtonProps>`
    background-color: transparent;
    border: none;

    ${baseStyle};   
    ${linkStyle};
    ${linkStyleHover};

    padding: 0;
    height: auto;
`;

const BaseOutline = styled.div<ButtonProps & { border: boolean }>`
    border: ${props => props.border ? '2px solid' : 'none'};
    background-color: transparent;

    ${outlineStyle};
    ${outlineStyleHover};
    ${baseStyle};
`;

const BaseButton = styled.div<ButtonProps>`
    border: none;

    ${fillStyle};
    ${fillStyleHover};
    ${baseStyle};
`;

const Button: React.FC<PropTypes> = React.forwardRef(({ buttonType, ...props }, ref) => {
    const type = isLink(props) ? 'a' : 'button';

    switch (buttonType) {
        case ButtonType.Outline:
            return <BaseOutline {...props} ref={ref} border as={type} />;
        case ButtonType.NoBorder:
            return <BaseOutline {...props} ref={ref} border={false} as={type} />;
        case ButtonType.Link:
            return <BaseLink {...props} ref={ref} as={type} />;
        default:
            return <BaseButton {...props} ref={ref} as={type} />;
    } 
});

Button.defaultProps = {
    height: 32,
    buttonSize: SizeVariant.Regular,
    variant: BackgroundVariant.Primary,
    buttonType: ButtonType.Filled,
    fontFamily: 'sans'
}

export default Button;