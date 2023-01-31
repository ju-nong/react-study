import { useState, memo } from "react";

const TodoItem = memo(({ todo, onToggle }) => (
    <li
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
    >
        {todo.text}
    </li>
));

const TodoList = memo(({ todos, onToggle }) => (
    <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
    </ul>
));

function Todos({ todos, onCreate, onToggle }) {
    const [text, setText] = useState("");

    const onChange = (event) => setText(event.target.value);
    const onSubit = (event) => {
        event.preventDefault();

        onCreate(text);
        setText("");
    };

    return (
        <div>
            <form onSubmit={onSubit}>
                <input
                    placeholder={"할 일을 입력하세요.."}
                    value={text}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export { Todos };
