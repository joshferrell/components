import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonVariant, ButtonSize } from './button';

storiesOf('Atoms/Button', module)
    .add('standard button ', () => (
        <Button m={3} variant={ButtonVariant.Primary} onClick={action('button-clicked')}>
            Button
        </Button>
    ))
    .add('different sizes', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button m={3} variant={ButtonVariant.Primary} onClick={action('button-clicked')}>
                Regular
            </Button>
            <Button m={3} variant={ButtonVariant.Primary} buttonSize={ButtonSize.Large} onClick={action('button-clicked')}>
                Large
            </Button>
        </div>
    ))
    .add('different variants', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button m={3} variant={ButtonVariant.Primary} onClick={action('button-clicked')}>
                Primary
            </Button>
            <Button m={3} variant={ButtonVariant.Secondary} onClick={action('button-clicked')}>
                Secondary
            </Button>
            <Button m={3} variant={ButtonVariant.Tertiary} onClick={action('button-clicked')}>
                Tertiary
            </Button>
            <Button m={3} variant={ButtonVariant.Warning} onClick={action('button-clicked')}>
                Warning
            </Button>
            <Button m={3} variant={ButtonVariant.Success} onClick={action('button-clicked')}>
                Success
            </Button>
            <Button m={3} variant={ButtonVariant.Danger} onClick={action('button-clicked')}>
                Danger
            </Button>
        </div>
    ));