import styled from 'styled-components';
import { height, space, buttonStyle, variant, HeightProps, SpaceProps } from 'styled-system';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
    Danger = 'danger',
    Success = 'success',
    Warning = 'warning'
}

export enum ButtonSize {
    Regular = 'regular',
    Large = 'large'
}

type ButtonStyles = HeightProps & SpaceProps & {
    variant?: ButtonVariant;
    buttonSize?: ButtonSize;
    isLarge?: boolean;
};

const buttonSize = variant({
    key: 'buttonSize',
    prop: 'buttonSize'
})

const Button = styled.button<ButtonStyles>`
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;

    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;

    border: none;
    border-radius: 0;

    cursor: pointer;
    
    transition: all .1s linear;

    ${height};
    ${buttonStyle};
    ${buttonSize};
    ${space};
`;

Button.defaultProps = {
    height: 32,
    buttonSize: ButtonSize.Regular,
    variant: ButtonVariant.Secondary,
    px: 3,
    py: 3
}

export default Button;