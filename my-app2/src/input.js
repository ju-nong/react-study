import React, { useState, useRef } from "react";

export function InputSample() {
    const [inputs, setText] = useState({ name: "", nickname: "" });
    const { name, nickname } = inputs;

    const nameInput = useRef();

    function typing(event) {
        const { name, value } = event.target;

        setText({
            ...inputs,
            [name]: value,
        });
    }

    function reset() {
        setText({ name: "", nickname: "" });
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" value={name} ref={nameInput} onChange={typing} />
            <input name="nickname" value={nickname} onChange={typing} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>
                    값: {name} ({nickname})
                </b>
            </div>
        </div>
    );
}
