import { createSlice } from '@reduxjs/toolkit';

import { LessonSchema } from '../types/Lesson';
import { getLesson } from '../services/getLesson';

const initialState: LessonSchema = {
    isLoading: false,
    data: null,
};

export const LessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLesson.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
        builder
            .addCase(getLesson.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
        builder
            .addCase(getLesson.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            });
    },
});

export const { actions: LessonActions } = LessonSlice;
export const { reducer: LessonReducer } = LessonSlice;
