import { Link, Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";

const Profiles = () => (
    <div>
        <h3>유저 목록:</h3>
        <ul>
            <li>
                <Link to="./velopert">velopert</Link>
            </li>
            <li>
                <Link to="./gildong">gildong</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" element={<div>유저를 선택해주세요.</div>} />
            <Route path=":username" element={<Profile />} />
        </Routes>
    </div>
);

export { Profiles };
