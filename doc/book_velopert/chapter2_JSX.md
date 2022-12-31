
## 2. JSX
---
JSX는 자바스크립트의 확장 문법으로 XML과 매우 비슷하게 생겼습니다.
위 코드는 번들링 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환 됩니다. (번들링은 webpack을 이용하는데 그 과정 내에서 바벨을 사용하나보다.)
```jsx title="hello react"
function App() {
    return {
        <div>
            Hello <b>react</b>
        </div>
    }
}
```

아래와 같이 번들링이 됩니다.
<blockquote>
react function 사용 시

```javascript
function App() {
    return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}
```
</blockquote>

위와 같이 컴포넌트 렌더링 시 JSX가 아닌 `React.createElement` 함수를 사용해야 한다면 매우 불편할 것입니다.
>  ####  **그러면 JSX도 자바스크립트 문법이라고 할 수 있나요❓**
> JSX는 리엑트에서 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법은 아닙니다.
> 바벨은 preset 및 plugin을 설정해서 개발자들이 임의로 만든 문법, 혹은 차기 자바스크립트의 문법들을 사용할 수 있습니다.

### 2.3 JSX의 장점
---
#### 2.3.1 보기 쉽고 익숙하다.
---
	일반 자바스크립트 코드와 JSX 코드를 한번 비교해 보면, 몇 초만 보아도 JSX를 사용하는 편이 더 가독성이 높고 작성이 쉽게 느껴집니다. 결국 HTML 코드와 같아 집니다.

#### 2.3.2 더욱 높은 활용도
---
> index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

앞에서 만든

