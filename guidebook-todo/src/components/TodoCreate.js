import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { MdAdd } from "react-icons/md";
import palette from "../utils/palette";

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

function TodoCreate() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CircleButton open={open} onClick={() => setOpen((open) => !open)}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export { TodoCreate };
