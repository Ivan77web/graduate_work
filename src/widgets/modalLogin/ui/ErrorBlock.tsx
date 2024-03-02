import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getLoginError } from '@/features/login';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';

import { ERROR, USER_NOT_FOUND } from '../lib/constants';

interface ErrorBlockProps {
    className?: string;
}

export const ErrorBlock = memo(({ className }: ErrorBlockProps) => {
    const error = useSelector(getLoginError);

    if (error === '401') {
        return (
            <Text
                className={classNames('', {}, [className])}
                text={USER_NOT_FOUND}
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
