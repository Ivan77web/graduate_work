import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entites/User';
import { ModalRegistrationActions } from '@/widgets/modalRegistration';
import { RegistrationFormActions } from '@/entites/RegistrationForm';

export const registartionReq = createAsyncThunk<
    User,
    Omit<User, 'id'>,
    ThunkConfig<string>
>(
    'registartion',
    async (regData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/registration', regData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(RegistrationFormActions.reset());
            dispatch(userActions.setAuthData(response.data));
            dispatch(ModalRegistrationActions.close());

            return response.data;
        } catch (e: any) {
            console.error(e);
            return rejectWithValue(String(e.response.status));
        }
    },
);
