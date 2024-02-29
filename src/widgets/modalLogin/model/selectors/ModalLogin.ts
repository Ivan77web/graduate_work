import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsOpen = (state: StateSchema) => state.modalLogin.isOpen;
