import React from "react";

type CounterProps = {
    count: number;
    onPlus: () => void;
    onMinus: () => void;
    onPlusBy: (diff: number) => void;
};

function Counter({ count, onPlus, onMinus, onPlusBy }: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
            <button onClick={() => onPlusBy(5)}>+5</button>
        </div>
    );
}

export { Counter };
