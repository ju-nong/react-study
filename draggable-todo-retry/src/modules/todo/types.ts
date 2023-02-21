import { addTodo, editTodo, sortTodo, switchTodo, removeTodo } from "./actions";

type Todo = {
    id: number;
    text: string;
};

type TodoTags = "todo" | "doing" | "done";

type TodoState = { [Tag in TodoTags]: Todo[] };

type TodoAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof editTodo>
    | ReturnType<typeof sortTodo>
    | ReturnType<typeof switchTodo>
    | ReturnType<typeof removeTodo>;

export type { Todo, TodoTags, TodoState, TodoAction };
