import React, { useEffect, useContext } from "react";
import { UserDispath } from "./App";

const User = React.memo(({ user }) => {
    const dispatch = useContext(UserDispath);
    return (
        <div>
            <b
                className={user.active ? "activate" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => {
                    dispatch({
                        type: "ACTIVE_TOGGLE",
                        id: user.id,
                    });
                }}
            >
                {user.username} <span>({user.email})</span>
            </b>
            <button
                onClick={() => {
                    dispatch({
                        type: "REMOVE_USER",
                        id: user.id,
                    });
                }}
            >
                삭제
            </button>
        </div>
    );
});

const UserList = React.memo(({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
});

export { UserList };
