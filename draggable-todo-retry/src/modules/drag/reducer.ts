import { SET_DRAG, CLEAN_DRAG, SET_OVER, CLEAN_OVER } from "./actions";
import { DragState, DragAction } from "./types";

const initialState: DragState = null;

function drag(state = initialState, action: DragAction) {
    switch (action.type) {
        case SET_DRAG:
            return { ...state, ...action.payload };
        case CLEAN_DRAG:
            return null;
        case SET_OVER:
            return { ...state, ...action.payload };
        case CLEAN_OVER:
            return { ...state, index: null };
        default:
            return state;
    }
}

export { drag };
