import { Todo, TodoTags } from "../todo/types";

const SET_DRAG = "drag/SET_DRAG" as const;
const CLEAN_DRAG = "drag/CLEAN_DRAG" as const;

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

export { SET_DRAG, CLEAN_DRAG, setDrag, cleanDrag };
