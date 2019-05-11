import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SizeVariant, BackgroundVariant, BoxVariant } from '../../lib/theme/variants';
import { IconSize, IconTypes } from '../../lib/atoms/icon';
import Chip from './chip';
import Icon from '../icon';

storiesOf('Atoms/Chip', module)
    .add('simple chip', () => (
        <Chip>Simple chip</Chip>
    ))
    .add('click event', () => (
        <Chip onClick={action('clicked')}>Chip with onClick</Chip>
    ))
    .add('disabled', () => (
        <Chip disabled>Test</Chip>
    ))
    .add('different sizes', () => (
        <div>
            <Chip m={2} size={SizeVariant.ExtraLarge}>Extra Large</Chip>
            <Chip m={2} size={SizeVariant.Large}>Large</Chip>
            <Chip m={2} size={SizeVariant.Regular}>Regular</Chip>
            <Chip m={2} size={SizeVariant.Small}>Small</Chip>
        </div>
    ))
    .add('different variants', () => (
        <div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Primary}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Primary} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Secondary}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Secondary} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Tertiary}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Tertiary} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Warning}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Warning} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Success}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Success} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
            <div>
                <Chip m={2} variant={BackgroundVariant.Danger}>Primary Filled</Chip>
                <Chip m={2} variant={BackgroundVariant.Danger} boxType={BoxVariant.Outline}>Primary Outline</Chip>
            </div>
        </div>
    ))
    .add('simple badge', () => (
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src="http://fillmurray.com/32/32" width="32" height="32" style={{ borderRadius: '100%', marginRight: '-20px', zIndex: 1, position: 'relative' }} />
            <Chip pl="32px !important" size={SizeVariant.Large}>John Doe<Icon pl={2} size={IconSize.sm} type={IconTypes.ARROW_RIGHT} /></Chip>
        </div>
    ))
    .add('with icon', () => (
        <div>
            <Chip m={2} size={SizeVariant.Large}>Large<Icon pl={1} size={IconSize.sm} type={IconTypes.CLOSE} /></Chip>
            <Chip m={2} size={SizeVariant.Regular}>Test<Icon pl={1} size={IconSize.sm} type={IconTypes.CLOSE} /></Chip>
            <Chip m={2} size={SizeVariant.Small}>Test<Icon pl={1} size={IconSize.sm} type={IconTypes.CLOSE} /></Chip>
        </div>
    ))
    