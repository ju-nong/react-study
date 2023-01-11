import React, { useRef } from "react";

function User({ user, onRemove, onToggle }) {
    // const $el = useRef();

    // const activeUser = () => {
    //     $el.current.classList.toggle("activate");
    // };

    // return (
    //     <div ref={$el} onClick={activeUser} style={{ cursor: "pointer" }}>
    //         <b>
    //             {user.username} <span>({user.email})</span>
    //         </b>
    //         <button onClick={() => onRemove(user.id)}>삭제</button>
    //     </div>
    // );

    return (
        <div
            className={user.active ? "activate" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => onToggle(user.id)}
        >
            <b>
                {user.username} <span>({user.email})</span>
            </b>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
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
