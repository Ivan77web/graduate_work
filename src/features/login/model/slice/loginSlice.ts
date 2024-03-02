import { createSlice } from '@reduxjs/toolkit';

import { loginReq } from '../services/login/LoginReq';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginReq.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginReq.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(loginReq.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
