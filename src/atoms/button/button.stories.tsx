import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';
import { ButtonType } from '../../lib/atoms/button';
import { BackgroundVariant, SizeVariant } from '../../lib/theme/variants';

storiesOf('Atoms/Button/Base', module)
    .add('standard button ', () => (
        <Button m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
            Button
        </Button>
    ))
    .add('as link', () => (
        <Button m={3} variant={BackgroundVariant.Primary} href="http://example.com">
            Button Link
        </Button>
    ))
    .add('with ref', () => {
        const ref = React.createRef<HTMLButtonElement>();

        return (
            <div style={{ margin: '16px' }}>
                <button onClick={() => ref.current && ref.current.focus()}>Focus Button</button>
                <Button onClick={action('test')} ref={ref}>Test</Button>
            </div>   
        )
    })
    .add('rounded', () => (
        <Button m={3} rounded={true}>
            Rounded Button
        </Button>
    ))
    .add('different sizes', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                <Button m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large Link
                </Button>
            </div>
        </div>
    ))
    .add('different variants', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                <Button m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success Link
                </Button>
            </div>
            <div>
                <Button m={3} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger
                </Button>
                <Button m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger Outline
                </Button>
                <Button m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger No Border
                </Button>
                <Button m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger Link
                </Button>
            </div>
        </div>
    ));