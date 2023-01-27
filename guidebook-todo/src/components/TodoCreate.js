import { useState, memo } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { MdAdd } from "react-icons/md";
import palette from "../utils/palette";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const { green, red } = palette();

const CircleButton = styled.button`
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;

    transition: 0.125s all ease-in;

    background: ${green};

    &:hover {
        background: ${lighten(0.1, green)};
    }
    &:active {
        background: ${darken(0.1, green)};
    }

    ${({ open }) =>
        open &&
        css`
            background: ${red};

            &:hover {
                background: ${lighten(0.1, red)};
            }
            &:active {
                background: ${darken(0.1, red)};
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px 32px 72px 32px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");

    const onCreate = (event) => {
        event.preventDefault();

        if (content.trim().length > 0) {
            dispatch({
                type: "CREATE",
                todo: {
                    id: nextId.current++,
                    content,
                    status: false,
                },
            });

            setContent("");
            setOpen((open) => !open);
        }
    };

    const typing = (event) => setContent(event.target.value);

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onCreate}>
                        <Input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            value={content}
                            onChange={typing}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton open={open} onClick={() => setOpen((open) => !open)}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

const MemoTodoCreate = memo(TodoCreate);

export { MemoTodoCreate as TodoCreate };
