import { createSlice } from '@reduxjs/toolkit';

import { ModalLoginSchema } from '../types/ModalLoginSchema';

const initialState: ModalLoginSchema = {
    isOpen: false,
};

export const ModalLoginSlice = createSlice({
    name: 'ModalLogin',
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

export const { actions: ModalLoginActions } = ModalLoginSlice;
export const { reducer: ModalLoginReducer } = ModalLoginSlice;
