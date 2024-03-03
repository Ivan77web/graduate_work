export interface LessonSchema {
    isLoading: boolean;
    error?: string;
    data: Lesson | null;
}

export interface Lesson {
    id: string,
    title: string,
    content: LessonContent[],
}

export type LessonContentType = 'header' | 'text' | 'code';

export interface LessonContent {
    type: LessonContentType;
    content: string;
}