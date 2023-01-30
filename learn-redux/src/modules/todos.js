const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1; // todo 데이터에서 사용할 고유 id

const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    },
});

const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

const initialState = [];

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.todo,
            };
        case TOGGLE_TODO:
            return {
                ...state,
                id: action.id,
            };
        default:
            return initialState;
    }
}

export { todos as default, addTodo, toggleTodo };
