import React, { useRef, useContext } from "react";
import { useInputs } from "./hooks/useInputs";
import { UserDispath } from "./App";

function CreateUser() {
    const dispatch = useContext(UserDispath);

    const [{ username, email }, onChange, reset] = useInputs({
        username: "",
        email: "",
    });

    const nextId = useRef(4);

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: "CREATE_USER",
                        user: {
                            id: nextId.current,
                            username,
                            email,
                        },
                    });

                    reset();
                    nextId.current += 1;
                }}
            >
                등록
            </button>
        </div>
    );
}

const CreateUserMemo = React.memo(CreateUser);

export { CreateUser, CreateUserMemo };
