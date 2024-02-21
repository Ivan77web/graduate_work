import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { SelectOption } from '@/shared/types/ui';

import { Text } from '../Text';
import { HStack } from '../Stack';
import { Icon } from '../Icon';

import cl from './Select.module.scss';
import { Options } from './Options/Options';

interface SelectProps {
    className?: string;
    value: SelectOption | null;
    onChange: (value: SelectOption) => void;
    options: SelectOption[];
    placeholder?: string;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        options,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [setIsOpen])

    const onClick = useCallback((value: SelectOption) => {
        setIsOpen(false);
        onChange(value);
    }, [setIsOpen])

    return (
        <div className={cl.wrapper}>
            <HStack
                className={classNames(cl.SelectWrapper, {}, [className])}
                gap='8'
                justify='between'
                align='center'
                onClick={onOpen}
            >
                {value?.value && <Text text={value.value} size='14' color='gray-dark' />}
                {!value?.value && <Text text={placeholder} size='14' color='gray' />}
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
