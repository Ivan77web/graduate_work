import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Text.module.scss';

export type TextSize = 's' | 'm' | 'l';
type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    size?: TextSize;
    bold?: boolean;
}

const mapSizeToClass: Record<TextSize, string> = {
    s: cl.size_s,
    m: cl.size_m,
    l: cl.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = 'm',
        bold,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, sizeClass];

    return (
        <div className={classNames(cl.Text, { [cl.bold]: bold }, additionalClasses)}>
            {title && (
                <HeaderTag className={cl.title}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cl.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
