import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state.loginFeature.error;
export const getLoginLoading = (state: StateSchema) => state.loginFeature.isLoading;
