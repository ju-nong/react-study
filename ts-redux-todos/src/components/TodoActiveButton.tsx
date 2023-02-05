import React from "react";

interface Props {
    isAllCheck: Boolean;
    onAllActiveTodo: () => void;
    children: React.ReactNode;
}

function TodoActiveButton({ isAllCheck, onAllActiveTodo, children }: Props) {
    return (
        <button
            className={`allCheckBtn ${isAllCheck ? "allChecked" : ""}`}
            onClick={onAllActiveTodo}
        >
            All
        </button>
    );
}

export { TodoActiveButton };
