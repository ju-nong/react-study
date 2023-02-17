import { State, ActionReturn } from "./types";

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

const editTodo = (type: State, id: number, text: string): ActionReturn => ({
    type: EDIT_TODO,
    payload: {
        type,
        id,
        text,
    },
});

const switchTodo = (
    beforeType: State,
    id: number,
    text: string,
    type: State,
): ActionReturn => ({
    type: SWITCH_TODO,
    payload: {
        beforeType,
        id,
        text,
        type,
    },
});

const removeTodo = (type: State, id: number): ActionReturn => ({
    type: REMOVE_TODO,
    payload: {
        type,
        id,
    },
});

export {
    addTodo,
    editTodo,
    switchTodo,
    removeTodo,
    ADD_TODO,
    EDIT_TODO,
    SWITCH_TODO,
    REMOVE_TODO,
};
