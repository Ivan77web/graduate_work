import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SectionItem.module.scss';
import { SectionItem as SectionItemSchema } from '@/entites/Sections/model/types/SectionsSchema';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import Check from '@/shared/assets/icons/check.svg';

interface SectionItemProps {
    className?: string;
    section: SectionItemSchema;
}

export const SectionItem = memo(({ className, section }: SectionItemProps) => {
    return (
        <HStack
            className={classNames(cl.SectionItem, {}, [className])}
            justify='between'
            max
        >
            <Text
                text={section.id + " " + section.title}
                bold
                size='14'
                color='gray-dark'
            />


            {/* TODO Захардкожена галочка */}
            <Icon
                className={cl.icon}
                Svg={Check}
                height={20}
            />
        </HStack>
    );
});
