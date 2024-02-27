import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ModalRegistration.module.scss';
import { Text } from '@/shared/ui/Text';
import { NEXT, REGISTRATION } from '../lib/constants';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ModalRegistrationActions } from '../model/slices/modalRegistration';
import { RegistrationFormOne, getRegistrationForm } from '@/entites/RegistrationForm';
import { useSelector } from 'react-redux';
import { RegistrationFormActions } from '@/entites/RegistrationForm/model/slices/RegistrationFormSlice';

const ModalRegistrationOne = () => {
    const dispatch = useAppDispatch();
    const registrationForm = useSelector(getRegistrationForm);

    const onNext = () => {
        let isNext = true;

        if (registrationForm.name.value === '') {
            isNext = false;
            dispatch(RegistrationFormActions.setNameErrorText('Поле обязательно'));
        } else {
            dispatch(RegistrationFormActions.setNameErrorText(null));
        }

        if (registrationForm.age.value === '') {
            isNext = false;
            dispatch(RegistrationFormActions.setAgeErrorText('Поле обязательно'));
        } else {
            dispatch(RegistrationFormActions.setAgeErrorText(null));
        }

        if (registrationForm.education.value === '') {
            isNext = false;
            dispatch(RegistrationFormActions.setEducationErrorText(true));
        } else {
            dispatch(RegistrationFormActions.setEducationErrorText(null));
        }

        if (registrationForm.varinat.value === '') {
            isNext = false;
            dispatch(RegistrationFormActions.setVarinatErrorText(true));
        } else {
            dispatch(RegistrationFormActions.setVarinatErrorText(null));
        }

        if (registrationForm.gender.value === '') {
            isNext = false;
            dispatch(RegistrationFormActions.setGenderErrorText(true));
        } else {
            dispatch(RegistrationFormActions.setGenderErrorText(null));
        }

        if (isNext) {
            dispatch(ModalRegistrationActions.setStep('second'));
        }
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