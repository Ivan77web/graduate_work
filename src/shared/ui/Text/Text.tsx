import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Text.module.scss';

export type TextColor = 'black' | 'black-light' | 'gray-dark' | 'gray' | 'gray-light' | 'white' | 'red';
export type TextSize = '10' | '14' | '16' | '20' | '30' | '50' | '70';
export type TextAlign = 'left' | 'right' | 'center';

interface TextProps {
    className?: string;
    align?: TextAlign;
    text?: string;
    size?: TextSize;
    bold?: boolean;
    color?: TextColor;
}

const mapSizeToClass: Record<TextSize, string> = {
    10: cl.size_10,
    14: cl.size_14,
    16: cl.size_16,
    20: cl.size_20,
    30: cl.size_30,
    50: cl.size_50,
    70: cl.size_70,
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        size = '14',
        color = 'black',
        bold,
        align = 'left'
    } = props;

    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, sizeClass, cl[align], cl[color]];

    return (
        <p className={classNames(cl.text, { [cl.bold]: bold }, additionalClasses)}>
            {text}
        </p>
    );
});
