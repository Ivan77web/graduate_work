import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";

import { LOGIN, LOGO, REGISTRATION } from "../lib/constants";

import cl from './Navbar.module.scss';

export const Navbar = () => {
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
                <Button variant="filled_black">{LOGIN}</Button>
                <Button variant="filled_red">{REGISTRATION}</Button>
            </HStack>
        </HStack>
    )
}