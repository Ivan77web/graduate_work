import { useCallback } from "react";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { userActions } from "@/entites/User";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AppLink } from "@/shared/ui/AppLink";
import { getPathSections } from "@/shared/const/router";

import { LOGO, LOGOUT, SECTIONS } from "../lib/constants";

import cl from './NavbarAuth.module.scss';

export const NavbarAuth = () => {
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <HStack justify="between" className={classNames(cl.navbar, {}, [''])}>
            <Text
                text={LOGO}
                size="14"
                color="black"
            />

            <HStack
                justify="between"
                gap="32"
            >
                <AppLink to={getPathSections()}>
                    <Button
                        variant="clear"
                    >
                        {SECTIONS}
                    </Button>
                </AppLink>

                <Button
                    variant="clear"
                    onClick={onLogout}
                >
                    {LOGOUT}
                </Button>
            </HStack>
        </HStack>
    )
}