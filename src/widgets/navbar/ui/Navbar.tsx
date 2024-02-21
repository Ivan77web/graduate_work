import { Text } from "@/shared/ui/Text";

import cl from './Navbar.module.scss';
import { Logo } from "@/shared/ui/Logo";
import { HStack } from "@/shared/ui/Stack";

export const Navbar = () => {
    return (
        <HStack justify="center" className={cl.navbar}>
            <Logo />
        </HStack>
    )
}