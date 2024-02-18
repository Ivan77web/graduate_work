import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema2 } from '../types/CounterSchema';

const initialState: CounterSchema2 = {
    value: 0,
};

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: CounterActions2 } = CounterSlice;
export const { reducer: CounterReducer2 } = CounterSlice;
