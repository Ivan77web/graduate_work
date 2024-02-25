import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalRegistrationSchema } from '../types/ModalRegistrationSchema';

const initialState: ModalRegistrationSchema = {
    isOpen: false
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
    },
});

export const { actions: ModalRegistrationActions } = ModalRegistrationSlice;
export const { reducer: ModalRegistrationReducer } = ModalRegistrationSlice;
