import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const TodoListStyled = styled.ul`
    border-top: 1px solid #e6e6e6;
    list-style: none;
    width: 100%;
`;

function TodoList() {
    return <TodoListStyled></TodoListStyled>;
}

export { TodoList };
