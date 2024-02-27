import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationForm = (state: StateSchema) => state.registrationForm;
export const getName = (state: StateSchema) => state.registrationForm.name;
export const getAge = (state: StateSchema) => state.registrationForm.age;
export const getEducation = (state: StateSchema) => state.registrationForm.education;
export const getVarinat = (state: StateSchema) => state.registrationForm.varinat;
export const getGender = (state: StateSchema) => state.registrationForm.gender;
export const getLogin = (state: StateSchema) => state.registrationForm.login;
export const getPassword = (state: StateSchema) => state.registrationForm.password;
export const getRepeatPassword = (state: StateSchema) => state.registrationForm.repeat_password;
