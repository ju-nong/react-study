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

const UserDispath = React.createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispath.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
        </UserDispath.Provider>
    );
}

export default App;
export { UserDispath };