import { State, Todo } from "./types";
import { DragOverState } from "../drag/types";

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

const editTodo = (todo: Todo, text: string) => ({
    type: EDIT_TODO,
    payload: {
        todo,
        text,
    },
});

const switchTodo = (todo: Todo, state: State, id: number) => ({
    type: SWITCH_TODO,
    payload: {
        todo,
        state,
        id,
    },
});

const removeTodo = (todo: Todo) => ({
    type: REMOVE_TODO,
    payload: {
        todo,
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
