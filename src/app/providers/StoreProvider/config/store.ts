import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { ModalRegistrationReducer } from '@/widgets/modalRegistration';
import { RegistrationFormReducer } from '@/entites/RegistrationForm';
import { LoginFormReducer } from '@/entites/LoginForm';
import { ModalLoginReducer } from '@/widgets/modalLogin';
import { userReducer } from '@/entites/User';
import { loginReducer } from '@/features/login';
import { registartionReducer } from '@/features/registration';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        modalRegistration: ModalRegistrationReducer,
        registrationForm: RegistrationFormReducer,
        modalLogin: ModalLoginReducer,
        loginForm: LoginFormReducer,
        user: userReducer,
        loginFeature: loginReducer,
        registrationFeature: registartionReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];