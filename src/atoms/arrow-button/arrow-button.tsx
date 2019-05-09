import * as React from 'react';

import { IconTypes, IconSize } from '../../lib/atoms/icon';
import { ButtonProps, ButtonType } from '../../lib/atoms/button';
import { SizeVariant } from '../../lib/theme/variants';

import Button from '../button';
import Icon from '../icon';

// @ts-ignore
const ArrowButton: React.FC<ButtonProps & { buttonType?: ButtonType }> = React.forwardRef(({ children, ...props }: ButtonProps, ref: any) => {
    const extraLarge = {
        size: IconSize.lg,
        ml: 4
    };

    const large = {
        size: IconSize.md,
        ml: 3
    };

    const small = {
        size: IconSize.sm,
        ml: 2
    };

    const iconProps = props.buttonSize === SizeVariant.ExtraLarge ? 
        extraLarge : props.buttonSize === SizeVariant.Large ? 
        large : small;

    return (
        <Button ref={ref} {...props}>
            {children}
            <Icon type={IconTypes.ARROW_RIGHT} {...iconProps} />
        </Button>
    );
});

export default ArrowButton;