import { StateSchema } from '@/app/providers/StoreProvider';

export const getLessonData = (state: StateSchema) => state.lesson.data;
export const getLessonIsLoadind = (state: StateSchema) => state.lesson.isLoading;
export const getLessonError = (state: StateSchema) => state.lesson.error;
