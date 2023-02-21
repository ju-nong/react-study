import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "../utils/style";
import { FiMoreHorizontal } from "react-icons/fi";
import { TodoItem } from "./TodoItem";
import { Todo, TodoTags } from "../modules/todo/types";
import { useDispatch } from "react-redux";
import { addTodo, sortTodo, switchTodo } from "../modules/todo/actions";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { DragState } from "../modules/drag/types";
import { cleanDrag } from "../modules/drag/actions";

const ContainerStyled = styled.div`
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

const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    gap: 1rem;
`;

interface TodoContainerProps {
    tag: TodoTags;
    todos: Todo[];
}

function TodoContainer({ tag, todos }: TodoContainerProps) {
    const drag: DragState = useSelector((state: RootState) => state.drag);
    const dispatch = useDispatch();

    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
    }

    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();

        if (!drag) {
            dispatch(cleanDrag());
            return;
        }

        if (tag === drag.tag) {
            if (drag.index === null) {
                dispatch(cleanDrag());
                return;
            }

            dispatch(sortTodo(tag, drag.todo, drag.index));
        } else {
            dispatch(switchTodo(drag.tag, tag, drag.todo, drag.index ?? -1));
        }

        dispatch(cleanDrag());
    }

    return (
        <ContainerStyled onDragOver={handleDragOver} onDrop={handleDrop}>
            <TitleStyled>
                <span>{tag}</span>
                <span>
                    <FiMoreHorizontal onClick={() => dispatch(addTodo(tag))} />
                </span>
            </TitleStyled>
            <ListStyled>
                {todos.map((todo, index) => (
                    <TodoItem
                        tag={tag}
                        todo={todo}
                        index={index}
                        key={todo.id}
                    />
                ))}
            </ListStyled>
        </ContainerStyled>
    );
}

export { TodoContainer };
