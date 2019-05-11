import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './card';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/Card', module)
    .add('simple card', () => (
        <Card width={500} m={5}>test</Card>
    ))
    .add('card with shadow', () => (
        <Card width={500} boxShadow={2} m={5}>test</Card>
    ))
    .add('clickable card', () => (
        <Card onClick={action('clicked-card')} boxShadow={1} width={500} m={5}>test</Card>
    ))