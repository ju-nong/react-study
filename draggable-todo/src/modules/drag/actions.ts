import { State, Todo } from "../todos/types";

const ADD_DRAG = "drag/ADD_DRAG" as const;
const CLEAR_DRAG = "drag/CLEAR_DRAG" as const;
const SET_DRAG_OVER = "drag/SET_DRAG_OVER" as const;

const addDrag = (todo: Todo) => ({ type: ADD_DRAG, payload: { todo } });
const clearDrag = () => ({ type: CLEAR_DRAG, payload: {} });
const setDragOver = (id: number, state: State) => ({
    type: SET_DRAG_OVER,
    payload: { id, state },
});

export { ADD_DRAG, CLEAR_DRAG, SET_DRAG_OVER, addDrag, clearDrag, setDragOver };
