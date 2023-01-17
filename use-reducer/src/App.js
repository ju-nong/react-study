import React, {
    useRef,
    useState,
    useMemo,
    useCallback,
    useReducer,
} from "react";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";
import { useInputs } from "./hooks/useInputs";

function countActiveUsers(users) {
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com",
            active: true,
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
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_USER":
            return {
                users: state.users.concat(action.user),
            };
        case "ACTIVE_TOGGLE":
            return {
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user,
                ),
            };
        case "REMOVE_USER":
            return {
                users: state.users.filter((user) => user.id !== action.id),
            };

        default:
            return state;
    }
}

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: "",
        email: "",
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const nextId = useRef(4);
    const count = useMemo(() => countActiveUsers(users), [users]);

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email,
            },
        });

        reset();
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback(
        (id) => {
            dispatch({
                type: "ACTIVE_TOGGLE",
                id,
            });
        },
        [users],
    );

    const onRemove = useCallback(
        (id) => {
            dispatch({
                type: "REMOVE_USER",
                id,
            });
        },
        [users],
    );

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;
