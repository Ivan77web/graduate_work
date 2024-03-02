import { useCallback } from "react";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "@/entites/User";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ModalRegistration, ModalRegistrationActions } from "@/widgets/modalRegistration";
import { ModalLogin, ModalLoginActions } from "@/widgets/modalLogin";

import { LOGIN, LOGO, REGISTRATION } from "../lib/constants";

import cl from './Navbar.module.scss';

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const onOpenModalRegistration = useCallback(() => {
        dispatch(ModalRegistrationActions.open());
    }, [dispatch, ModalRegistrationActions]);

    const onOpenModalLogin = useCallback(() => {
        dispatch(ModalLoginActions.open());
    }, [dispatch, ModalLoginActions]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <HStack justify="between" className={classNames(cl.navbar, {}, [''])}>
            <Text
                text={LOGO}
                size="14"
                color="red"
            />

            <HStack
                justify="between"
                gap="32"
            >
                <Button
                    variant="filled_black"
                    onClick={onOpenModalLogin}
                >
                    {LOGIN}
                </Button>
                <Button
                    onClick={onOpenModalRegistration}
                    variant="filled_red"
                >
                    {REGISTRATION}
                </Button>

            </HStack>

            <ModalLogin />
            <ModalRegistration />
        </HStack>
    )
}