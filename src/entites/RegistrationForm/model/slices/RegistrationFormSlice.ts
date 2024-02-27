import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationFormSchema } from '../types/RegistrationFormSchema';

const initialState: RegistrationFormSchema = {
    name: '',
    age: '',
    education: '',
    varinat: '',
    gender: '',
    login: '',
    password: '',
    repeat_password: '',
};

export const RegistrationFormSlice = createSlice({
    name: 'RegistrationForm',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
        setEducation: (state, action: PayloadAction<string>) => {
            state.education = action.payload;
        },
        setVarinat: (state, action: PayloadAction<string>) => {
            state.varinat = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setRepeatPassword: (state, action: PayloadAction<string>) => {
            state.repeat_password = action.payload;
        },
    },
});

export const { actions: RegistrationFormActions } = RegistrationFormSlice;
export const { reducer: RegistrationFormReducer } = RegistrationFormSlice;
