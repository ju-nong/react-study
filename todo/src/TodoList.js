import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Todo = styled.ul`
    border-top: 1px solid #e6e6e6;
    list-style: none;
    width: 100%;
`;

const Item = styled.li`
    border-bottom: 1px solid #ededed;
    position: relative;
    font-size: 24px;
    padding: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        display: none;
    }

    input:checked + label {
        text-align: center;
        line-height: 40px;
        border-color: #cee4e0;
    }

    input:checked + label:before {
        content: "✔";
        color: #61c4b1;
    }

    label {
        position: relative;
        width: 40px;
        height: 40px;
        border: 2px solid #ededed;
        border-radius: 100%;
    }

    span {
        width: 80%;
        word-break: break-all;
        line-height: 40px;
        outline: 0;
    }

    button {
        outline: 0;
        border: 0;
        background-color: transparent;
        padding: 5px;
        visibility: hidden;
    }

    &:hover button {
        visibility: visible;
    }

    &:checked + label {
        text-align: center;
        line-height: 40px;
        border-color: #cee4e0;
    }

    &:checked + label:before {
        content: "✔";
        color: #61c4b1;
    }
`;

function List({ todo, removeTodo, editTodo, toggleState }) {
    const checkBox = useRef();

    useEffect(() => {
        checkBox.current.checked = todo.state;
        return () => {};
    }, [todo.state]);

    const [editable, setEditable] = useState(false);

    const edit = () => {
        console.log("hihi");
        setEditable(true);
    };

    const actionEdit = (event) => {
        setEditable(false);

        const content = event.target.innerText;

        if (content) {
            editTodo(todo.id, content);
        }
    };

    const enterCheck = (event) => {
        if (event.keyCode === 13) {
            setEditable(false);

            const content = event.target.innerText;

            if (content) {
                editTodo(todo.id, content);
            }
        }
    };

    const actionToggleState = (event) => {
        toggleState(todo.id, event.target.checked);
    };

    return (
        <Item>
            <input
                id={todo.id}
                type="checkbox"
                ref={checkBox}
                onChange={actionToggleState}
            />
            <label htmlFor={todo.id}></label>
            <span
                contentEditable={editable}
                onDoubleClick={edit}
                onBlur={actionEdit}
                onKeyDown={enterCheck}
                suppressContentEditableWarning={true}
            >
                {todo.content}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
        </Item>
    );
}

function TodoList({ todos, removeTodo, editTodo, toggleState }) {
    return (
        <Todo>
            {todos.map((todo) => (
                <List
                    todo={todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleState={toggleState}
                />
            ))}
        </Todo>
    );
}

const MemoryTodoList = React.memo(TodoList);

export { TodoList, MemoryTodoList, Item };
