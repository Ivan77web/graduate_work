import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/shared/ui/Page";
import { SECTIONS } from "../../lib/constants";
import { Text } from "@/shared/ui/Text";
import { Sections } from "@/widgets/sections";
import { VStack } from "@/shared/ui/Stack";

const SectionsPage = () => {
    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap="40" max>
                <Text
                    text={SECTIONS}
                    color='black'
                    size="50"
                />

                <Sections />
            </VStack>
        </Page>
    )
}

export default SectionsPage;
