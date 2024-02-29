import { useSelector } from "react-redux"

import { Button } from "@/shared/ui/Button"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getRegistrationForm } from "@/entites/RegistrationForm"
import { RegistrationFormActions } from "@/entites/RegistrationForm";

import { FIELD_REQUIRED, PASSWORD_NOT_MATCH, REGISTRATION } from "../../lib/constants"

export const Registration = () => {
    const dispatch = useAppDispatch();
    const registrationForm = useSelector(getRegistrationForm);

    const isError = () => {
        let isError = false;

        if (registrationForm.login.value === '') {
            isError = true;
            dispatch(RegistrationFormActions.setLoginErrorText(FIELD_REQUIRED));
        } else {
            dispatch(RegistrationFormActions.setLoginErrorText(null));
        }

        if (registrationForm.password.value === '') {
            isError = true;
            dispatch(RegistrationFormActions.setPasswordErrorText(FIELD_REQUIRED));
        } else {
            dispatch(RegistrationFormActions.setPasswordErrorText(null));
        }

        if (registrationForm.repeat_password.value === '' || registrationForm.repeat_password.value !== registrationForm.password.value) {
            isError = true;

            if (registrationForm.repeat_password.value === '') {
                dispatch(RegistrationFormActions.setRepeatPasswordErrorText(FIELD_REQUIRED));
            } else {
                dispatch(RegistrationFormActions.setRepeatPasswordErrorText(PASSWORD_NOT_MATCH));
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