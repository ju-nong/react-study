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


### 컴포넌트 선언 및 props

- #### App.js
```javascript
import React from 'react';
import { Hello } from './Hello';

function App() {
  const age = 100;

  return (
    <Hello name="이준용" age={age} />
  );
}

export default App;
```

- #### Hello.js
```javascript
import React from 'react';

function Hello({ name, age }) {
  return <div>안녕하세요 {name} ({age})</div>
}

// 기본값 설정 가능
Hello.defaultProps = {
  age: 23
}

export { Hello };
```
