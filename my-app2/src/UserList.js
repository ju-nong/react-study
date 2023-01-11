import React, { useRef } from "react";

function User({ user, onRemove }) {
    const $el = useRef();

    const activeUser = () => {
        $el.current.classList.toggle("activate");
    };

    return (
        <div ref={$el} onClick={activeUser} style={{ cursor: "pointer" }}>
            <b>
                {user.username} <span>({user.email})</span>
            </b>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export { User, UserList };
