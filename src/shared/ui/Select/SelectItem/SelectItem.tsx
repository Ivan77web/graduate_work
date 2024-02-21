import { memo } from 'react';
import { SelectOption } from '@/shared/types/ui';

import { Text } from '../../Text';
import { HStack } from '../../Stack';

import cl from './SelectItem.module.scss';

interface SelectItemProps {
    option: SelectOption;
    onClick: (value: SelectOption) => void;
}

export const SelectItem = memo(({ option, onClick }: SelectItemProps) => {
    return (
        <HStack
            className={cl.optionItem}
            align='center'
            onClick={() => onClick(option)}
        >
            <Text text={option.value} size='14' color='gray-dark' />
        </HStack>
    );
});
