import { SET_DRAG, CLEAN_DRAG } from "./actions";
import { DragState, DragAction } from "./types";

const initialState: DragState = null;

function drag(state = initialState, action: DragAction) {
    switch (action.type) {
        case SET_DRAG:
            return { ...action.payload };
        case CLEAN_DRAG:
            return null;
        default:
            return state;
    }
}

export { drag };
