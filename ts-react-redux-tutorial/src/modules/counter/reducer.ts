import { createReducer } from "typesafe-actions";
import { PLUS, MINUS, PLUS_BY } from "./actions";
import { CounterAction, CounterState } from "./types";

const initialState: CounterState = {
    count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [PLUS]: (state) => ({ count: state.count + 1 }),
    [MINUS]: (state) => ({ count: state.count - 1 }),
    [PLUS_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export { counter };
