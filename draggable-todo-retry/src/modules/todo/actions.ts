import { Todo, TodoTags } from "./types";

const ADD_TODO = "todo/ADD_TODO" as const;
const EDIT_TODO = "todo/EDIT_TODO" as const;
const SWITCH_TODO = "todo/SWITCH_TODO" as const;
const REMOVE_TODO = "todo/REMOVE_TODO" as const;

const addTodo = (tag: TodoTags) => ({
    type: ADD_TODO,
    payload: {
        tag,
    },
});

const editTodo = (tag: TodoTags, id: number) => ({
    type: EDIT_TODO,
    payload: {
        tag,
        id,
    },
});

const switchTodo = (tag: TodoTags, todo: Todo) => ({
    type: SWITCH_TODO,
    payload: {
        tag,
        todo,
    },
});

const removeTodo = (todo: Todo) => ({
    type: REMOVE_TODO,
    payload: {
        todo,
    },
});

export {
    ADD_TODO,
    EDIT_TODO,
    SWITCH_TODO,
    REMOVE_TODO,
    addTodo,
    editTodo,
    switchTodo,
    removeTodo,
};
