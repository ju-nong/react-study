import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "../utils/style";
import { TodoItem } from "./TodoItem";
import { Todos, State } from "../modules/todos/types";
import { FiMoreHorizontal } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { switchTodo, addTodo } from "../modules/todos/actions";
import { RootState } from "../modules";
import { clearDrag } from "../modules/drag/actions";

interface ContainerProps {
    todos: Todos;
    type: State;
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

function TodoContainer({ todos, type }: ContainerProps) {
    const drag = useSelector((state: RootState) => state.drag);
    const dispatch = useDispatch();

    function handleDragOver(event: React.DragEvent<HTMLElement>) {
        event.preventDefault();
    }

    function handleDrop(event: React.DragEvent<HTMLElement>) {
        event.preventDefault();

        const { todo, dragOver } = drag;

        if (!todo || todo.id === dragOver?.id) {
            return;
        }

        dispatch(switchTodo(todo, type, dragOver ? dragOver.id : todos.length));
        dispatch(clearDrag());
    }

    const eventDisable = () => false;

    return (
        <ContainerStyled
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onCopy={eventDisable}
            onCut={eventDisable}
            onPaste={eventDisable}
        >
            <TitleStyled>
                <span>{type}</span>
                <span>
                    <FiMoreHorizontal onClick={() => dispatch(addTodo(type))} />
                </span>
            </TitleStyled>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} drag={drag} />
            ))}
        </ContainerStyled>
    );
}

export { TodoContainer };
