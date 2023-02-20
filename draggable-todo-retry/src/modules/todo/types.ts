import { addTodo, editTodo, switchTodo, removeTodo } from "./actions";

type Todo = {
    id: number;
    text: string;
    index: number;
};

type TodoTags = "todo" | "doing" | "done";

type TodoState = { [Tag in TodoTags]: Todo[] };

type TodoAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof editTodo>
    | ReturnType<typeof switchTodo>
    | ReturnType<typeof removeTodo>;

export type { Todo, TodoTags, TodoState, TodoStateList, TodoAction };
