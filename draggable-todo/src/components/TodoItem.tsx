import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { colorChange, bgChange } from "../utils/style";
import { Todo } from "../types";
import { State } from "../types";

interface ItemProps {
    todo: Todo;
    onEditTodo: (type: State, id: number, text: string) => void;
}

interface styledProps {
    marginTop: number;
}

const Item = styled.li<styledProps>`
    width: 100%;
    word-break: break-all;
    padding: 1rem;
    color: #2f415f;
    background-color: #fff;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.5s;

    &.empty {
        color: #888;
    }

    ${colorChange("#2f415f")}
    ${bgChange("#fff")}

    margin-top:${(props) => `calc(1rem + ${props.marginTop}px)`}
`;

function TodoItem({ todo, onEditTodo }: ItemProps) {
    const [marginTop, setMarginTop] = useState(0);

    function handleDragStart(event: React.DragEvent<HTMLElement>) {
        event.dataTransfer.setData("item", JSON.stringify(todo));
    }

    function handleFocus(event: React.ChangeEvent<HTMLLIElement>) {
        if (!todo.text.length) {
            event.target.innerText = "";
        }
    }

    function handleBlur(event: React.ChangeEvent<HTMLLIElement>) {
        const text = event.target.innerText;

        onEditTodo(todo.state, todo.id, text);
        if (!text.length) {
            event.target.innerText = "Empty...";
        }
    }

    function handleDragEnter(event: React.DragEvent<HTMLLIElement>) {
        setMarginTop(53);
    }

    function handleDragLeave(event: React.DragEvent<HTMLLIElement>) {
        console.log("hih");
        /* setMarginTop(0); */
    }

    return (
        <Item
            contentEditable="true"
            suppressContentEditableWarning={true}
            draggable={true}
            onDragStart={handleDragStart}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragLeave}
            className={todo.text.length > 0 ? "" : "empty"}
            marginTop={marginTop}
        >
            {todo.text.length > 0 ? todo.text : "Empty..."}
        </Item>
    );
}

export { TodoItem };
