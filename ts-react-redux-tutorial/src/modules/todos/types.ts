import { ActionType } from "typesafe-actions";
import { addTodo, toggleTodo, removeTodo } from "./actions";

const actions = { addTodo, toggleTodo, removeTodo };

type TodosAction = ActionType<typeof actions>;

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

export type { TodosAction, Todo, TodosState };
