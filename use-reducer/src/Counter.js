import React, { useState, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "PLUS":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const action = (type) => {
        dispatch({ type });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => action("PLUS")}>+1</button>
            <button onClick={() => action("MINUS")}>-1</button>
        </div>
    );
}

export { Counter };
