import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Login } from '@/features/login';
import { LoginForm } from '@/entites/LoginForm';

import { getIsOpen } from '../model/selectors/ModalLogin';
import { ModalLoginActions } from '../model/slices/modalLogin';
import { LOGIN } from '../lib/constants';

import cl from './ModalLogin.module.scss';
import { ErrorBlock } from './ErrorBlock';

const ModalLogin = () => {
    const dispatch = useAppDispatch();
    const isOpen = useSelector(getIsOpen);

    const onClose = useCallback(() => {
        dispatch(ModalLoginActions.close());
    }, [dispatch])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <VStack
                className={classNames(cl.modalLogin, {}, [])}
                justify='between'
            >
                <VStack
                    max
                    align='center'
                    gap='40'
                >
                    <Text
                        text={LOGIN}
                        size='30'
                        color='red'
                        align='center'
                        bold
                    />

                    <LoginForm />
                </VStack>

                <ErrorBlock />

                <HStack justify='end' max>
                    <Login />
                </HStack>
            </VStack>
        </Modal>
    )
}

export default ModalLogin