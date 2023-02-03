import {
    createStandardAction,
    ActionType,
    createReducer,
} from "typesafe-actions";

const PLUS = "counter/PLUS" as const;
const MINUS = "counter/MINUS" as const;
const PLUS_BY = "counter/SET_DIFF" as const;

// const plus = () => ({ type: PLUS });
// const minus = () => ({ type: MINUS });
// const plusBy = (diff: number) => ({ type: PLUS_BY, payload: diff });

const plus = createStandardAction(PLUS)();
const minus = createStandardAction(MINUS)();
const plusBy = createStandardAction(PLUS_BY)<number>();

const actions = { plus, minus, plusBy };

type CounterAction = ActionType<typeof actions>;

// type CounterAction =
//     | ReturnType<typeof plus>
//     | ReturnType<typeof minus>
//     | ReturnType<typeof plusBy>;

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [PLUS]: (state) => ({ count: state.count + 1 }),
    [MINUS]: (state) => ({ count: state.count - 1 }),
    [PLUS_BY]: (state, action) => ({ count: state.count + action.payload }),
});

// function counter(state: CounterState = initialState, action: CounterAction) {
//     switch (action.type) {
//         case PLUS:
//             return { count: state.count + 1 };
//         case MINUS:
//             return { count: state.count - 1 };
//         case PLUS_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// }

export { plus, minus, plusBy, counter };
