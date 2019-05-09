import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowButton from './arrow-button';
import { ButtonType } from '../../lib/atoms/button';
import { BackgroundVariant, SizeVariant } from '../../lib/theme/variants';

storiesOf('Atoms/Button/Arrow Button', module)
    .add('standard button ', () => (
        <ArrowButton m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
            Button
        </ArrowButton>
    ))
    .add('as link', () => (
        <ArrowButton m={3} variant={BackgroundVariant.Primary} href="http://example.com">
            Button Link
        </ArrowButton>
    ))
    .add('with ref', () => {
        const ref = React.createRef<HTMLButtonElement>();

        return (
            <div>
                <button onClick={() => ref.current && ref.current.focus()}>Focus Button</button>
                <ArrowButton onClick={action('test')} ref={ref}>Test</ArrowButton>
            </div>   
        )
    })
    .add('different sizes', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Small} onClick={action('button-clicked')}>
                    Small Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Regular Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.Large} onClick={action('button-clicked')}>
                    Large Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} buttonSize={SizeVariant.ExtraLarge} onClick={action('button-clicked')}>
                    Extra Large Link
                </ArrowButton>
            </div>
        </div>
    ))
    .add('different variants', () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Primary} onClick={action('button-clicked')}>
                    Primary Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Secondary} onClick={action('button-clicked')}>
                    Secondary Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Tertiary} onClick={action('button-clicked')}>
                    Tertiary Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Warning} onClick={action('button-clicked')}>
                    Warning Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Success} onClick={action('button-clicked')}>
                    Success Link
                </ArrowButton>
            </div>
            <div>
                <ArrowButton m={3} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Outline} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger Outline
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.NoBorder} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger No Border
                </ArrowButton>
                <ArrowButton m={3} buttonType={ButtonType.Link} variant={BackgroundVariant.Danger} onClick={action('button-clicked')}>
                    Danger Link
                </ArrowButton>
            </div>
        </div>
    ));