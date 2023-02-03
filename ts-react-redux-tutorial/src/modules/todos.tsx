import {
    createAction,
    createStandardAction,
    createReducer,
    ActionType,
} from "typesafe-actions";

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

const addTodo = createAction(
    ADD_TODO,
    (action) => (text: string) =>
        action({
            id: nextId++,
            text,
        }),
);

const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
const removeTodo = createStandardAction(REMOVE_TODO)<number>();

// const addTodo = (text: string) => ({
//     type: ADD_TODO,
//     payload: {
//         id: nextId++,
//         text,
//     },
// });

// const toggleTodo = (id: number) => ({
//     type: TOGGLE_TODO,
//     payload: {
//         id,
//     },
// });

// const removeTodo = (id: number) => ({
//     type: REMOVE_TODO,
//     payload: {
//         id,
//     },
// });

// type TodosAction =
//     | ReturnType<typeof addTodo>
//     | ReturnType<typeof toggleTodo>
//     | ReturnType<typeof removeTodo>;

const actions = { addTodo, toggleTodo, removeTodo };

type TodosAction = ActionType<typeof actions>;

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({
            ...action.payload,
            done: false,
        }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter((todo) => todo.id !== id),
});

// function todos(
//     state: TodosState = initialState,
//     action: TodosAction,
// ): TodosState {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false,
//             });
//         case TOGGLE_TODO:
//             return state.map((todo) =>
//                 todo.id === action.payload.id
//                     ? { ...todo, done: !todo.done }
//                     : todo,
//             );
//         case REMOVE_TODO:
//             return state.filter((todo) => todo.id !== action.payload.id);
//         default:
//             return state;
//     }
// }

export { addTodo, toggleTodo, removeTodo, todos };
export type { Todo, TodosState };
