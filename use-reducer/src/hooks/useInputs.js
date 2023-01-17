import { useState, useCallback, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                [action.name]: action.value,
            };
        case "RESET":
            return action.state;
        default:
            return state;
    }
}

// useReducer 방식
function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((event) => {
        const { name, value } = event.target;

        dispatch({ type: "CHANGE", name, value });
    }, []);

    const reset = useCallback(() => {
        dispatch({ type: "RESET", state: initialForm });
    }, []);

    return [form, onChange, reset];
}

// useState 방식
// function useInputs(initialForm) {
//     const [form, setForm] = useState(initialForm);

//     const onChange = useCallback((event) => {
//         const { name, value } = event.target;

//         setForm((form) => ({
//             ...form,
//             [name]: value,
//         }));
//     }, []);

//     const reset = useCallback(() => {
//         setForm(initialForm);
//     }, [initialForm]);

//     return [form, onChange, reset];
// }

export { useInputs };
