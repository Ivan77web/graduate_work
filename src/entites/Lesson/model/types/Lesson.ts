export interface LessonSchema {
    isLoading: boolean;
    error?: string;
    data: Lesson | null;
}

export interface Lesson {
    id: string,
    title: string,
    content: string,
}