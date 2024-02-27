import { useCallback } from "react";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ModalRegistration, ModalRegistrationActions } from "@/widgets/modalRegistration";

import { LOGIN, LOGO, REGISTRATION } from "../lib/constants";

import cl from './Navbar.module.scss';

export const Navbar = () => {
    const dispatch = useAppDispatch();

    const onOpenModalRegistration = useCallback(() => {
        dispatch(ModalRegistrationActions.open());
    }, [dispatch, ModalRegistrationActions]);

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

            <ModalRegistration />
        </HStack>
    )
}