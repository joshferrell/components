import * as React from 'react';
import { HeightProps, SpaceProps } from 'styled-system';
import { BackgroundVariant, SizeVariant } from '../../lib/theme/variants';
import { FontTypes } from '../../lib/theme/fonts';

export enum ButtonType {
    Outline = 'outline',
    NoBorder = 'no-border',
    Filled = 'filled',
    Link = 'link'
}

export type ButtonProps = HeightProps & SpaceProps & React.HTMLProps<HTMLButtonElement | HTMLLinkElement> & {
    variant?: BackgroundVariant;
    fontFamily?: FontTypes;
    buttonSize?: SizeVariant;
    rounded?: boolean;
};

export type Base = ButtonProps & { buttonType?: ButtonType };
type ButtonInfo = React.HTMLProps<HTMLButtonElement> & Base;
type LinkInfo = React.HTMLProps<HTMLLinkElement> & Base;

export type PropTypes = ButtonInfo | LinkInfo;

export const isLink = (property: PropTypes): property is LinkInfo => ((property as LinkInfo).href !== undefined);
export const isButton = (property: PropTypes): property is ButtonInfo => ((property as ButtonInfo).onClick !== undefined);