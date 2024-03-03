import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { SectionItem } from '../types/SectionsSchema';

export const getSections = createAsyncThunk<
    SectionItem[],
    void,
    ThunkConfig<string>
>(
    'sections/getSections',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<SectionItem[]>('/sections');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e: any) {
            console.error(e);
            return rejectWithValue(String(e.response.status));
        }
    },
);
