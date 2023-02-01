const PLUS = "counter/PLUS" as const;
const MINUS = "counter/MINUS" as const;
const SET_DIFF = "counter/SET_DIFF" as const;

const onPlus = () => ({ type: PLUS });
const onMinus = () => ({ type: MINUS });
const onSetDiff = (diff: number) => ({ type: SET_DIFF, payload: diff });

export {};
