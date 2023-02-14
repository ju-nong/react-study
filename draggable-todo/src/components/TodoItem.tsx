import React from "react";
import styled from "@emotion/styled";
import { colorChange, bgChange } from "../utils/style";
import { Todo } from "../types";

interface ItemProps {
    todo: Todo;
}

const Item = styled.li`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    color: #2f415f;
    background-color: #fff;
    border-radius: 0.75rem;
    cursor: pointer;

    & > p {
        padding-bottom: 2rem;
    }

    ${colorChange("#2f415f")}
    ${bgChange("#fff")}
`;

function TodoItem({ todo }: ItemProps) {
    function handleDragStart(event: React.DragEvent<HTMLElement>) {
        event.dataTransfer.setData("item", JSON.stringify(todo));
    }

    return (
        <Item draggable={true} onDragStart={handleDragStart}>
            <p>{todo.text}</p>
        </Item>
    );
}

export { TodoItem };
