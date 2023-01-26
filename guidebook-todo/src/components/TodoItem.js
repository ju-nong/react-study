import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";
import { MdDone, MdDelete } from "react-icons/md";
import palette from "../utils/palette";

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
        props.done &&
        css`
            border: 1px solid ${green};
            color: ${green};
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${(props) =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;

function TodoItem({ text, done }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export { TodoItem };
