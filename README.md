# react-study

```
01.11 3일차인데 깃에 푸시하기 너무 오래 걸린감이 있죠? 응 어쩔티비 내맘
my-app2 들어가서 npm install 후 npm start 하세요
```

## Redux 들어가기 전 한 번 쓱 정리

-   [도움이 많이 된 블로그](https://react.vlpt.us/, "사실 90% 이거보고 공부함")
-   전부 함수형 컴포넌트 사용
-   내맘대로 무조건 기억해야 되는 거만 적을거임 ㅅㄱ

---

## 프로젝트 생성

마지막에 프로젝트명 적으면 됨

```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

---

### 컴포넌트 선언 + props + 조건부 렌더링

```javascript
// self close말고 컴포넌트 안에 내용이 추가된다면, props.children으로 받아서 뿌려주면 됨
// 컴포넌트에 props명만 넘기면 받는 컴포넌트에서는 true로 받아옴
// true일 때만 보여줄거면 삼항연산자 말고
isActive && <b>*</b>; // 이런 형식이 더 간편
```

-   #### App.js

```javascript
import React from "react";
import { Hello } from "./Hello";

function App() {
    const age = 100;

    return <Hello name="이준용" age={age} isActive />;
}

export default App;
```

-   #### Hello.js

```javascript
import React from "react";

function Hello({ name, age, isActive }) {
    return (
        <div>
            {isActive ? <b>*</b> : null} 안녕하세요 {name} ({age})
        </div>
    );
}

// 기본값 설정 가능
Hello.defaultProps = {
    isActive: false,
};

export { Hello };
```

---

### useState

```javascript
// 값을 동적으로 관리할 때 씀
// 인자로 기본값이 들어감, 배열의 0번 째는 최신 값(state), 1번 째는 setter가 반환된다
// 보통 구조 분해 할당으로 받아옴 ex)
const [count, setCount] = useState(99);

// 값을 업데이트할 때는 setter 사용 ex)
setCount(count + 1);

// 함수형 업데이트 방법도 있음 ex)
setCount((prevCount) => prevCount + 1);
```

-   #### Counter.js

```javascript
import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    const minus = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
    );
}

export { Counter };
```

---

### Event + useRef

```javascript
// 컴포넌트에 event 붙일 때 onClick, onChange 처럼 이벤트명 넣고
// props넘길 때처럼 함수명 넣으면 됨 ex)
onChange(typing);
// 넣을 함수명에 ()는 빼줌
// 괄호 넣으면 컴포넌트가 마운트 되자마자 실행됨
// useRef()는 vue에 ref()와 거의 똑같음
// Vue는 .value로 React는 .current로 가져옴
```

-   #### Inputs.js

```javascript
import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });

    const { name, nickname } = inputs; // state도 구조 분해 할당으로 가져올 수 있음

    const nameInput = useRef();

    const onChange = (event) => {
        const { value, name } = event.target; // 현재 이벤트가 발생된 엘리먼트의 값과 이름 속성을 가져옴

        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
        // 같긴함
        // setInputs({
        //     ...inputs,
        //     [name]: value,
        // });
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });

        nameInput.current.focus(); // ref명.current => DOM 객체 가져오는 거랑 똑같음
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export { InputSample };
```

---

### 여러개 렌더링 + 추가, 수정, 제거

```javascript
// 여러개 렌더링은 my-app2/src/UserList 보는 거 추천
// 렌더링, 추가, 수정는 setter에 기존 state에 map 돌려서 넣어주면 끝
// 제거는 기존 state에 filter로 걸러서 넣어주면 끝
// 렌더링할 때는 컴포넌트에 key props로 중복되지 않는 값 넣어주는 거 필수
```

---

### useEffect

```javascript
// onMounted, onUnMounted, watch가 섞인 느낌
useEffect(() => {
    // 마운트 및 업데이트 되면 실행
    console.log("Mounted & Update!");

    // 언마운트 되면 실행
    return () => {
        console.log("UnMounted");
    };
}, [deps]);
// deps 옵션 : 두 번째 인자인 배열안에 참조할 객체를 나열하면, 해당 객체들이 업데이트 될 때마다 실행 됨
```

---

### useMemo

```javascript
// App.js에 countActiveUser함수와 App 컴포넌트안에 쓰인 useMemo 보면 될 듯
// Vue에서 computed랑 비슷한 느낌, 객체의 값이 바뀔 때마다 호출되는 거
const count = useMemo(() => countActiveUser(users), [users]);
// 첫 번째는 값, 두 번째는 useEffect과 마찬가지로 deps의 참조할 객체 나열하면 됨
```

---

### useCallback + React.memo

```javascript
// 설명은 할 수 있겠는데, 아직 익숙치 않음
// 좀 더 사용하다가 익숙해지면 추가하겠음 ^___^ b
```
