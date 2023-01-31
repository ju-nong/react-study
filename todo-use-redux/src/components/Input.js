import { useState, useRef } from "react";
import styled from "styled-components";

const InputBox = styled.div`
    padding: 16px 16px 16px 0;
    display: flex;
    width: 100%;

    button.allCheckBtn {
        width: 10%;
        border: 0;
        background-color: transparent;
        color: #e6e6e6;
        font-size: 22px;
        font-weight: bold;
    }

    button.allCheckBtn.allChecked {
        color: #737373;
    }

    input {
        border: 0;
        outline: 0;
        background-color: transparent;
        line-height: 1.4em;
        font-size: 24px;
        width: 90%;
    }

    input::placeholder {
        color: #e6e6e6;
        font-style: italic;
    }
`;

function Input({ isAllCheck }) {
    const $input = useRef();

    const enterChk = (event) => {
        // 입력된 키코드가 Enter고 현재 문자가 조합 중이 아닐 때
        if (event.keyCode === 13 && !event.nativeEvent.isComposing) {
            $input.current.value = "";
        }
    };

    return (
        <InputBox>
            <button
                className={`allCheckBtn ${isAllCheck ? "allChecked" : ""}`}
                onClick={() => allCheck}
            >
                All
            </button>
            <input
                type="text"
                placeholder="What needs to be done?"
                ref={$input}
                onKeyDown={enterChk}
            />
        </InputBox>
    );
}

export { Input };
