import React from 'react';

import { storiesOf } from '@storybook/react';

import { SizeVariant } from '../../lib/theme/variants';
import ProfileImage from './profile-image';

storiesOf('Atoms/Profile Image', module)
    .add('profile image', () => (
        <ProfileImage src="http://fillmurray.com/100/100" m={3} />
    ))
    .add('size variants', () => (
        <div>
            <ProfileImage src="http://fillmurray.com/100/100" m={3} size={SizeVariant.Small} />
            <ProfileImage src="http://fillmurray.com/100/100" m={3} size={SizeVariant.Regular} />
            <ProfileImage src="http://fillmurray.com/100/100" m={3} size={SizeVariant.Large} />
            <ProfileImage src="http://fillmurray.com/100/100" m={3} size={SizeVariant.ExtraLarge} />
        </div>
    ))