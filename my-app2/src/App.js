import React, { useState, useRef, useMemo, useCallback } from "react";
import { UserList } from "./UserList";
import { CreateUserMemo } from "./CreateUser";

function countActiveUser(users) {
    console.log("hih");
    return users.filter((user) => user.active).length;
}

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com",
            active: false,
        },
        {
            id: 2,
            username: "tester",
            email: "tester@example.com",
            active: false,
        },
        {
            id: 3,
            username: "liz",
            email: "liz@example.com",
            active: false,
        },
    ]);

    const nextId = useRef(4);

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
    });

    const { username, email } = inputs;

    const onCreate = useCallback(() => {
        setUsers((users) => [
            ...users,
            { id: nextId.current, username, email, active: false },
        ]);

        setInputs({
            username: "",
            email: "",
        });

        nextId.current += 1;
    }, [inputs]);

    const onChange = useCallback((event) => {
        const { name, value } = event.target;

        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
    }, []);

    const onRemove = useCallback((id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setUsers((users) =>
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user,
            ),
        );
    }, []);

    const count = useMemo(() => countActiveUser(users), [users]);

    return (
        <>
            <CreateUserMemo
                username={username}
                email={email}
                onCreate={onCreate}
                onChange={onChange}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;
