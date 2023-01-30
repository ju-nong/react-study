import { Routes, Route, Link } from "react-router-dom";
import { Home, About } from "./Introduce";
import { Profile } from "./Profile";

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
