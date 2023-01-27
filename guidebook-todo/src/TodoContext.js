import React, {
    useReducer,
    createContext,
    useContext,
    useRef,
    useEffect,
} from "react";

const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, state: !todo.state } : todo,
            );
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdConext = createContext();

function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(
        todoReducer,
        JSON.parse(localStorage.getItem("todos")) ?? [],
    );
    const nextId = useRef(isNaN(localStorage.getItem("nextId")) && 1);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
        localStorage.setItem("nextId", nextId.current);
        return () => {};
    }, [state, nextId]);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdConext.Provider value={nextId}>
                    {children}
                </TodoNextIdConext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error("Cannot find TodoProvier");
    }
    return context;
}

function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error("Cannot find TodoProvier");
    }
    return context;
}

function useTodoNextId() {
    const context = useContext(TodoNextIdConext);
    if (!context) {
        throw new Error("Cannot find TodoProvier");
    }
    return context;
}

export { TodoProvider, useTodoState, useTodoDispatch, useTodoNextId };
