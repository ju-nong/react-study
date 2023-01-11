import React from "react";

function Hello({ name, age, sub }) {
    // const { name, age } = props;
    return (
        <div>
            안녕하세요 {name}님, {age}살이시네요?
            {sub ? <div>워워우워우</div> : null}
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음",
    age: 20,
};

export default Hello;
