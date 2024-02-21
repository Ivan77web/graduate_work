import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

export type CardVariant = 'light';
export type CardPadding = '30';
export type CardBorder = 'roundBorder';

const mapPaddingToClass: Record<CardPadding, string> = {
    30: 'padding_30',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'light',
        max,
        padding = '30',
        border = 'roundBorder',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={
                classNames(
                    cl.card,
                    {
                        [cl.max]: max,
                    },
                    [
                        className,
                        cl[variant],
                        cl[paddingClass],
                        cl[border],
                    ],
                )
            }
            {...otherProps}
        >
            {children}
        </div>
    );
});
