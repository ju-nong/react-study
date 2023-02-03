import { createStandardAction } from "typesafe-actions";

const PLUS = "counter/PLUS" as const;
const MINUS = "counter/MINUS" as const;
const PLUS_BY = "counter/SET_DIFF" as const;

const plus = createStandardAction(PLUS)();
const minus = createStandardAction(MINUS)();
const plusBy = createStandardAction(PLUS_BY)<number>();

export { PLUS, MINUS, PLUS_BY, plus, minus, plusBy };
