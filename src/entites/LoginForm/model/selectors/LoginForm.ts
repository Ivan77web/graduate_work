import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginForm = (state: StateSchema) => state.loginForm;
export const getLogin = (state: StateSchema) => state.loginForm.login;
export const getPassword = (state: StateSchema) => state.loginForm.password;
