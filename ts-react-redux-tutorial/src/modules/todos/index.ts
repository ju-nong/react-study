import { todos } from "./reducer";
import * as actions from "./actions";
import * as types from "./types";

export default function () {
    const store = {
        reducer: todos,
        action: { ...actions },
        type: { ...types },
    };

    console.log(store);

    return store;
}
