import React, { useRef } from "react";

function Input({ addTodo, typing }) {
    const $input = useRef();

    const enterChk = (event) => {
        // 입력된 키코드가 Enter고 현재 문자가 조합 중이 아닐 때
        if (event.code === "Enter" && !event.nativeEvent.isComposing) {
            addTodo();
            $input.current.value = "";
        }
    };

    return (
        <div>
            <button contenteditable="true">All</button>
            <input
                type="text"
                ref={$input}
                onKeyDown={enterChk}
                onChange={typing}
            />
        </div>
    );
}

export { Input };
