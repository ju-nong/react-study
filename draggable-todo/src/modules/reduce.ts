import { addTodo, editTodo, removeTodo, switchTodo } from "./todos/actions";
import { TodoState } from "../types";

const initialState = TodoState;

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat(action.todo);
//         case TOGGLE_TODO:
//             return state.map((todo) =>
//                 todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//             );
//         default:
//             return state;
//     }
// }
