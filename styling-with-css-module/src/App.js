import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { CheckBox } from "./components/CheckBox";

function App() {
    const [check, setCheck] = useState(false);

    const onChange = (event) => {
        setCheck(event.target.checked);
    };

    return (
        <div className="App text-center">
            <CheckBox onChange={onChange} checked={check}>
                다음 약관에 모두 동의
            </CheckBox>
            <p>
                <b>check: </b>
                {check ? "true" : "false"}
            </p>
        </div>
    );
}

export default App;
