import React, {
    InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';
import { Text } from '../Text';

import cl from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
export type StatusInput = 'successStatus' | 'errorStatus';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    status?: StatusInput;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readOnly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        status = 'successStatus',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cl.readonly]: readOnly,
        [cl.focused]: isFocused,
        [cl.withAddonLeft]: Boolean(addonLeft),
        [cl.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div className={classNames(cl.InputWrapper, mods, [className, cl[size], cl[status]])}>
            <div className={cl.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cl.input}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={cl.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});
