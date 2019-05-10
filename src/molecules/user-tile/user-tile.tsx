import * as React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ChipTypes } from '../../lib/atoms/chip';
import { SizeVariant, BackgroundVariant } from '../../lib/theme/variants';

import Chip from '../../atoms/chip';
import ProfileImage from '../../atoms/profile-image';

type PropTypes = SpaceProps & {
    name: string;
    imageSrc: string;
    chipType?: ChipTypes;
    variant?: BackgroundVariant;
    children?: JSX.Element | JSX.Element[];
}

const Box = styled.div<SpaceProps>`
    display: inline-flex;
    align-items: center;
    ${space};
`;

const UserTile: React.FC<PropTypes> = ({ name, chipType, imageSrc, children, variant, ...rest }) => (
    <Box {...rest}>
        <ProfileImage src={imageSrc} alt={name} mr={-31} style={{ zIndex: 1, position: 'relative' }} />
        <Chip chipType={chipType} pl="40px !important" variant={variant} size={SizeVariant.Large}>{name}{children && children}</Chip>
    </Box>
);

UserTile.defaultProps = {
    variant: BackgroundVariant.Secondary,
    chipType: ChipTypes.Filled
}

export default UserTile;