import React from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Icon from './icon';
import { IconTypes, IconSize } from './types';

storiesOf('Atoms/Icon', module)
    .add('primary', () => (
        <Icon type={IconTypes.ARROW_RIGHT} size={IconSize.lg} />
    ))