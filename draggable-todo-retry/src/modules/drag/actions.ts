import { Todo, TodoTags } from "../todo/types";

const SET_DRAG = "drag/SET_DRAG" as const;
const CLEAN_DRAG = "drag/CLEAN_DRAG" as const;
const SET_OVER = "drag/SET_OVER" as const;
const CLEAN_OVER = "drag/CLEAN_OVER" as const;

const setDrag = (tag: TodoTags, todo: Todo) => ({
    type: SET_DRAG,
    payload: {
        tag,
        todo,
    },
});

const cleanDrag = () => ({
    type: CLEAN_DRAG,
});

const setOver = (index: number) => ({
    type: SET_OVER,
    payload: {
        index,
    },
});

const cleanOver = () => ({
    type: CLEAN_OVER,
});

export {
    SET_DRAG,
    CLEAN_DRAG,
    SET_OVER,
    CLEAN_OVER,
    setDrag,
    cleanDrag,
    setOver,
    cleanOver,
};
