import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cl from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    return (
        <pre className={classNames(cl.code, {}, [className])}>
            <code className={cl.text}>
                {text}
            </code>
        </pre>
    );
});
