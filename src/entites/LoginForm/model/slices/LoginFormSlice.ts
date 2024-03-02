import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginFormSchema } from '../types/LoginFormSchema';

const initialState: LoginFormSchema = {
    login: {
        value: '',
        errorText: null,
    },
    password: {
        value: '',
        errorText: null,
    },
};

export const LoginFormSlice = createSlice({
    name: 'LoginForm',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login.value = action.payload;
        },
        setLoginErrorText: (state, action: PayloadAction<string | null>) => {
            state.login.errorText = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password.value = action.payload;
        },
        setPasswordErrorText: (state, action: PayloadAction<string | null>) => {
            state.password.errorText = action.payload;
        },
        reset: (state) => {
            state.login.value = '';
            state.login.errorText = null;
            state.password.value = '';
            state.password.errorText = null;
        },
    },
});

export const { actions: LoginFormActions } = LoginFormSlice;
export const { reducer: LoginFormReducer } = LoginFormSlice;
