import { combineReducers } from "redux";
import { todos } from "./todos/reducer";

const rootReducer = combineReducers({
    todos,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer as default };
export type { RootState };
