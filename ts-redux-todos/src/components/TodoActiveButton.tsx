import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { allActiveTodo } from "../modules/todos";

function TodoActiveButton({ children: React.ReactNode }) {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const isAllCheck = useMemo(
        () => todos.filter((todo) => !todo.done).every((todo) => todo.isActive),
        [todos],
    );

    const handleAllActiveTodo = () => dispatch(allActiveTodo(isAllCheck));

    return (
        <button
            className={`allCheckBtn ${isAllCheck ? "allChecked" : ""}`}
            onClick={handleAllActiveTodo}
        >
            All
        </button>
    );
}

export { TodoActiveButton };
