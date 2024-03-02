import { useSelector } from "react-redux"

import { Button } from "@/shared/ui/Button"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getRegistrationForm } from "@/entites/RegistrationForm"
import { RegistrationFormActions } from "@/entites/RegistrationForm";

import { FIELD_REQUIRED, PASSWORD_NOT_MATCH, REGISTRATION } from "../../lib/constants"
import { registartionReq } from "../../model/services/registration/RegistrationReq";
import { getRegistrationLoading } from "../../model/selectors/registration";

export const Registration = () => {
    const dispatch = useAppDispatch();
    const registrationForm = useSelector(getRegistrationForm);
    const registrationIsLoading = useSelector(getRegistrationLoading);

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
            dispatch(registartionReq({
                name: registrationForm.name.value,
                age: registrationForm.age.value,
                education: registrationForm.education.value,
                varinat: registrationForm.varinat.value,
                gender: registrationForm.gender.value,
                login: registrationForm.login.value,
                password: registrationForm.password.value,
            }));
        }
    };

    return (
        <Button
            variant='outline_red'
            onClick={onRegistration}
            disabled={registrationIsLoading}
        >
            {REGISTRATION}
        </Button>
    )
}