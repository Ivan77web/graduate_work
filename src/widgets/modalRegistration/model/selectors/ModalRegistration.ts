import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsOpen = (state: StateSchema) => state.modalRegistration?.isOpen || false;
