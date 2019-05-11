import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, variant, width, display, borderRadius, boxShadow, BoxShadowProps, BorderRadiusProps, SpaceProps, WidthProps, DisplayProps } from 'styled-system';

import { hoverShadow } from '../../styles/utility';
import { BackgroundVariant, BoxVariant } from '../../lib/theme/variants';

type PropTypes = SpaceProps & DisplayProps & WidthProps & BoxShadowProps & BorderRadiusProps & {
    variant?: BackgroundVariant;
    onClick?: () => void;
    boxType?: BoxVariant;
    disabled?: boolean;
};

interface GetDepth {
    (shadow: number | Array<number>): number | Array<number>;
}

const outlineStyle = variant({ key: 'outlineStyles' });
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
    }  
`;

const baseStyle = css`
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
    ${props => props.onClick && hoverStyle};
    ${props => props.disabled && disabled};
`;

const BaseOutline = styled.div<PropTypes>`
    border: 1px solid;

    ${baseStyle};
    ${outlineStyle};
    ${props => props.onClick && hoverStyle};
    ${props => props.disabled && disabled};
`;

const Card: React.FC<PropTypes> = ({ boxType, ...props }) => (
    boxType === BoxVariant.Outline ? 
        <BaseOutline {...props} /> :
        <BaseFill {...props} />
);

Card.defaultProps = {
    p: 3,
    borderRadius: 4,
    display: 'inline-flex',
    variant: BackgroundVariant.Secondary,
    boxType: BoxVariant.Filled
}

export default Card;