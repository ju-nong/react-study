import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
    return (
        <div>
            <b
                className={user.active ? "activate" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => onToggle(user.id)}
            >
                {user.username} <span>({user.email})</span>
            </b>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

const UserList = React.memo(({ users, onRemove, onToggle }) => {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
});

export { UserList };
