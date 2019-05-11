import * as React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { SizeVariant, BackgroundVariant, BoxVariant } from '../../lib/theme/variants';

import Chip from '../../atoms/chip';
import ProfileImage from '../../atoms/profile-image';

type PropTypes = SpaceProps & {
    name: string;
    imageSrc: string;
    boxType?: BoxVariant;
    variant?: BackgroundVariant;
    children?: JSX.Element | JSX.Element[];
}

const Box = styled.div<SpaceProps>`
    display: inline-flex;
    align-items: center;
    ${space};
`;

const UserTile: React.FC<PropTypes> = ({ name, boxType, imageSrc, children, variant, ...rest }) => (
    <Box {...rest}>
        <ProfileImage src={imageSrc} alt={name} mr={-31} style={{ zIndex: 1, position: 'relative' }} />
        <Chip boxType={boxType} pl="40px !important" variant={variant} size={SizeVariant.Large}>{name}{children && children}</Chip>
    </Box>
);

UserTile.defaultProps = {
    variant: BackgroundVariant.Secondary,
    boxType: BoxVariant.Filled
}

export default UserTile;