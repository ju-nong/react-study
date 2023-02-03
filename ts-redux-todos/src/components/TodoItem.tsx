import React from "react";
import styled from "styled-components";

const TodoItemStyled = styled.li`
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

function TodoItem() {
    return (
        <TodoItemStyled>
            <input
                // id={todo.id}
                type="checkbox"
                // ref={checkBox}
                // onChange={actionToggleState}
            />
            {/* <label htmlFor={todo.id}></label> */}
            <label></label>
            <span
                // contentEditable={editable}
                // onDoubleClick={edit}
                // onBlur={actionEdit}
                // onKeyDown={enterCheck}
                suppressContentEditableWarning={true}
            >
                {/* {todo.content} */}
            </span>
            <button
            // onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </TodoItemStyled>
    );
}

export { TodoItem };
