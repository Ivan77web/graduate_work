import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { CodeEditor } from '../CodeEditor';
import { VStack } from '../Stack';
import { Text } from '../Text';

import cl from './Task.module.scss';

interface TaskProps {
    className?: string;
    task: string;
    interestingAnswer: string;
    callback: () => void;
    index: number,
}

export const Task = memo((props: TaskProps) => {
    const {
        className,
        task,
        interestingAnswer,
        callback,
        index
    } = props;

    return (
        <VStack
            className={classNames(cl.Task, {}, [className])}
            gap='24'
            max
        >
            <VStack gap='16' max>
                <Text
                    text={`№${index}`}
                    size='16'
                    bold
                />
                <Text
                    size='16'
                    text={task}
                />
            </VStack>

            <CodeEditor
                interestingAnswer={interestingAnswer}
                callback={callback}
            />
        </VStack>
    );
});
