import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux";
import { getCounter } from "../model/selectors/Counter";
import { useCallback } from "react";
import { CounterActions2 } from "../model/slices/NewUserSlice";

export const Counter2 = () => {
    const counter = useSelector(getCounter);
    const dispatch = useAppDispatch();

    const onDecrement = useCallback(() => {
        dispatch(CounterActions2.setValue(counter - 1));
    }, [counter])

    const onIncrement = useCallback(() => {
        dispatch(CounterActions2.setValue(counter + 1));
    }, [counter])

    return (
        <div>
            <p>{counter}</p>

            <button onClick={onDecrement}>
                -
            </button>
            <button onClick={onIncrement}>
                +
            </button>
        </div>
    )
}