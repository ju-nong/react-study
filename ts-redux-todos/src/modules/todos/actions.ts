import { createAction, createStandardAction } from "typesafe-actions";
import { TodosState } from "./types";

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const CLEAR_TODO = "todos/CLEAR_TODO" as const;
const ALL_ACTIVE_TODO = "todos/ALL_ACTIVE_TODO" as const;

// const addTodo = createAction(
//     ADD_TODO,
//     (action) => (text: string) =>
//         action({ id: nextId++, text, isActive: false, done: false }),
// );
const addTodo = createStandardAction(ADD_TODO)<string>();
const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
const clearTodo = createStandardAction(CLEAR_TODO)<number>();
const allActiveTodo = createStandardAction(ALL_ACTIVE_TODO)<boolean>();

export {
    ADD_TODO,
    TOGGLE_TODO,
    CLEAR_TODO,
    ALL_ACTIVE_TODO,
    addTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
};
