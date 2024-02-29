import { useSelector } from "react-redux";

import { Input } from "@/shared/ui/Input"
import { VStack } from "@/shared/ui/Stack"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { REPEAT_PASSWORD, START_LOGIN, START_PASSWORD } from "../../lib/constants"
import { getLogin, getPassword, getRepeatPassword } from "../../model/selectors/RegistrationForm";
import { RegistrationFormActions } from "../../model/slices/RegistrationFormSlice";

export const RegistrationFormTwo = () => {
    const dispatch = useAppDispatch();
    const login = useSelector(getLogin);
    const password = useSelector(getPassword);
    const repeatPassword = useSelector(getRepeatPassword);

    const onChangeLogin = (value: string) => {
        dispatch(RegistrationFormActions.setLogin(value));
    }

    const onChangePassword = (value: string) => {
        dispatch(RegistrationFormActions.setPassword(value));
    }

    const onChangeRepeatPassword = (value: string) => {
        dispatch(RegistrationFormActions.setRepeatPassword(value));
    }

    return (
        <VStack gap='24' max >
            <Input
                placeholder={START_LOGIN}
                value={login.value}
                onChange={onChangeLogin}
                errorText={login.errorText}
            />
            <Input
                type='password'
                value={password.value}
                onChange={onChangePassword}
                placeholder={START_PASSWORD}
                errorText={password.errorText}
            />
            <Input
                type='password'
                placeholder={REPEAT_PASSWORD}
                value={repeatPassword.value}
                onChange={onChangeRepeatPassword}
                errorText={repeatPassword.errorText}
            />
        </VStack >
    )
}