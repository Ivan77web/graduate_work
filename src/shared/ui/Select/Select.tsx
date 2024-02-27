import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Arrow from '@/shared/assets/icons/arrow.svg';

import { Text } from '../Text';
import { HStack } from '../Stack';
import { Icon } from '../Icon';

import cl from './Select.module.scss';
import { Options } from './Options/Options';

interface SelectProps {
    className?: string;
    value: string | null;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
    isError?: boolean | null | string;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        options,
        isError = false,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [setIsOpen])

    const onClick = useCallback((value: string) => {
        setIsOpen(false);
        onChange(value);
    }, [setIsOpen])

    return (
        <div className={cl.wrapper}>
            <HStack
                className={classNames(cl.SelectWrapper, { [cl.error]: Boolean(isError) }, [className])}
                gap='8'
                justify='between'
                align='center'
                onClick={onOpen}
            >
                {value && <Text text={value} size='14' color='gray-dark' />}
                {!value && <Text text={placeholder} size='14' color='gray-dark' />}
                <Icon Svg={Arrow} colorSVG='gray' width={20} height={20} isRotate={isOpen} />
            </HStack>

            <Options
                isOpen={isOpen}
                options={options}
                onClick={onClick}
            />
        </div>
    );
});
