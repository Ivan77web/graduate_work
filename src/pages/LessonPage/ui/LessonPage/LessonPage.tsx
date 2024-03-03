import { getLesson, getLessonData, getLessonError, getLessonIsLoadind } from "@/entites/Lesson";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/shared/ui/Page";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CodeEditor } from "@/shared/ui/CodeEditor";

import { LessonPageContent } from "./LessonPageContent";

const LessonPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const lessonData = useSelector(getLessonData);
    const lessonIsLoading = useSelector(getLessonIsLoadind);
    const lessonError = useSelector(getLessonError);

    useEffect(() => {
        if (id?.length) {
            dispatch(getLesson(id));
        }
    }, [id])

    // TODO
    if (lessonIsLoading) {
        return (
            <Page className={classNames('', {}, [])}>
                <p>LOADING</p>
            </Page>
        )
    }

    // TODO
    if (lessonError) {
        return (
            <Page className={classNames('', {}, [])}>
                <p>ERROR</p>
            </Page>
        )
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap="32">
                <Text
                    text={lessonData?.title}
                    size="50"
                    color="black"
                />

                {/* <VStack gap="16" max>
                    {
                        lessonData?.content.map((elem, index) =>
                            <LessonPageContent content={elem} key={index} />
                        )
                    }
                </VStack> */}

                <CodeEditor 
                    interestingAnswer="123"
                    callback={() => console.log('Правильный ответ')}
                />
            </VStack>
        </Page>
    )
}

export default LessonPage;
