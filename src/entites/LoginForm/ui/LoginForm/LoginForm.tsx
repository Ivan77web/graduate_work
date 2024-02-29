import { useCallback } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "@/shared/ui/Input";
import { VStack } from "@/shared/ui/Stack";

import { LOGIN, PASSWORD } from "../../lib/constants";
import { getLogin, getPassword } from "../../model/selectors/LoginForm";
import { LoginFormActions } from "../../model/slices/LoginFormSlice";

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const login = useSelector(getLogin);
    const password = useSelector(getPassword);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(LoginFormActions.setLogin(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginFormActions.setPassword(value));
    }, [dispatch])

    return (
        <VStack gap='24' max >
            <Input
                placeholder={LOGIN}
                value={login.value}
                onChange={onChangeLogin}
                errorText={login.errorText}
            />
            <Input
                placeholder={PASSWORD}
                type="password"
                value={password.value}
                onChange={onChangePassword}
                errorText={password.errorText}
            />
        </VStack >
    )
}