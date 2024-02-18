import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux";
import { getCounter } from "../model/selectors/Counter";
import { useCallback } from "react";
import { CounterActions, CounterReducer } from "../model/slices/NewUserSlice";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
    counter: CounterReducer
};

export const Counter = () => {
    const counter = useSelector(getCounter);
    const dispatch = useAppDispatch();

    const onDecrement = useCallback(() => {
        dispatch(CounterActions.setValue(counter - 1));
    }, [counter])

    const onIncrement = useCallback(() => {
        dispatch(CounterActions.setValue(counter + 1));
    }, [counter])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <p>{counter}</p>

            <button onClick={onDecrement}>
                -
            </button>
            <button onClick={onIncrement}>
                +
            </button>
        </DynamicModuleLoader>
    )
}