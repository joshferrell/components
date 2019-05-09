import * as React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { SizeVariant } from '../../lib/theme/variants';

type PropTypes = React.HTMLProps<HTMLImageElement> & SpaceProps & {
    size?: SizeVariant;
}

const size = {
    [SizeVariant.Small]: {
        width: '24px',
        height: '24px'
    },
    [SizeVariant.Regular]: {
        width: '32px',
        height: '32px'
    },
    [SizeVariant.Large]: {
        width: '64px',
        height: '64px'
    },
    [SizeVariant.ExtraLarge]: {
        width: '128px',
        height: '128px'
    }
};

const ProfileImage = styled.img<PropTypes>`
    border-radius: 100%;
    ${props => size[props.size]};
    ${space};
`;

ProfileImage.defaultProps = {
    size: SizeVariant.Regular
}

export default ProfileImage;