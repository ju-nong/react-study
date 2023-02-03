import { createAction, createStandardAction } from "typesafe-actions";

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

const addTodo = createAction(
    ADD_TODO,
    (action) => (text: string) =>
        action({
            id: nextId++,
            text,
        }),
);

const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
const removeTodo = createStandardAction(REMOVE_TODO)<number>();

export { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, addTodo, toggleTodo, removeTodo };
