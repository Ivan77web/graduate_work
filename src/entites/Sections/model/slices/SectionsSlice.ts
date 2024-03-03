import { createSlice } from '@reduxjs/toolkit';

import { SectionsSchema } from '../types/SectionsSchema';
import { getSections } from '../services/getSections';

const initialState: SectionsSchema = {
    isLoading: false,
    data: [],
};

export const SectionsSlice = createSlice({
    name: 'SectionsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSections.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getSections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(getSections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: SectionsActions } = SectionsSlice;
export const { reducer: SectionsReducer } = SectionsSlice;
