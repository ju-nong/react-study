import {
    ADD_TODO,
    EDIT_TODO,
    SORT_TODO,
    SWITCH_TODO,
    REMOVE_TODO,
} from "./actions";
import { TodoState, TodoAction } from "./types";

const initialState: TodoState = {
    todo: [],
    doing: [],
    done: [],
};

function todo(state: TodoState = initialState, { type, payload }: TodoAction) {
    switch (type) {
        case ADD_TODO: {
            const tag = payload.tag;
            const target = state[tag];
            return {
                ...state,
                [tag]: target.concat({
                    id: target.length,
                    text: "",
                }),
            };
        }
        case EDIT_TODO: {
            const { tag, id, text } = payload;
            return {
                ...state,
                [tag]: state[tag].map((todo) =>
                    todo.id === id ? { ...todo, text } : todo,
                ),
            };
        }
        case SORT_TODO: {
            const { tag, todo, index } = payload;
            const target = state[tag].filter((clone) => clone.id !== todo.id);

            return {
                ...state,
                [tag]: [
                    ...target.slice(0, index),
                    todo,
                    ...target.slice(index, target.length),
                ],
            };
        }
        case SWITCH_TODO: {
            const { fromTag, toTag, todo, index } = payload;
            const toTarget = state[toTag];
            const fromTarget = state[fromTag].filter(
                (from) => from.id !== todo.id,
            );

            const flag = index === -1 ? toTarget.length : index;

            return {
                ...state,
                [toTag]: [
                    ...toTarget.slice(0, flag),
                    todo,
                    ...toTarget.slice(flag, toTarget.length),
                ].map((_, index) => ({ ..._, id: index })),
                [fromTag]: fromTarget,
            };
        }
        case REMOVE_TODO: {
            const { tag, id } = payload;

            return {
                ...state,
                [tag]: state[tag].filter((todo) => todo.id !== id),
            };
        }
        default:
            return state;
    }
}

export { todo };
