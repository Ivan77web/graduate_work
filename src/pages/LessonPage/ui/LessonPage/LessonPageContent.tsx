import { memo } from 'react';
import { LessonContent } from '@/entites/Lesson';
import { Text } from '@/shared/ui/Text';
import { Code } from '@/shared/ui/Code';

interface LessonPageContentProps {
    content: LessonContent
}

export const LessonPageContent = memo(({ content }: LessonPageContentProps) => {

    if (content.type === 'header') {
        return (
            <Text
                text={content.content}
                size="20"
                color="black"
                bold
            />
        )
    }

    if (content.type === 'code') {
        return (
            <Code text={content.content} />
        )
    }

    return (
        <Text
            text={content.content}
            size="16"
            color="black"
        />
    )
});
