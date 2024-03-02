import { createSlice } from '@reduxjs/toolkit';

import { RegistrationSchema } from '../types/RegistrationSchema';
import { registartionReq } from '../services/registration/RegistrationReq';

const initialState: RegistrationSchema = {
    isLoading: false,
};

export const registartionSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registartionReq.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registartionReq.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(registartionReq.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registartionActions } = registartionSlice;
export const { reducer: registartionReducer } = registartionSlice;
