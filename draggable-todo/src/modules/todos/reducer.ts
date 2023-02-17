import { ADD_TODO, EDIT_TODO, SWITCH_TODO, REMOVE_TODO } from "./actions";
import { TodoState, TodosAction, Todos } from "./types";

const initialState = TodoState;

function todos(
    state = initialState,
    { type, payload }: TodosAction,
): typeof state {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                [payload.type]: state[payload.type]
                    .concat({
                        id: 0,
                        text: "",
                        state: payload.type,
                    })
                    .map((todo, index) => ({ ...todo, id: index + 1 })),
            };
        case EDIT_TODO:
            return {
                ...state,
                [payload.todo.state]: state[payload.todo.state].map((todo) =>
                    todo.id === payload.todo.id
                        ? { ...todo, text: payload.text }
                        : todo,
                ),
            };
        case SWITCH_TODO:
            const updateTodo = [...state[payload.state]];
            updateTodo.splice(payload.id - 1, 0, payload.todo);
            return {
                ...state,
                [payload.todo.state]: state[payload.todo.state]
                    .filter((todo) => todo.id !== payload.todo.id)
                    .map((todo, index) => ({ ...todo, id: index + 1 })),
                [payload.state]: updateTodo.map((todo, index) => ({
                    ...todo,
                    id: index + 1,
                })),
            };
        case REMOVE_TODO:
            return {
                ...state,
                [payload.todo.state]: state[payload.todo.state]
                    .filter((todo) => todo.id !== payload.todo.id)
                    .map((todo, index) => ({ ...todo, id: index + 1 })),
            };
        default:
            return state;
    }
}

export { todos };
