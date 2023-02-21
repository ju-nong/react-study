import { combineReducers } from "redux";
import { todo } from "./todo/reducer";
import { drag } from "./drag/reducer";

const rootReducer = combineReducers({
    todo,
    drag,
});

const logger = (store: any) => (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);

    const state = store.getState();

    return result;
};

type RootState = ReturnType<typeof rootReducer>;
export { rootReducer as default, logger };
export type { RootState };
