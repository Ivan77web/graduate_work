import { classNames } from "@/shared/lib/classNames/classNames";
import student from '@/shared/assets/images/student.png';
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

import cl from './MainPage.module.scss';
import { DEVELOPMENT, TAGLINE, YOUR_PATH } from "./lib/constants";

const MainPage = () => {
    return (
        <VStack className={classNames(cl.mainPage, {}, [])}>
            <VStack 
                className={cl.blockText}
                gap="32"
            >
                <div>
                    <Text
                        text={YOUR_PATH}
                        size="70"
                        color="white"
                        bold
                    />
                    <Text
                        text={DEVELOPMENT}
                        size="70"
                        color="white"
                        isItalic
                        bold
                    />
                </div>
                <Text
                    text={TAGLINE}
                    size="16"
                    color="white"
                />
            </VStack>

            <img className={cl.image} src={student} />
        </VStack>
    )
}

export default MainPage