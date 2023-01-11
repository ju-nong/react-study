import React, { useState, useRef } from "react";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";

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

    const onCreate = () => {
        setUsers([
            ...users,
            { id: nextId.current, username, email, active: false },
        ]);

        setInputs({
            username: "",
            email: "",
        });

        nextId.current += 1;
    };

    const onChange = (event) => {
        const { name, value } = event.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user,
            ),
        );
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onCreate={onCreate}
                onChange={onChange}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
    );
}

export default App;
