# react-study

```
01.11 3일차인데 깃에 푸시하기 너무 오래 걸린감이 있죠? 응 어쩔티비 내맘
my-app2 들어가서 npm install 후 npm start 하세요
```

## Redux 들어가기 전 한 번 쓱 정리
- [도움이 많이 된 블로그](https://react.vlpt.us/, "사실 90% 이거보고 공부함")
- 전부 함수형 컴포넌트 사용
- 내맘대로 무조건 기억해야 되는 거만 적을거임 ㅅㄱ
***


### 컴포넌트 선언 + props + 조건부 렌더링
```
self close말고 컴포넌트 안에 내용이 추가된다면, props.children으로 받아서 뿌려주면 됨
컴포넌트에 props명만 넘기면 받는 컴포넌트에서는 true로 받아옴
true일 때만 보여줄거면 삼항연산자 말고, isActive && <b>*</b> 이런 형식이 더 간편
```

- #### App.js
```javascript
import React from 'react';
import { Hello } from './Hello';

function App() {
  const age = 100;

  return (
    <Hello name="이준용" age={age} isActive />
  );
}

export default App;
```

- #### Hello.js
```javascript
import React from 'react';

function Hello({ name, age, isActive }) {
  return <div>{ isActive ? <b>*</b> : null } 안녕하세요 {name} ({age})</div>
}

// 기본값 설정 가능
Hello.defaultProps = {
  isActive: false,
}

export { Hello };
```
