import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationError = (state: StateSchema) => state.registrationFeature.error;
export const getRegistrationLoading = (state: StateSchema) => state.registrationFeature.isLoading;
