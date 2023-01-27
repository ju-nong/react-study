import { memo } from "react";
import styled from "styled-components";
import palette from "../utils/palette";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useTodoState } from "../TodoContext";

dayjs.locale("ko");
const day = dayjs();

const { green } = palette();

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: ${green};
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoneTodos = todos.filter((todo) => !todo.state);

    return (
        <TodoHeadBlock>
            <h1>{day.format("YYYY년 MM월 DD일")}</h1>
            <div className="day">{day.format("ddd요일")}</div>
            <div className="tasks-left">할 일 {undoneTodos.length}개 남음</div>
        </TodoHeadBlock>
    );
}

const MemoTodoHead = memo(TodoHead);

export { MemoTodoHead as TodoHead };
