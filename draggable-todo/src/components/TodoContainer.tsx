import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "../utils/style";
import { TodoItem } from "./TodoItem";
import { Todos, Todo, State } from "../types";
import { FiMoreHorizontal } from "react-icons/fi";

interface ContainerProps {
    todos: Todos;
    type: State;
    onSwitchTodo: (type: State, todo: Todo) => void;
    onAddTodo: (type: State) => void;
}

const ContainerStyled = styled.ul`
    flex: 1;
    color: #2f415f;
    background-color: #ebecf0;
    padding: 1.5rem;
    border-radius: 0.75rem;

    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #c2c8d1; /* 스크롤바의 색상 */
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #e6e8ec; /*스크롤바 뒷 배경 색상*/
    }
`;

const TitleStyled = styled.li`
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    font-weight: bold;

    ${colorChange("#2f415f")}

    & > span {
        cursor: pointer;
    }
`;

function TodoContainer({
    todos,
    type,
    onSwitchTodo,
    onAddTodo,
}: ContainerProps) {
    function handleDragOver(event: React.DragEvent<HTMLElement>) {
        event.preventDefault();
    }

    function handleDrop(event: React.DragEvent<HTMLElement>) {
        event.preventDefault();

        const todo = JSON.parse(event.dataTransfer.getData("item"));
        onSwitchTodo(type, todo);
    }

    return (
        <ContainerStyled onDragOver={handleDragOver} onDrop={handleDrop}>
            <TitleStyled>
                <span>{type}</span>
                <span>
                    <FiMoreHorizontal onClick={() => onAddTodo(type)} />
                </span>
            </TitleStyled>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ContainerStyled>
    );
}

export { TodoContainer };
