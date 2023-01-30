import {
    useLocation,
    useParams,
    useSearchParams,
    useNavigate,
} from "react-router-dom";

function WithRouterSample() {
    const location = useLocation();
    const params = useParams();
    const querys = useSearchParams();

    const navigate = useNavigate();

    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly />
            <h4>params</h4>
            <textarea value={JSON.stringify(params, null, 2)} readOnly />
            <h4>querys</h4>
            <textarea value={JSON.stringify(querys, null, 2)} readOnly />
            <button onClick={() => navigate("/")}>홈으로</button>
        </div>
    );
}

export { WithRouterSample };
