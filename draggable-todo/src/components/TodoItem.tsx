import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { colorChange, bgChange } from "../utils/style";
import { Todo } from "../modules/todos/types";
import { useDispatch } from "react-redux";
import { editTodo } from "../modules/todos/actions";
import { RootState } from "../modules";
import { addDrag, setDragOver } from "../modules/drag/actions";
import { DragState } from "../modules/drag/types";

interface ItemProps {
    todo: Todo;
    drag: DragState;
}

interface styledProps {
    paddingTop: number;
}

const ItemContainer = styled.li<styledProps>`
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;
    padding-top: ${(props) => `calc(1rem + ${props.paddingTop}px)`};
`;

const Item = styled.div`
    word-break: break-all;
    padding: 1rem;
    color: #2f415f;
    background-color: #fff;
    border-radius: 0.75rem;

    ${colorChange("#2f415f")}
    ${bgChange("#fff")}
`;

function TodoItem({ todo, drag }: ItemProps) {
    const textContainer = useRef<HTMLDivElement>(null);
    const { id, state, text } = todo;
    const [paddingTop, setPaddingTop] = useState(0);

    const dispatch = useDispatch();

    function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
        dispatch(addDrag(todo));
    }

    function handleFocus(event: React.ChangeEvent<HTMLDivElement>) {
        if (!text.length && textContainer.current) {
            textContainer.current.innerText = "";
        }
    }

    function handleBlur(event: React.ChangeEvent<HTMLDivElement>) {
        if (textContainer.current) {
            dispatch(editTodo(todo, textContainer.current.innerText));
        }
    }

    function isOnDrag(callback: Function) {
        const dragTodo = drag.todo;
        if (!dragTodo) {
            return;
        }

        const { id: dragId, text: dragText, state: dragState } = dragTodo;

        if (state == dragState) {
            if (id !== dragId) {
                callback();
            }
        } else {
            callback();
        }
    }

    function handleDragOver(event: React.DragEvent<HTMLLIElement>) {
        dispatch(setDragOver(todo.id, todo.state));
        isOnDrag(() => setPaddingTop(53));
    }

    function handleDragLeave(event: React.DragEvent<HTMLLIElement>) {
        isOnDrag(() => setPaddingTop(0));
    }

    useEffect(() => {
        if (!drag.todo) {
            setPaddingTop(0);
        }
    }, [drag.todo]);

    return (
        <ItemContainer
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            paddingTop={paddingTop}
        >
            <Item
                ref={textContainer}
                contentEditable="true"
                suppressContentEditableWarning={true}
                draggable={true}
                onDragStart={handleDragStart}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {text}
            </Item>
        </ItemContainer>
    );
}

export { TodoItem };
