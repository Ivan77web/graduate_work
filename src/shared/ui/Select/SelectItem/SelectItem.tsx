import { memo } from 'react';

import { Text } from '../../Text';
import { HStack } from '../../Stack';

import cl from './SelectItem.module.scss';

interface SelectItemProps {
    option: string;
    onClick: (value: string) => void;
}

export const SelectItem = memo(({ option, onClick }: SelectItemProps) => {
    return (
        <HStack
            className={cl.optionItem}
            align='center'
            onClick={() => onClick(option)}
        >
            <Text text={option} size='14' color='gray-dark' />
        </HStack>
    );
});
