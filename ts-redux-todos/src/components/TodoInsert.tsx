import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
    addTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
} from "../modules/todos";
import { TodoActiveButton } from "./TodoActiveButton";

const TodoInsertStyled = styled.div`
    padding: 16px 16px 16px 0;
    display: flex;
    width: 100%;

    button.allCheckBtn {
        width: 10%;
        border: 0;
        background-color: transparent;
        color: #e6e6e6;
        font-size: 22px;
        font-weight: bold;
    }

    button.allCheckBtn.allChecked {
        color: #737373;
    }

    input {
        border: 0;
        outline: 0;
        background-color: transparent;
        line-height: 1.4em;
        font-size: 24px;
        width: 90%;
    }

    input::placeholder {
        color: #e6e6e6;
        font-style: italic;
    }
`;

function TodoInsert() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const isAllCheck = useMemo(
        () => todos.filter((todo) => !todo.done).every((todo) => todo.isActive),
        [todos],
    );

    const handleAddTodo = (text: string) => dispatch(addTodo(text));
    const handleAllActiveTodo = () => dispatch(allActiveTodo(isAllCheck));

    return (
        <TodoInsertStyled>
            <TodoActiveButton>All</TodoActiveButton>
            <input
                type="text"
                placeholder="What needs to be done?"
                ref={$input}
                // onKeyDown={enterChk}
                // onChange={typing}
            />
        </TodoInsertStyled>
    );
}

export { TodoInsert };
