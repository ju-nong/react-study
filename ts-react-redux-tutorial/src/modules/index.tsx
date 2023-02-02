import { combineReducers } from "redux";
import { counter } from "./counter";
import { todos } from "./todos";

const rootReducer = combineReducers({ counter, todos });

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer as default };
export type { RootState };
