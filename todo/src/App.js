import React, { useRef, useState, useMemo, useEffect } from "react";
import { Input } from "./Input";
import { MemoryTodoList } from "./TodoList";
import { MemoryBottomMenu } from "./BottomMenu";
import { MemoryClearSheet } from "./ClearSheet";
import styled from "styled-components";

const Main = styled.main`
    margin: 130px 0px 40px 0;
    background-color: #fff;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

const Header = styled.header``;

const Title = styled.h1`
    position: absolute;
    top: -132px;
    width: 100%;
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    z-index: -1;
`;

const Copyright = styled.div`
    text-align: center;
    color: #bfbfbf;
    font-size: 10px;
    line-height: 2;
    margin-bottom: 20px;

    a {
        color: #bfbfbf;
    }
`;

function App() {
    const nextId = useRef(isNaN(localStorage.getItem("nextId")) && 0);
    const [todos, setTodo] = useState(
        JSON.parse(localStorage.getItem("todos")) ?? [],
    );

    const [filter, setFilter] = useState("all");

    const [clears, setClears] = useState(
        JSON.parse(localStorage.getItem("clears")) ?? [],
    );

    const filtering = (event) => {
        setFilter(event.target.value);
    };

    const showTodos = useMemo(() => {
        if (filter === "all") {
            return todos;
        } else if (filter === "active") {
            return todos.filter((todo) => !todo.state);
        } else {
            return todos.filter((todo) => todo.state);
        }
    }, [todos, filter]);

    const isAllCheck = useMemo(() => {
        return (
            todos.filter((todo) => todo.state).length === todos.length &&
            todos.length > 0
        );
    }, [todos]);

    const notChecks = useMemo(
        () => todos.filter((todo) => !todo.state).length,
        [todos],
    );

    const [content, setContent] = useState("");

    const addTodo = () => {
        if (content.length) {
            setTodo((todos) => [
                ...todos,
                {
                    id: ++nextId.current,
                    content,
                    state: false,
                },
            ]);

            setContent("");
        }
    };

    const removeTodo = (id) => {
        setTodo((todos) => todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, content) => {
        setTodo((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, content } : todo)),
        );
    };

    const allCheck = () => {
        setTodo((todos) =>
            todos.map((todo) => ({ ...todo, state: !isAllCheck })),
        );
    };

    const toggleState = (id, state) => {
        setTodo((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, state } : todo)),
        );
    };

    const typing = (event) => {
        setContent(event.target.value);
    };

    const clearComplate = () => {
        setClears((clears) => [
            ...clears,
            ...todos.filter((todo) => todo.state),
        ]);
        setTodo((todos) => todos.filter((todo) => !todo.state));
        setFilter("all");
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("clears", JSON.stringify(clears));
        localStorage.setItem("nextId", nextId.current);
        return () => {};
    }, [todos, clears, nextId]);

    return (
        <>
            <Main>
                <Header>
                    <Title>todos</Title>
                    <Input
                        addTodo={addTodo}
                        typing={typing}
                        allCheck={allCheck}
                        isAllCheck={isAllCheck}
                    />
                </Header>
                <MemoryTodoList
                    todos={showTodos}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleState={toggleState}
                />
                {todos.length > 0 && (
                    <MemoryBottomMenu
                        count={notChecks}
                        filtering={filtering}
                        clearComplate={clearComplate}
                    />
                )}
            </Main>
            <Copyright>
                <p>더블클릭해서 할 일을 수정하세요.</p>
                <p>만든이 이준용</p>
                <p>
                    사실
                    <a
                        href="https://todomvc.com/examples/react"
                        target="_blank"
                        style={{ marginLeft: 3, marginRight: 3 }}
                    >
                        여기
                    </a>
                    클론코딩함
                </p>
            </Copyright>
            <MemoryClearSheet items={clears} />
            {/* <img src="./ari.jpg" alt="아리" id="cursorImg" onClick={hide} /> */}
        </>
    );
}

export default App;
