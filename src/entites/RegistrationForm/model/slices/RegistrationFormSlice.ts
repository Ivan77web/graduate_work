import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RegistrationFormSchema } from '../types/RegistrationFormSchema';

const initialState: RegistrationFormSchema = {
    name: {
        value: '',
        errorText: null,
    },
    age: {
        value: '',
        errorText: null,
    },
    education: {
        value: '',
        errorText: null,
    },
    varinat: {
        value: '',
        errorText: null,
    },
    gender: {
        value: '',
        errorText: null,
    },
    login: {
        value: '',
        errorText: null,
    },
    password: {
        value: '',
        errorText: null,
    },
    repeat_password: {
        value: '',
        errorText: null,
    },
};

export const RegistrationFormSlice = createSlice({
    name: 'RegistrationForm',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name.value = action.payload;
        },
        setNameErrorText: (state, action: PayloadAction<string | null>) => {
            state.name.errorText = action.payload;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age.value = action.payload;
        },
        setAgeErrorText: (state, action: PayloadAction<string | null>) => {
            state.age.errorText = action.payload;
        },
        setEducation: (state, action: PayloadAction<string>) => {
            state.education.value = action.payload;
        },
        setEducationErrorText: (state, action: PayloadAction<boolean | null>) => {
            state.education.errorText = action.payload;
        },
        setVarinat: (state, action: PayloadAction<string>) => {
            state.varinat.value = action.payload;
        },
        setVarinatErrorText: (state, action: PayloadAction<boolean | null>) => {
            state.varinat.errorText = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender.value = action.payload;
        },
        setGenderErrorText: (state, action: PayloadAction<boolean | null>) => {
            state.gender.errorText = action.payload;
        },
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
        setRepeatPassword: (state, action: PayloadAction<string>) => {
            state.repeat_password.value = action.payload;
        },
        setRepeatPasswordErrorText: (state, action: PayloadAction<string | null>) => {
            state.repeat_password.errorText = action.payload;
        },
        reset: (state) => {
            state.name.value = '';
            state.name.errorText = null;
            state.age.value = '';
            state.age.errorText = null;
            state.education.value = '';
            state.education.errorText = null;
            state.varinat.value = '';
            state.varinat.errorText = null;
            state.gender.value = '';
            state.gender.errorText = null;
            state.login.value = '';
            state.login.errorText = null;
            state.password.value = '';
            state.password.errorText = null;
            state.repeat_password.value = '';
            state.repeat_password.errorText = null;
        },
    },
});

export const { actions: RegistrationFormActions } = RegistrationFormSlice;
export const { reducer: RegistrationFormReducer } = RegistrationFormSlice;
