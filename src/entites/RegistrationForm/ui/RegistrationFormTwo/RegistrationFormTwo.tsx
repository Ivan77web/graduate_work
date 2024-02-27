import { Input } from "@/shared/ui/Input"
import { VStack } from "@/shared/ui/Stack"
import { REPEAT_PASSWORD, START_LOGIN, START_PASSWORD } from "../../lib/constants"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getLogin, getPassword, getRepeatPassword } from "../../model/selectors/RegistrationForm";
import { RegistrationFormActions } from "../../model/slices/RegistrationFormSlice";
import { useCallback } from "react";

export const RegistrationFormTwo = () => {
    const dispatch = useAppDispatch();
    const login = useSelector(getLogin);
    const password = useSelector(getPassword);
    const repeatPassword = useSelector(getRepeatPassword);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setLogin(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setPassword(value));
    }, [dispatch])

    const onChangeRepeatPassword = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setRepeatPassword(value));
    }, [dispatch])

    // TODO Добавить аддоны и линию
    return (
        <VStack gap='24' max >
            <Input
                placeholder={START_LOGIN}
                value={login}
                onChange={onChangeLogin}
            />
            <Input
                type='password'
                value={password}
                onChange={onChangePassword}
                placeholder={START_PASSWORD}
            />
            <Input
                type='password'
                placeholder={REPEAT_PASSWORD}
                value={repeatPassword}
                onChange={onChangeRepeatPassword}
            />
        </VStack >
    )
}