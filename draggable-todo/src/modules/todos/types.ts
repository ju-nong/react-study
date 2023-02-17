import { addTodo, editTodo, removeTodo, switchTodo } from "./actions";

type State = "todo" | "doing" | "done";

type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof editTodo>
    | ReturnType<typeof switchTodo>
    | ReturnType<typeof removeTodo>;

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

type Test = {
    [S in State]: Todo;
};

export { TodoState, StateList };
export type { Todo, Todos, State, TodosAction };
