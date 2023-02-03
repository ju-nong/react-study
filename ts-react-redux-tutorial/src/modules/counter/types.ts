import { ActionType } from "typesafe-actions";
import { plus, minus, plusBy } from "./actions";

const actions = { plus, minus, plusBy };

type CounterAction = ActionType<typeof actions>;

type CounterState = {
    count: number;
};

export type { CounterAction, CounterState };
