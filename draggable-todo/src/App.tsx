import React, { useState } from "react";
import styled from "@emotion/styled";
import { TodoContainer } from "./components/TodoContainer";
import { Todos, State, TodoState, StateList, Todo } from "./types";
import { colorChange } from "./utils/style";

const BoardStyled = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1000px;
    gap: 1rem;
    padding: 3rem 1rem 5rem;
    margin: 0 auto;
`;

const TitleStyled = styled.div`
    flex: 0 0 100%;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #eee;
    cursor: pointer;

    ${colorChange("#eee")}
`;

function App() {
    const [todos, setTodos] = useState(TodoState);

    function handleSwitchTodo(type: State, todo: Todo) {
        if (type !== todo.state) {
            setTodos((todos) => ({
                ...todos,
                [todo.state]: todos[todo.state].filter(
                    (popTodo) => popTodo.id !== todo.id,
                ),
                [type]: todos[type]
                    .concat({
                        ...todo,
                        id: todos[type].length + 1,
                        state: type,
                    })
                    .map((todo, index) => ({ ...todo, id: index + 1 })),
            }));
        }
    }

    function handleAddTodo(type: State) {
        setTodos((todos) => ({
            ...todos,
            [type]: todos[type].concat({
                id: todos[type].length + 1,
                text: "",
                state: type,
            }),
        }));
    }

    function handleEditTodo(type: State, id: number, text: string) {
        setTodos((todos) => ({
            ...todos,
            [type]: todos[type].map((todo) =>
                todo.id === id ? { ...todo, text } : todo,
            ),
        }));
    }

    return (
        <BoardStyled>
            <TitleStyled>Draggable</TitleStyled>
            {StateList.map((state) => (
                <TodoContainer
                    key={state}
                    todos={todos[state]}
                    type={state}
                    onSwitchTodo={handleSwitchTodo}
                    onAddTodo={handleAddTodo}
                    onEditTodo={handleEditTodo}
                />
            ))}
        </BoardStyled>
    );
}

export default App;
