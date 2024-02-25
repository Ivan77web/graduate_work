import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import Cross from '@/shared/assets/icons/cross.svg';

import { Overlay } from '../Overlay/Overlay';

import cl from './Modal.module.scss';
import { Icon } from '../Icon';
import { Card } from '../Card';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose,
        className,
        lazy,
    } = props;

    const { isClosing, isMounted, close } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });
    const mods: Mods = {
        [cl.opened]: isOpen,
        [cl.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cl.Modal, mods, [className])}>
            <Overlay onClick={close} />

            <Card className={cl.content}>
                <Icon
                    Svg={Cross}
                    className={cl.cross}
                    onClick={close}
                    clickable
                />
                {children}
            </Card>
        </div>
    );
};
