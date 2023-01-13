import React, { useState, useRef, useEffect } from "react";

function List({ todo, removeTodo, editTodo, toggleState }) {
    const checkBox = useRef();

    useEffect(() => {
        checkBox.current.checked = todo.state;
        return () => {};
    }, [todo.state]);

    const [editable, setEditable] = useState(false);

    const edit = (event) => {
        setEditable(true);
    };

    const actionEdit = (event) => {
        setEditable(false);

        const content = event.target.innerText;

        if (content) {
            editTodo(todo.id, content);
        }
    };

    const actionToggleState = (event) => {
        toggleState(todo.id, event.target.value);
    };

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    ref={checkBox}
                    onChange={actionToggleState}
                />
            </label>
            <span
                contentEditable={editable}
                onDoubleClick={edit}
                onBlur={actionEdit}
            >
                {todo.content}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
    );
}

function TodoList({ todos, removeTodo, editTodo, toggleState }) {
    return (
        <ul>
            {todos.map((todo) => (
                <List
                    todo={todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleState={toggleState}
                />
            ))}
        </ul>
    );
}

const MemoryTodoList = React.memo(TodoList);

export { TodoList, MemoryTodoList };
