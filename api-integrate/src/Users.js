import { useState } from "react";
import { useUsersState, useUsersDispatch, getUsers } from "./UserContext";
import { User } from "./User";

function Users() {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    function fetchData() {
        getUsers(dispatch);
    }

    const { loading, data: users, error } = state.users;

    if (loading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다</div>;
    }

    if (!users) {
        return <button onClick={fetchData}>RELOAD</button>;
    }

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{ curosr: "pointer" }}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}

export { Users };
