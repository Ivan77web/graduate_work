import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={classNames(cl.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
