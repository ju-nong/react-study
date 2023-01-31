// 액션 타입
// Ducks 패턴으로 할 때는 ACTION 이름 앞에 접두사 붙임
const SET_DIFF = "counter/SET_DIFF";
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

// 액션 생성함수
const setDiff = (diff) => ({ type: SET_DIFF, diff });

const plus = () => ({ type: PLUS });

const minus = () => ({ type: MINUS });

// 초기 상태
const initialState = {
    number: 0,
    diff: 1,
};

// 리듀서
function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case PLUS:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case MINUS:
            return {
                ...state,
                number: state.number - state.diff,
            };
        default:
            return state;
    }
}

export { counter as default, setDiff, plus, minus };
