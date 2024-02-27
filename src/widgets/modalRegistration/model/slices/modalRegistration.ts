import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalRegistrationSchema, Step } from '../types/ModalRegistrationSchema';

const initialState: ModalRegistrationSchema = {
    isOpen: false,
    step: 'first',
};

export const ModalRegistrationSlice = createSlice({
    name: 'ModalRegistration',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        setStep: (state, action: PayloadAction<Step>) => {
            state.step = action.payload;
        },
    },
});

export const { actions: ModalRegistrationActions } = ModalRegistrationSlice;
export const { reducer: ModalRegistrationReducer } = ModalRegistrationSlice;
