import { SpaceProps, ColorProps, HeightProps, WidthProps } from 'styled-system';

export enum IconTypes {
    BOOK = 'icon-book',
    ARROW_RIGHT = 'icon-arrow-right',
    PHONE = 'icon-phone',
    CROWD = 'icon-crowd',
    CLOSE = 'icon-close',
    OFFICE = 'icon-office'
}

export enum IconSize {
    xs = '8px',
    sm = '16px',
    md = '24px',
    lg = '32px',
    xl = '64px'
};

export type SVGProps = SpaceProps & ColorProps & HeightProps & WidthProps & {
    rotate?: number;
}

export type IconProps = SpaceProps & ColorProps & {
    rotate?: number;
    type: IconTypes;
    size?: IconSize;
    title?: string;
}
