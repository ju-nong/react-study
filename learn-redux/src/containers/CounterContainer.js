import { Counter } from "@components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { plus, minus, setDiff } from "@modules/counter";

function CounterContainer() {
    const { number, diff } = useSelector(
        (state) => ({
            number: state.counter.number,
            diff: state.counter.diff,
        }),
        shallowEqual,
    );

    const dispath = useDispatch();

    const onPlus = () => dispath(plus());
    const onMinus = () => dispath(minus());
    const onSetDiff = (diff) => dispath(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onPlus={onPlus}
            onMinus={onMinus}
            onSetDiff={onSetDiff}
        />
    );
}

export { CounterContainer };
