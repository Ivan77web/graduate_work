import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ModalRegistrationActions, ModalRegistrationReducer } from '../model/slices/modalRegistration';
import { getIsOpen } from '../model/selectors/ModalRegistration';

import cl from './ModalRegistration.module.scss';
import { Text } from '@/shared/ui/Text';
import { REGISTRATION, REPEAT_PASSWORD, START_LOGIN, START_PASSWORD } from '../lib/constants';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

const reducers: ReducersList = {
    modalRegistration: ModalRegistrationReducer
};

const ModalRegistration = () => {
    const dispatch = useAppDispatch();
    const isOpen = useSelector(getIsOpen);

    const onClose = useCallback(() => {
        dispatch(ModalRegistrationActions.close());
    }, [dispatch])

    // TODO валидность инпутов

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <VStack
                    className={classNames(cl.modalRegistration, {}, [])}
                    justify='between'
                >
                    <VStack
                        max
                        align='center'
                        gap='40'
                    >
                        <Text
                            text={REGISTRATION}
                            size='30'
                            color='red'
                            align='center'
                            bold
                        />

                        {/* Добавить аддоны и линию */}
                        <VStack gap='24' max>
                            <Input
                                placeholder={START_LOGIN}
                            />
                            <Input
                                type='password'
                                placeholder={START_PASSWORD}
                            />
                            <Input
                                type='password'
                                placeholder={REPEAT_PASSWORD}
                            />
                        </VStack>
                    </VStack>

                    {/* TODO Вынести в фичу */}
                    <HStack justify='end' max>
                        <Button variant='outline_red'>
                            {REGISTRATION}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </DynamicModuleLoader>
    )
}

export default ModalRegistration