import * as React from 'react';
import styled from 'styled-components';
import { height, width, color, space, SpaceProps, ColorProps, HeightProps, WidthProps } from 'styled-system';

const sprite = require('./sprite.svg');

type SVGProps = SpaceProps & ColorProps & HeightProps & WidthProps & {
    rotate?: number;
}

const SVGWrapper = styled.svg<SVGProps>`
    ${width};
    ${height};
    ${color};
    ${space};

    rotate: ${props => props.rotate || 0};
`;

const Icon = ({ type, size, rotate, color }) => {
    const url = `${sprite}#${type}`;

    return (
        <SVGWrapper width={size} height={size} rotate={rotate} color={color}>
            <use xlinkHref={url} />
        </SVGWrapper>
    );
}

export default Icon;