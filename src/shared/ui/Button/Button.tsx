import {
    ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export type ButtonVariants = 'clear' | 'outline_red' | 'filled_red' | 'filled_black';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        variant = 'clear',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
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
            className={classNames(cl.Button, mods, [className, cl[variant]])}
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
