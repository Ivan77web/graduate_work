import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Modal } from '@/shared/ui/Modal';

import { ModalRegistrationActions } from '../model/slices/modalRegistration';
import { getIsOpen, getStep } from '../model/selectors/ModalRegistration';
import ModalRegistrationOne from './ModalRegistrationOne';
import ModalRegistrationTwo from './ModalRegistrationTwo';

// TODO зарефачить

const ModalRegistration = () => {
    const dispatch = useAppDispatch();
    const isOpen = useSelector(getIsOpen);
    const step = useSelector(getStep);

    const onClose = useCallback(() => {
        dispatch(ModalRegistrationActions.close());
    }, [dispatch])

    const stepComponent = (step === 'first')
        ?
        <ModalRegistrationOne />
        :
        <ModalRegistrationTwo />

    // TODO валидность инпутов
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            {stepComponent}
        </Modal>
    )
}

export default ModalRegistration