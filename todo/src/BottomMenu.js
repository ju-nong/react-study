import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 5px 15px;
    color: #777;

    &:before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
            0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
            0 17px 2px -6px rgb(0 0 0 / 20%);
        z-index: 1;
    }

    & > span {
        z-index: 2;
        line-height: 35px;
    }

    .menu {
        display: flex;
        justify-content: center;
        z-index: 2;
    }

    input {
        display: none;
    }

    input:checked + label {
        border-color: rgba(175, 47, 47, 0.2);
    }

    label {
        margin: 3px;
        padding: 3px 7px;
        border: 1px solid transparent;
        border-radius: 3px;

        p {
            text-transform: capitalize;
        }
    }

    label:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }

    & > button {
        z-index: 2;
        background-color: transparent;
        border: 0;
        outline: 0;
        color: #777;
    }

    & > button:hover {
        text-decoration: underline;
    }
`;

function BottomButton({ name, index, filtering }) {
    return (
        <>
            <input
                type="radio"
                value={name}
                name="state"
                defaultChecked={index === 0}
                onChange={filtering}
                id={name}
            />
            <label htmlFor={name}>
                <p> {name}</p>
            </label>
        </>
    );
}

function BottomMenu({ count, filtering, clearComplate }) {
    const menus = ["all", "active", "completed"];
    return (
        <Footer>
            <span>{count} items left</span>
            <div className="menu">
                {menus.map((menu, index) => (
                    <BottomButton
                        name={menu}
                        index={index}
                        key={index}
                        filtering={filtering}
                    />
                ))}
            </div>
            <button onClick={clearComplate}>Clear completed</button>
        </Footer>
    );
}

const MemoryBottomMenu = React.memo(BottomMenu);

export { MemoryBottomMenu };
