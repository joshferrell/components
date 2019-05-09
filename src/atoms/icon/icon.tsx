import * as React from 'react';
import styled from 'styled-components';
import { height, width, color, space } from 'styled-system';

import { IconSize, SVGProps, IconProps } from '../../lib/atoms/icon';

const sprite = require('./sprite.svg');

const SVGWrapper = styled.svg<SVGProps>`
    ${width};
    ${height};
    ${color};
    ${space};

    rotate: ${props => props.rotate || 0};
`;

const Icon = ({ type, size, title, ...props }: IconProps) => {
    const url = `${sprite}#${type}`;

    return (
        // @ts-ignore
        <SVGWrapper width={size} height={size} {...props}>
            {title && (
                <title>{title}</title>
            )}
            <use xlinkHref={url} />
        </SVGWrapper>
    );
};

Icon.defaultProps = {
    size: IconSize.sm
}

export default Icon;