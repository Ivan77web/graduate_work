import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsLoadingSections = (state: StateSchema) => state.sections.isLoading;
export const getErrorSections = (state: StateSchema) => state.sections.error;
export const getDataSections = (state: StateSchema) => state.sections.data;
