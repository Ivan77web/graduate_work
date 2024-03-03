import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Lesson } from '../types/Lesson';

export const getLesson = createAsyncThunk<Lesson, string, ThunkConfig<string>>(
    'lesson/getLesson',
    async (id, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<Lesson>(`/lessons/${id}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);