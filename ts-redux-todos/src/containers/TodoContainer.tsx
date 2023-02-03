import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { addTodo, toggleTodo, clearTodo } from "../modules/todos";
import { Main } from "../components/semantic/Main";
import { Footer } from "../components/semantic/Footer";
import { ClearTodos } from "../components/ClearTodos";

function TodoContainer() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (text: string) => dispatch(addTodo(text));
    const handleToggleTodo = (id: number) => dispatch(toggleTodo(id));
    const handleClearTodo = (id: number) => dispatch(clearTodo(id));

    return (
        <>
            <Main />
            <Footer />
            <ClearTodos />
        </>
    );
}

export { TodoContainer };
