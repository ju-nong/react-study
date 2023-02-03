import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const BottomSheet = styled.div`
    position: fixed;
    right: 10px;
    bottom: 0;
    transition: all 1s;
    border: 0;
    width: 20%;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    border-radius: 10px 10px 0px 0px;
    transform: translateY(calc(100% - 41.6px));

    &.show {
        transform: translateY(0);
    }

    & > div {
        input {
            display: none;
        }

        label {
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px;
        }
    }

    ul {
        max-height: 314px;
        overflow-y: scroll;
    }
`;

function ClearTodos() {
    return (
        <BottomSheet>
            <div>
                <input
                    type="checkbox"
                    id="bottom-toggle"
                    // onChange={toggle}
                />
                <label htmlFor="bottom-toggle">Clear List</label>
            </div>
        </BottomSheet>
    );
}
/*

*/

export { ClearTodos };
