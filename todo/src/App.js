import React, { useRef, useState, useMemo, useEffect } from "react";
import { Input } from "./Input";
import { MemoryTodoList } from "./TodoList";
import { MemoryBottomMenu } from "./BottomMenu";

function App() {
    const nextId = useRef(0);
    const [todos, setTodo] = useState(
        JSON.parse(localStorage.getItem("todos")) ?? [],
    );

    const [filter, setFilter] = useState("all");

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
        setTodo((todos) => todos.filter((todo) => !todo.state));
        setFilter("all");
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        return () => {};
    }, [todos]);

    return (
        <>
            <main>
                <div>
                    <header>
                        <h1>todos</h1>
                        <Input
                            addTodo={addTodo}
                            typing={typing}
                            allCheck={allCheck}
                            isAllCheck={isAllCheck}
                        />
                    </header>
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
                </div>
            </main>
            <div className="copyright">
                <p>더블클릭해서 할 일을 수정하세요.</p>
                <p>만든이 이준용</p>
                <p>
                    사실{" "}
                    <a
                        href="https://todomvc.com/examples/react"
                        target="_blank"
                    >
                        여기
                    </a>
                    클론코딩함
                </p>
            </div>
        </>
    );
}

export default App;