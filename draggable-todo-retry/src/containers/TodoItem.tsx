import React, { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { Todo, TodoTags } from "../modules/todo/types";
import { colorChange, bgChange } from "../utils/style";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../modules/todo/actions";
import { setOver, setDrag } from "../modules/drag/actions";
import { RootState } from "../modules";
import { DragState } from "../modules/drag/types";

const ContainerStyled = styled.li`
    width: 100%;
    cursor: pointer;

    transition: all 0.5s;
    &.isOver {
        padding-top: 50%;
    }
`;

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
    index: number;
}

function TodoItem({ tag, todo, index }: TodoItemProps) {
    const [isOver, setIsOver] = useState<boolean>(false);

    const drag: DragState = useSelector((state: RootState) => state.drag);
    const dispatch = useDispatch();
    const cloneDrag = useMemo<DragState>(() => drag, [drag]);

    function edting(event: React.ChangeEvent<HTMLDivElement>) {
        const text = event.target.innerText;
        if (todo.text !== text) {
            dispatch(editTodo(tag, todo.id, text));
        }
    }

    function handleDragEnter() {
        dispatch(setOver(index));

        if (!drag) {
            return;
        }

        if (drag.todo.id !== todo.id || drag.tag !== tag) {
            setIsOver(true);
        }
    }

    useEffect(() => {
        if (!cloneDrag) {
            setIsOver(false);
            return;
        }

        if (cloneDrag.tag === tag && cloneDrag.index !== index) {
            setIsOver(false);
        }

        if (cloneDrag.tag !== tag && cloneDrag.index !== index) {
            setIsOver(false);
        }
    }, [cloneDrag, isOver]);

    return (
        <ContainerStyled
            className={`${isOver ? "isOver" : ""}`}
            onDragEnter={handleDragEnter}
        >
            <ItemStyled
                contentEditable="true"
                suppressContentEditableWarning={true}
                draggable={true}
                onDragStart={() => dispatch(setDrag(tag, todo))}
                onBlur={edting}
            >
                {todo.text}
            </ItemStyled>
        </ContainerStyled>
    );
}

export { TodoItem };
