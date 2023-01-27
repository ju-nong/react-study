import { memo } from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";
import { MdDone, MdDelete } from "react-icons/md";
import palette from "../utils/palette";
import { useTodoDispatch } from "../TodoContext";

const { green, red } = palette();

const Remove = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: ${lighten(0.1, red)};
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0px;

    &:hover {
        ${Remove} {
            display: flex;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    ${(props) =>
        props.state &&
        css`
            border: 1px solid ${green};
            color: ${green};
        `}
`;

const Context = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${(props) =>
        props.state &&
        css`
            color: #ced4da;
        `}
`;

function TodoItem({ id, content, state }) {
    const dispatch = useTodoDispatch();

    const onToggle = () => dispatch({ type: "TOGGLE", id });
    const onRemove = () => dispatch({ type: "REMOVE", id });

    return (
        <TodoItemBlock>
            <CheckCircle state={state} onClick={onToggle}>
                {state && <MdDone />}
            </CheckCircle>
            <Context state={state}>{content}</Context>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

const MemoTodoItem = memo(TodoItem);

export { MemoTodoItem as TodoItem };
