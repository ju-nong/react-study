import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

console.log(counter);

const rootReducer = combineReducers({
    counter,
    todos,
});

export { rootReducer as default };
