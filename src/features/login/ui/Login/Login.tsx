import { useSelector } from "react-redux"

import { Button } from "@/shared/ui/Button"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getLoginForm } from "@/entites/LoginForm";
import { LoginFormActions } from "@/entites/LoginForm";

import { LOGIN } from "../../lib/constants";

export const Login = () => {
    const dispatch = useAppDispatch();
    const loginForm = useSelector(getLoginForm);

    const isError = () => {
        let isError = false;

        if (loginForm.login.value === '') {
            isError = true;
            dispatch(LoginFormActions.setLoginErrorText('Поле обязательно'));
        } else {
            dispatch(LoginFormActions.setLoginErrorText(null));
        }

        if (loginForm.password.value === '') {
            isError = true;
            dispatch(LoginFormActions.setPasswordErrorText('Поле обязательно'));
        } else {
            dispatch(LoginFormActions.setPasswordErrorText(null));
        }

        return isError;
    }

    const onLogin = () => {
        const error = isError();

        if (!error) {
            console.log(loginForm.login.value);
            console.log(loginForm.password.value);
        }
    };

    return (
        <Button
            variant='outline_red'
            onClick={onLogin}
        >
            {LOGIN}
        </Button>
    )
}