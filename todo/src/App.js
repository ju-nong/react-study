import React, { useRef, useState } from "react";
import { Input } from "./Input";
import { TodoList, MemoryTodoList } from "./TodoList";

function App() {
    const nextId = useRef(0);
    const [todos, setTodo] = useState([]);
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

    const removeTodo = (id) => {};

    const typing = (event) => {
        setContent(event.target.value);
    };

    return (
        <main>
            <h1>todos</h1>
            <Input addTodo={addTodo} typing={typing} />
            <MemoryTodoList todos={todos} removeTodo={removeTodo} />
        </main>
    );
}

export default App;
