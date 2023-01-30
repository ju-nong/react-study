import { Users } from "./Users";
import { UsersProvier } from "./UserContext";

function App() {
    return (
        <UsersProvier>
            <Users />
        </UsersProvier>
    );
}

export default App;
