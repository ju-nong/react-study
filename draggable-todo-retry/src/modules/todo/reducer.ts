import { ADD_TODO, EDIT_TODO, SWITCH_TODO, REMOVE_TODO } from "./actions";
import { TodoState, TodoAction } from "./types";

const initialState: TodoState = {
    todo: [],
    doing: [],
    done: [],
};

function todo(state: TodoState = initialState, { type, payload }: TodoAction) {}
