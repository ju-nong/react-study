import { Routes, Route, Link } from "react-router-dom";
import { Home, About } from "./Introduce";
import { Profiles } from "./Profiles";
import { HistorySample } from "./HistorySample";

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
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
                <Route path="/history" element={<HistorySample />} />
                <Route path="/*" element={<div>NOT FOUND</div>} />
            </Routes>
        </div>
    );
}

export default App;
