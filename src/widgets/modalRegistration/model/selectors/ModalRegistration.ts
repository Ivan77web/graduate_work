import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsOpen = (state: StateSchema) => state.modalRegistration?.isOpen || false;
export const getStep = (state: StateSchema) => state.modalRegistration?.step || 'first';
