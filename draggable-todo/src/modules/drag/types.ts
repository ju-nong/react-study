import { Todo } from "../todos/types";
import { addDrag, clearDrag, setDragOver } from "./actions";

type DragOverState = {
    id: number;
    state: string;
} | null;

type DragState = { todo: Todo | null; dragOver: DragOverState };

type DragAction =
    | ReturnType<typeof addDrag>
    | ReturnType<typeof clearDrag>
    | ReturnType<typeof setDragOver>;

export type { DragOverState, DragState, DragAction };
