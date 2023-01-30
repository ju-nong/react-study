import { Routes, Route, Link } from "react-router-dom";
import { Home, About } from "./Introduce";
import { Profiles } from "./Profiles";

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
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
            </Routes>
        </div>
    );
}

export default App;
