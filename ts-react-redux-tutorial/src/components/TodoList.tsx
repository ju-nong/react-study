import React from "react";
import { Todo } from "../modules/todos";
import { TodoItem } from "./TodoItem";

type TodoItemProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoItemProps) {
    return todos.length === 0 ? (
        <p>등록된 항목이 없습니다.</p>
    ) : (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    );
}

export { TodoList };
