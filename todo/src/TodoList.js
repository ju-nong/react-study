import React from "react";

function List({ todo, removeTodo }) {
    return (
        <li>
            <label>
                <input type="checkbox" />
            </label>
            <span>{todo.id}</span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
    );
}

function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <List todo={todo} key={todo.id} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export const MemoryTodoList = React.memo(TodoList);

export { TodoList };
