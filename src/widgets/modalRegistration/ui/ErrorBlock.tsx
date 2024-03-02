import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { getRegistrationError } from '@/features/registration';

import { ERROR, LOGIN_TAKEN } from '../lib/constants';

interface ErrorBlockProps {
    className?: string;
}

export const ErrorBlock = memo(({ className }: ErrorBlockProps) => {
    const error = useSelector(getRegistrationError);

    if (error === '405') {
        return (
            <Text
                className={classNames('', {}, [className])}
                text={LOGIN_TAKEN}
                size='14'
                color='red'
            />
        )
    }

    if (error) {
        return (
            <Text
                className={classNames('', {}, [className])}
                text={ERROR}
                size='14'
                color='red'
            />
        )
    }

    return null;
});
