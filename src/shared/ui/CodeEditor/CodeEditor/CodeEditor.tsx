import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack, VStack } from '../../Stack';
import { Button } from '../../Button';
import { DONE, TERMINAL } from '../lib/constants';
import { Text } from '../../Text';

import cl from './CodeEditor.module.scss';

interface CodeEditorProps {
    className?: string;
    interestingAnswer?: string;
    callback?: () => void;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const {
        className,
        interestingAnswer,
        callback,
    } = props;

    const [code, setCode] = useState('');
    const id = Math.ceil(Math.random() * 100000000000000);

    const onDone = () => {
        const log = `
            const res = document.querySelector("#terminal_block__${id}");

            res.innerHTML = '';

            const output = (message) => {
                const p = document.createElement('p');
                p.innerHTML = message;

                res.appendChild(p);

                return message;
            }
        `;

        const userCode = log + code;

        try {
            const result = eval(userCode);

            interestingAnswer === String(result) && callback?.();
        } catch (error) {
            const er = String(error) || '';

            const p = document.createElement('p');
            p.style.color = 'red';
            p.innerHTML = er.split('at')[0];
            document?.querySelector(`#terminal_block__${id}`)?.appendChild(p);

            console.error('Ошибка выполнения кода:', error);
        }
    }

    return (
        <HStack
            className={classNames(cl.CodeEditor, {}, [className])}
            justify='between'
            gap='16'
            max
        >
            <VStack max>
                <textarea
                    className={cl.textarea}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
            </VStack>

            <VStack className={cl.terminalBlock} max gap='24' justify='between'>
                <Text
                    text={TERMINAL}
                    bold
                    size='20'
                />

                <VStack className={cl.infoBlock} id={`terminal_block__${id}`} max>
                    {/* TODO */}
                    {''}
                </VStack>

                <HStack justify='end' max>
                    <Button variant='outline_green' onClick={onDone}>
                        {DONE}
                    </Button>
                </HStack>
            </VStack>
        </HStack>
    );
});
