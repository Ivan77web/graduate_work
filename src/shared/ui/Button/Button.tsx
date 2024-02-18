import {
    ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export type ButtonVariants = 'clear' | 'outline' | 'filled';
export type ButtonBorderRadius = 'minBorder' | 'maxBorder';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    borderRadius?: ButtonBorderRadius;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        variant = 'outline',
        size = 'm',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        borderRadius = 'minBorder',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.disabled]: disabled,
        [cl.fullWidth]: fullWidth,
        [cl.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cl.Button, mods, [className, cl[variant], cl[size], cl[borderRadius]])}
            disabled={disabled}
            {...otherProps}
            ref={ref}
        >
            <div className={cl.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cl.addonRight}>{addonRight}</div>
        </button>
    );
});
