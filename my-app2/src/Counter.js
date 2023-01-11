import React, { useState } from "react";

export function Counter() {
    const [number, setNumber] = useState(0);

    function onIncrease() {
        setNumber((prev) => prev + 1);
    }

    function onDecrease() {
        setNumber((prev) => prev - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
