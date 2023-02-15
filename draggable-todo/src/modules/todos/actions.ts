import { State } from "./types";

const ADD_TODO = "todo/ADD_TODO" as const;
const EDIT_TODO = "todo/EDIT_TODO" as const;
const SWITCH_TODO = "todo/SWITCH_TODO" as const;
const REMOVE_TODO = "todo/REMOVE_TODO" as const;

const addTodo = (type: State) => ({
    type: ADD_TODO,
    payload: {
        type,
    },
});

const editTodo = (type: State, id: number, text: string) => ({
    type: EDIT_TODO,
    payload: {
        type,
        id,
        text,
    },
});

const switchTodo = (type: State, text: string) => ({
    type: SWITCH_TODO,
    payload: {
        type,
        text,
    },
});

const removeTodo = (type: State, id: number) => ({
    type: REMOVE_TODO,
    payload: {
        type,
        id,
    },
});

export { addTodo, editTodo, switchTodo, removeTodo };
