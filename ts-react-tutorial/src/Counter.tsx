import { useState, useReducer } from "react";

// type Infomation = {
//     name: string;
//     age: number;
// };

type Action = { type: "PLUS" } | { type: "MINUS" };

function reducer(state: number, action: Action) {
    switch (action.type) {
        case "PLUS":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            throw new Error("Unhandled action");
    }
}

function Counter() {
    // const [infomation, setInfomaton] = useState<Infomation | null>(null);

    const [state, dispatch] = useReducer(reducer, 0);

    const onPlus = () => dispatch({ type: "PLUS" });
    const onMinus = () => dispatch({ type: "MINUS" });

    return (
        <div>
            <h1>{state}</h1>
            <div>
                <button onClick={onPlus}>+1</button>
                <button onClick={onMinus}>-1</button>
            </div>
        </div>
    );
}

export { Counter };
