import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ModalRegistration.module.scss';
import { Text } from '@/shared/ui/Text';
import { NEXT, REGISTRATION } from '../lib/constants';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ModalRegistrationActions } from '../model/slices/modalRegistration';
import { RegistrationFormOne } from '@/entites/RegistrationForm';

const ModalRegistrationOne = () => {
    const dispatch = useAppDispatch();

    const onNext = () => {
        dispatch(ModalRegistrationActions.setStep('second'));
    }

    return (
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

                <RegistrationFormOne />
            </VStack>

            {/* Вынести в отдельную фичу */}
            <HStack justify='end' max>
                <Button
                    variant='outline_red'
                    onClick={onNext}
                >
                    {NEXT}
                </Button>
            </HStack>
        </VStack>
    )
}

export default ModalRegistrationOne