import {
    addTodo,
    editTodo,
    removeTodo,
    switchTodo,
    ADD_TODO,
    EDIT_TODO,
    SWITCH_TODO,
    REMOVE_TODO,
} from "./actions";

type State = "todo" | "doing" | "done";

type Actions =
    | typeof addTodo
    | typeof editTodo
    | typeof removeTodo
    | typeof switchTodo;

interface ActionReturn {
    type:
        | typeof ADD_TODO
        | typeof EDIT_TODO
        | typeof SWITCH_TODO
        | typeof REMOVE_TODO;
    payload: {
        type: State;
        beforeType?: State | undefined;
        id?: number | undefined;
        text?: string | undefined;
    };
}

type Todo = {
    id: number;
    text: string;
    state: State;
};

type Todos = Todo[];

const TodoState: Record<State, Todos> = {
    todo: [],
    doing: [],
    done: [],
};

const StateList: State[] = ["todo", "doing", "done"];

export { TodoState, StateList };
export type { Todo, Todos, State, Actions, ActionReturn };
