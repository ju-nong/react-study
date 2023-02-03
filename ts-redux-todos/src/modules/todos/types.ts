import { ActionType } from "typesafe-actions";
import { addTodo, toggleTodo, clearTodo, allActiveTodo } from "./actions";

const actions = { addTodo, toggleTodo, clearTodo, allActiveTodo };

type Todo = {
    id: number;
    text: string;
    isActive: boolean;
    done: boolean;
};

type TodosState = Todo[];

type TodosAction = ActionType<typeof actions>;

export type { Todo, TodosState, TodosAction };
