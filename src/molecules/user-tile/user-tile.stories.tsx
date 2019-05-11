import React from 'react';

import { storiesOf } from '@storybook/react';

import { BackgroundVariant, BoxVariant } from '../../lib/theme/variants';
import { IconSize, IconTypes } from '../../lib/atoms/icon';

import UserTile from './user-tile';
import Icon from '../../atoms/icon';

storiesOf('Molecules/User Tile', module)
    .add('simple user tile', () => (
        <UserTile m={3} name="John Doe" imageSrc="http://fillmurray.com/100/100" />
    ))
    .add('with icon', () => (
        <UserTile m={3} name="John Doe" imageSrc="http://fillmurray.com/100/100">
            <Icon pl={2} size={IconSize.sm} type={IconTypes.ARROW_RIGHT} />
        </UserTile>
    ))
    .add('variants', () => (
        <div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Primary} imageSrc="http://fillmurray.com/100/100" /> 
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Primary} imageSrc="http://fillmurray.com/100/100" /> 
            </div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Secondary} imageSrc="http://fillmurray.com/100/100" /> 
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Secondary} imageSrc="http://fillmurray.com/100/100" /> 
            </div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Tertiary} imageSrc="http://fillmurray.com/100/100" /> 
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Tertiary} imageSrc="http://fillmurray.com/100/100" /> 
            </div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Warning} imageSrc="http://fillmurray.com/100/100" />
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Warning} imageSrc="http://fillmurray.com/100/100" />
            </div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Success} imageSrc="http://fillmurray.com/100/100" />
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Success} imageSrc="http://fillmurray.com/100/100" />
            </div>
            <div>
                <UserTile m={3} name="John Doe" variant={BackgroundVariant.Danger} imageSrc="http://fillmurray.com/100/100" />
                <UserTile m={3} name="John Doe" boxType={BoxVariant.Outline} variant={BackgroundVariant.Danger} imageSrc="http://fillmurray.com/100/100" />
            </div>
        </div>
    ))
    