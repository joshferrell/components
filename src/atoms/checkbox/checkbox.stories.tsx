import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from './checkbox';

storiesOf('Atoms/Checkbox', module)
    .add('simple checkbox', () => (
        <Checkbox />
    ));