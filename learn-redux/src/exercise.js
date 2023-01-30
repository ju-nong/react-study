import { legacy_createStore as createStore } from "redux";

// 상태
const initialState = {
    counter: 0,
    text: "",
    list: [],
};

// 액션 타입
const PLUS = "PLUS";
const MINUS = "MINUS";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 생성 함수 정의
const plus = () => ({
    type: PLUS,
});

const minus = () => ({
    type: MINUS,
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text,
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});

/* 리듀서 만들기
 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
 새로운 상태를 만드는 함수를 만들어봅시다.
 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!
 */

function reducer(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case MINUS:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
    }
}

const store = createStore(reducer);

function lisener() {
    console.log(store.getState());
}

const unsubscribe = store.subscribe(lisener);
