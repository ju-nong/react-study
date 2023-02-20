import { Todo, TodoTags } from "./types";

const ADD_TODO = "todo/ADD_TODO" as const;
const EDIT_TODO = "todo/EDIT_TODO" as const;
const SORT_TODO = "todo/SORT_TODO" as const;
const SWITCH_TODO = "todo/SWITCH_TODO" as const;
const REMOVE_TODO = "todo/REMOVE_TODO" as const;

const addTodo = (tag: TodoTags) => ({
    type: ADD_TODO,
    payload: {
        tag,
    },
});

const editTodo = (tag: TodoTags, id: number, text: string) => ({
    type: EDIT_TODO,
    payload: {
        tag,
        id,
        text,
    },
});

const sortTodo = (tag: TodoTags, todo: Todo, index: number) => ({
    type: SORT_TODO,
    payload: {
        tag,
        todo,
        index,
    },
});

const switchTodo = (
    fromTag: TodoTags,
    toTag: TodoTags,
    todo: Todo,
    index: number,
) => ({
    type: SWITCH_TODO,
    payload: {
        fromTag,
        toTag,
        todo,
        index,
    },
});

const removeTodo = (tag: TodoTags, id: number) => ({
    type: REMOVE_TODO,
    payload: {
        tag,
        id,
    },
});

export {
    ADD_TODO,
    EDIT_TODO,
    SORT_TODO,
    SWITCH_TODO,
    REMOVE_TODO,
    addTodo,
    editTodo,
    sortTodo,
    switchTodo,
    removeTodo,
};
