import { combineReducers } from "redux";
import { todos } from "./todos/reducer";
import { drag } from "./drag/reducer";

const rootReducer = combineReducers({
    todos,
    drag,
});

const logger = (store: any) => (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);

    const state = store.getState();
    console.log(state);

    // if (action.type === "todos/ADD_TODO") {
    //     localStorage.setItem("nextId", todos.at(-1).id + 1);
    // }

    // localStorage.setItem("todos", JSON.stringify(todos));

    return result;
};

export {};

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer as default, logger };
export type { RootState };
