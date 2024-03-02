import { ReactNode } from "react"
import { classNames } from "@/shared/lib/classNames/classNames";

import cl from './Page.module.scss';

interface PageProps {
    children: ReactNode;
    className?: string;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children
    } = props;

    return (
        <div
            className={classNames(cl.page, {}, [className])}
        >
            {children}
        </div>
    )
}