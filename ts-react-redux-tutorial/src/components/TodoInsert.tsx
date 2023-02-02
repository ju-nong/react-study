import React, { useState } from "react";

type TodoInsertProps = {
    onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onInsert(value);
        setValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export { TodoInsert };
