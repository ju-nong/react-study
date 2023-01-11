import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    // 왜 show hide show 되냐고

    // useEffect(() => {
    //     console.log(user);
    // });

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
}

function UserList({ users, onRemove, onToggle }) {
    useEffect(() => {
        console.log("Show & Update", users);
        return () => {
            console.log("Hide", users);
        };
    }, [users]);
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
}

export { User, UserList };
