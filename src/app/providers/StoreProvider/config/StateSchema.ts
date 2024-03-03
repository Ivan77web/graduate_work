import { LoginFormSchema } from '@/entites/LoginForm';
import { RegistrationFormSchema } from '@/entites/RegistrationForm';
import { SectionsSchema } from '@/entites/Sections';
import { UserSchema } from '@/entites/User';
import { LoginSchema } from '@/features/login';
import { RegistrationSchema } from '@/features/registration';
import { ModalLoginSchema } from '@/widgets/modalLogin';
import { ModalRegistrationSchema } from '@/widgets/modalRegistration';

import {
    ReducersMapObject, AnyAction, CombinedState, EnhancedStore, Reducer,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// TODO Заасинхронить редьюсеры

export interface StateSchema {
    modalRegistration: ModalRegistrationSchema;
    registrationForm: RegistrationFormSchema;
    modalLogin: ModalLoginSchema;
    loginForm: LoginFormSchema;
    user: UserSchema;
    loginFeature: LoginSchema;
    registrationFeature: RegistrationSchema;
    sections: SectionsSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}