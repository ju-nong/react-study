import { Todo, TodoTags } from "../todo/types";
import { setDrag, cleanDrag, setOver, cleanOver } from "./actions";

type DragState = { tag: TodoTags; index: number | null; todo: Todo } | null;

type DragAction =
    | ReturnType<typeof setDrag>
    | ReturnType<typeof cleanDrag>
    | ReturnType<typeof setOver>
    | ReturnType<typeof cleanOver>;

export type { DragState, DragAction };
