import { Button } from "@/shared/ui/Button"
import { REGISTRATION } from "../../lib/constants"
import { useCallback } from "react"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getRegistrationForm } from "@/entites/RegistrationForm"
import { useSelector } from "react-redux"
import { RegistrationFormActions } from "@/entites/RegistrationForm/model/slices/RegistrationFormSlice"

export const Registration = () => {
    const dispatch = useAppDispatch();
    const registrationForm = useSelector(getRegistrationForm);

    const isError = () => {
        let isError = false;

        if (registrationForm.login.value === '') {
            isError = true;
            dispatch(RegistrationFormActions.setLoginErrorText('Поле обязательно'));
        } else {
            dispatch(RegistrationFormActions.setLoginErrorText(null));
        }

        if (registrationForm.password.value === '') {
            isError = true;
            dispatch(RegistrationFormActions.setPasswordErrorText('Поле обязательно'));
        } else {
            dispatch(RegistrationFormActions.setPasswordErrorText(null));
        }

        if (registrationForm.repeat_password.value === '' || registrationForm.repeat_password.value !== registrationForm.password.value) {
            isError = true;

            if (registrationForm.repeat_password.value === '') {
                dispatch(RegistrationFormActions.setRepeatPasswordErrorText('Поле обязательно'));
            } else {
                dispatch(RegistrationFormActions.setRepeatPasswordErrorText('Пароль не совпадает'));
            }

        } else {
            dispatch(RegistrationFormActions.setRepeatPasswordErrorText(null));
        }

        return isError;
    }

    const onRegistration = () => {
        const error = isError();

        if (!error) {
            console.log(registrationForm.name.value);
            console.log(registrationForm.age.value);
            console.log(registrationForm.education.value);
            console.log(registrationForm.varinat.value);
            console.log(registrationForm.gender.value);
            console.log(registrationForm.login.value);
            console.log(registrationForm.password.value);
            console.log(registrationForm.repeat_password.value);

        }
    };

    return (
        <Button
            variant='outline_red'
            onClick={onRegistration}
        >
            {REGISTRATION}
        </Button>
    )
}