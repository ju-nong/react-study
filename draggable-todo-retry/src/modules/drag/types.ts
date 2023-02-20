import { Todo, TodoTags } from "../todo/types";
import { setDrag, cleanDrag } from "./actions";

type DragState = { tag: TodoTags; index: number | null; todo: Todo } | null;

type DragAction = ReturnType<typeof setDrag> | ReturnType<typeof cleanDrag>;

export type { DragState, DragAction };
