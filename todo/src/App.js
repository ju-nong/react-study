import React, { useRef, useState, useMemo } from "react";
import { Input } from "./Input";
import { MemoryTodoList } from "./TodoList";
import { MemoryBottomMenu } from "./BottomMenu";

function App() {
    const nextId = useRef(0);
    const [todos, setTodo] = useState([]);
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
        console.log(`체크 개수 ${todos.filter((todo) => todo.state).length}`);
        console.log(`모든 개수 ${todos.length}`);
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

    return (
        <main>
            <h1>todos</h1>
            <Input
                addTodo={addTodo}
                typing={typing}
                allCheck={allCheck}
                isAllCheck={isAllCheck}
            />
            <MemoryTodoList
                todos={showTodos}
                removeTodo={removeTodo}
                editTodo={editTodo}
                toggleState={toggleState}
            />
            <MemoryBottomMenu count={notChecks} filtering={filtering} />
        </main>
    );
}

export default App;
