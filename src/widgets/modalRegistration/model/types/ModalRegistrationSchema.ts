export type Step = 'first' | 'second';

export interface ModalRegistrationSchema {
    isOpen: boolean;
    step: Step;
}
