import * as actions from "./actions";

type State = "todo" | "doing" | "done";

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
export type { Todo, Todos, State };
