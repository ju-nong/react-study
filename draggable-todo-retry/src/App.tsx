import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "./utils/style";
import { useSelector } from "react-redux";
import { RootState } from "./modules";
import { TodoContainer } from "./containers/TodoContainer";
import { TodoTags } from "./modules/todo/types";

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
    const todos = useSelector((state: RootState) => state.todo);
    const tags: TodoTags[] = ["todo", "doing", "done"];

    return (
        <BoardStyled>
            <TitleStyled>Draggable</TitleStyled>
            {tags.map((tag) => (
                <TodoContainer tag={tag} todos={todos[tag]} key={tag} />
            ))}
        </BoardStyled>
    );
}

export default App;
