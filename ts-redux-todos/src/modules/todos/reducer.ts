import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, CLEAR_TODO, ALL_ACTIVE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

let nextId = 1;

const initialTodos: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialTodos, {
    [ADD_TODO]: (state, { payload: text }) =>
        state.concat({ id: nextId++, text, isActive: false, done: false }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map((todo) =>
            todo.id === id ? { ...todo, isActive: !todo.isActive } : todo,
        ),
    [CLEAR_TODO]: (state, { payload: id }) =>
        state.filter((todo) => todo.id !== id),
    [ALL_ACTIVE_TODO]: (state, { payload: active }) =>
        state.map((todo) => ({
            ...todo,
            isActive: !active,
        })),
});

export { todos };
