import { useSearchParams } from "react-router-dom";

const Home = () => (
    <div>
        <h1>홈</h1>
        <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
    </div>
);

function About() {
    const [query, setQuery] = useSearchParams();

    const detail = query.get("detail") === "true";

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 예제
                프로젝트랍니다.
            </p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p>}
        </div>
    );
}

export { Home, About };
