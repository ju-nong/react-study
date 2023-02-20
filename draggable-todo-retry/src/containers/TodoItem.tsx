import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Todo, TodoTags } from "../modules/todo/types";
import { colorChange, bgChange } from "../utils/style";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../modules/todo/actions";
import { cleanDrag, setDrag } from "../modules/drag/actions";
import { RootState } from "../modules";
import { DragState } from "../modules/drag/types";

const ContainerStyled = styled.li`
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;
`;
// padding-top: ${(props) => `calc(1rem + ${props.paddingTop}px)`};

const ItemStyled = styled.div`
    word-break: break-all;
    padding: 1rem;
    color: #2f415f;
    background-color: #fff;
    border-radius: 0.75rem;

    ${colorChange("#2f415f")}
    ${bgChange("#fff")}
`;

interface TodoItemProps {
    tag: TodoTags;
    todo: Todo;
}

function TodoItem({ tag, todo }: TodoItemProps) {
    const drag: DragState = useSelector((state: RootState) => state.drag);
    const dispatch = useDispatch();

    const itemElement = useRef<HTMLDivElement>(null);

    function edting(event: React.ChangeEvent<HTMLDivElement>) {
        const text = event.target.innerText;
        if (todo.text !== text) {
            dispatch(editTodo(tag, todo.id, text));
        }
    }

    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();

        console.log(drag);
    }

    return (
        <ContainerStyled>
            <ItemStyled
                ref={itemElement}
                contentEditable="true"
                suppressContentEditableWarning={true}
                draggable={true}
                onDragStart={() => dispatch(setDrag(tag, todo))}
                onDragEnd={() => dispatch(cleanDrag())}
                onBlur={edting}
            >
                {todo.text}
            </ItemStyled>
        </ContainerStyled>
    );
}

export { TodoItem };
