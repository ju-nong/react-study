import axios from "axios";
import { useAsync } from "./useAsync";

async function fetchUser() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/",
    );
    return response.data;
}

function UserBefore() {
    const [state, refetch] = useAsync(fetchUser, [], false);

    const { loading, data: users, error } = state;

    if (loading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다</div>;
    }

    if (!users) return <button onClick={refetch}>RELOAD</button>;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>RELOAD</button>
        </>
    );
}

export { UserBefore };
