import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { plus, minus, plusBy } from "../modules/counter";
import { Counter } from "../components/Counter";

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onPlus = () => dispatch(plus());
    const onMinus = () => dispatch(minus());
    const onPlusBy = (diff: number) => dispatch(plusBy(diff));

    return (
        <Counter
            count={count}
            onPlus={onPlus}
            onMinus={onMinus}
            onPlusBy={onPlusBy}
        />
    );
}

export { CounterContainer };
