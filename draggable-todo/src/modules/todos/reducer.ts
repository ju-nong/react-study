import { ADD_TODO, EDIT_TODO, SWITCH_TODO, REMOVE_TODO } from "./actions";
import { TodoState, ActionReturn, Todos } from "./types";

const initialState = TodoState;

function todos(state = initialState, action: ActionReturn) {
    const { type, payload } = action;
    const actionType = payload?.type;
    switch (type) {
        case ADD_TODO:
            const editTodo: Todos = state[actionType];
            return {
                ...state,
                [actionType]: editTodo.concat({
                    id: (editTodo.at(-1)?.id ?? 0) + 1,
                    text: "",
                    state: actionType,
                }),
            };
        case EDIT_TODO:
            return {
                ...state,
                [actionType]: state[actionType].map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, text: payload.text }
                        : todo,
                ),
            };
        case SWITCH_TODO:
            const afterTodo: Todos = state[actionType];
            if (
                payload.beforeType &&
                typeof payload.text === "string" &&
                payload.id
            ) {
                return {
                    ...state,
                    [payload.beforeType]: state[payload.beforeType].filter(
                        (todo) => todo.id !== payload.id,
                    ),
                    [actionType]: afterTodo.concat({
                        id: (afterTodo.at(-1)?.id ?? 0) + 1,
                        text: payload.text,
                        state: actionType,
                    }),
                };
            } else {
                return state;
            }
        case REMOVE_TODO:
            return {
                ...state,
                [actionType]: state[actionType].filter(
                    (todo) => todo.id !== payload.id,
                ),
            };
        default:
            return state;
    }
}

export { todos };
