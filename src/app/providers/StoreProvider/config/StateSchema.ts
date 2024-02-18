import { CounterSchema } from '@/entites/Counter';
import { CounterSchema2 } from '@/entites/Counter2';

import {
    ReducersMapObject, AnyAction, CombinedState, EnhancedStore, Reducer,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    counter2: CounterSchema2;
    counter?: CounterSchema;
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