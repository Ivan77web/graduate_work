import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entites/User';
import { ModalLoginActions } from '@/widgets/modalLogin';

interface LoginReqProps {
    login: string;
    password: string;
}

export const loginReq = createAsyncThunk<
    User,
    LoginReqProps,
    ThunkConfig<string>
>(
    'login/loginByLogin',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));
            dispatch(ModalLoginActions.close());

            return response.data;
        } catch (e: any) {
            console.error(e);
            return rejectWithValue(String(e.response.status));
        }
    },
);
