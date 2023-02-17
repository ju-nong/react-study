import { Todo } from "../todos/types";
import { ADD_DRAG, CLEAR_DRAG, SET_DRAG_OVER } from "./actions";
import { DragState, DragAction } from "./types";

const initialDrag: DragState = { todo: null, dragOver: null };

function drag(state: DragState = initialDrag, action: DragAction): DragState {
    switch (action.type) {
        case ADD_DRAG:
            return { ...state, todo: action.payload.todo };
        case CLEAR_DRAG:
            return { todo: null, dragOver: null };
        case SET_DRAG_OVER:
            return { ...state, dragOver: { ...action.payload } };
        default:
            return state;
    }
}

export { drag };
