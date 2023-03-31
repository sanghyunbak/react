
## 2. JSX
---
JSX는 자바스크립트의 확장 문법으로 XML과 매우 비슷하게 생겼습니다.
위 코드는 번들링 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환 됩니다. (번들링은 webpack을 이용하는데 그 과정 내에서 바벨을 사용하나보다.)
```jsx title="hello react"
function App() {  
    return (  
        <div>  
            Hello <b>react</b>  
        </div>  
    )  
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
<blockquote> index.js

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
</blockquote>


앞서 만든 `App`컴포넌트는 HTML 태그 쓰듯이 가져다가 쓸 수 있는 것을 알 수 있습니다.
여기서 `React.StrictMode`라는 컴포넌트가 쓰였는데 이는 사라질 레거시 기능을 사용할 때 경고를 주고 미래 리엑트 버전에 도입될 기능들이 정상적으로 호환될 수 있도록 유도하는 개발환경에서만 활성화되는 디버깅 컴포넌트 입니다.
`reportWebVitals()`는 웹 성능을 측정하는 도구 입니다.

### 2.4 JSX 문법
---
컴포넌트에 여러 요소가 있다면 반드시 하나의 부모요소로 감싸야 합니다.
```JSX
function AppTest() {  
    return (  
        <h1>Hello React!</h1>  
        <h2>Do you work well?</h2>  
    ); 
}
```
이미 IDE에서 에러를 뱉기 대문에 개발자는 이게 잘못 된 것을 인지할 수 있다.
아래와 같이 div 태그로 감싸 준다면 문제 없이 동작할 것이다.
```jsx
function AppTest() {  
    return (  
        <div>  
            <h1>Hello React!</h1>  
            <h2>Do you work well?</h2>  
        </div>  
    ); 
}
```
컴포넌트를 단일 요소로 감싸는 제약은 Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교를 하기 위해서 입니다.
여기서 Div 테그를 달기 싫다면 react 버전이 16 이상이라면 `Fragment` 태그를 사용해도 된다(react로 부터 Fragment를 import해야 한다.).
혹은 비어있는 태그를 넣어도 된다.

```JSX
import {Fragment} from "react";

function App() {  
    return (  
        <Fragment>  
            <h1>Hello React!</h1>  
            <h2>Do you work well?</h2>  
        </Fragment>  
    )  
}  
export default App;  
  
function App() {  
    return (  
        <>  
            <h1>Hello React!</h1>  
            <h2>Do you work well?</h2>  
        </>  
    )  
}  
export default App;
```
앞서 말하기를 JSX는 DOM 요소를 렌더링하는 기능 이외에도 유용한 기능들을 가지고 있다고 했다.
아래와 같이 JSX 안에서 자바스크립트 표현식을 쓸 수 있고, 해당 변수를 사용하려면 변수의 이름을 {}로 감싸면 됩니다.
``` JSX
import {Fragment} from "react";

function App() {  
    const name = 'React';  
    return (  
        <Fragment>  
            <h1>Hello {name}!</h1>  
            <h2>Do you work well?</h2>  
        </Fragment>  
    )  
}  
export default App;
```
>  ** `let`과 `const` **
>  `const`는 ES6에서 도입 되었으며 한번 지정 후에는 변경이 불가능한 상수를 선언할 때 사용합니다.
>  이전 버전에서는 `var`를 사용하여 변수를 선언 했지만 var의 경우 변수의 범위가 함수여서 문제가 좀 있었습니다.
>  `let`의 경우 변수의 범위가 블록 단위이기 때문에 햇갈릴 일이 많이 없어서 대부분 let을 사용합니다.

<blockquote>

```javascript
function myFunctionVar() {  
  var a = 'hello';  
  if (true) {  
    var a = "bye";  
    console.log(a);  
  }  
  
  console.log(a)  
}  
console.log("😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎")  
myFunctionVar() // var키워드는 scope이 함수 단위라 bye, bye 가 출력 됨  
  
function myFunctionLet() {  
  let a = 'hello';  
  if (true) {  
    let a = "bye";  
    console.log(a);  
  }  
  
  console.log(a)  
}  
console.log("😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀")  
myFunctionLet() // let 키워드는 scope이 bye, hello가 출력 됨
```
</blockquote>
<br />

#### 2.4.3 if문 대신 조건부 연산자
---
JSX내부 자바스크립트 표현식에서는 안타깝게도 if문을 사용할 수는 없습니다.
대신 {}안에 조건부 연산자를 사용할 수 있습니다.
```javascript
function App() {  
  const name = '리엑트';  
  return (  
      <div>  
        {name === '리엑트' ? (  
            <h1>리엑트입니다.</h1>  
        ) : (  
            <h2>리엑트가 아닙니다.</h2>  
        )}  
      </div>  
  );  
}  
  
export default App;
```
<br />

#### 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
특정 조건을 만족하지 못하면 아무것도 렌더링하지 않는 경우에 `null`을 사용할 수 있습니다.
```javascript
function App() {  
  const name = '뤼엑트';  
  return <div>{name === '리엑트' ? <h1>리엑트 입니다.</h1> : null}</div>;
}  
  
export default App;
```

하지만 이보다 짧은 코드도 가능합니다.
```javascript
function App() {  
  const name = '뤼엑트';  
  return <div>{name === '리엑트' && <h1>리엑트 입니다.</h1>}</div>; // JSX를 괄호로 감싸지 않았다.  
}  
  
export default App;
```

위 코드가 가능한 이유는 논리 연산자인 `&&`는 false인 경우 null과 마찬가지로 아무 것도 나타내지 않기 때문입니다.
여기서 한 가지 주의해야 할 점이 있습니다. falsy한 값인 0의 경우 예외적으로 화면에 나타난다는 점 입니다.
> **언제 JSX를 괄호로 감싸야 하나요❓**
> 사실 괄호로 감싸는 것은 필수는 아닙니다. 보통 여러 줄일때는 괄호로 감싸고 그렇지 않은 경우(한 줄일 경우) 감싸지 않고 사용합니다.

<br />

#### 2.4.5 undefined를 렌더링하지 않기
---
undefined를 렌더링 하게 되면 아래와 같은 오류가 발생됩니다.

```javascript
function App() {  
  const name = undefined;  
  return name;  
}  
  
export default App;

```

`App(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.`

<br />

어떤 값이 undefined일 수 있다면 OR(||) 연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있습니다.

<br />

```javascript
function App() {  
  const name = undefined;  
  return name || '값이 undefined 입니다.';  
}  
  
export default App;
```

반면 JSX 내부에서 undefined를 렌더링 하는 것은 괜찮습니다.

<br />

```jsx
import './Apps.css'

function App() {  
  const name = undefined;  
  return <div>{name}</div>;  
}  
  
export default App;
```

<br />
```jsx
import './App.css'

function App() {
  const name = undefined;
  return <div> {name || '리엑트'} </div>;
}

export default App;
```


#### 2.4.6 inline styling
---
리엑트에서는 DOM요소에 스타일을 적용할 때에 문자열 형태가 아닌 객체 형태로 넣어 주어야 합니다.
background-color처럼 -문자가 포함되는 이름이 있을 경우 camelCase로 변경해서 넣어 주어야 합니다.
```javascript
function AppAddStyle() {  
  const name = "리엑트";  
  const style = {  
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성  
    backgroundColor: "black",  
    color: "aqua",  
    fontSize: "48px", // font-size -> fontSize  
    fontWeight: "bold", // font-weight -> fontWeight  
    padding: 16, // 단위 생략 시 px로 자동 지정  
  };  
  return <div style={style}>{name}</div>;  
}
```

위 코드와 같이 객체 형태로 스타일 값을 `style` 변수에 선언 해 주었습니다.
위와 다르게 직접 스타일을 더해 줄 수 있습니다.
```javascript
function AppAddStyleDirect() {  
  const name = "리엑트";  
  
  return <div style={{  
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성  
    backgroundColor: "black",  
    color: "aqua",  
    fontSize: "48px", // font-size -> fontSize  
    fontWeight: "bold", // font-weight -> fontWeight  
    padding: 16, // 단위 생략 시 px로 자동 지정  
  }}>{name}</div>;  
}  
  
export default AppAddStyleDirect;
```
<br />

#### 2.4.7 class 대신 className
---
CSS클래스를 사용하려면 class대신 className을 사용해 주어야 합니다.

```css
.react {  
    background: aqua;  
    color: black;  
    font-size: 48px;  
    font-weight: bold;  
    padding: 16px;  
}
```

`react` 클래스를 사용하려면 JSX에서는 className이라는 변수 명으로 값을 넣어 주어야 합니다.
```javascript
import './jsx_test.css'  
  
function AppTestCss() {  
  const name = "리엑트😄";  
  return <div className="react">{name}</div>  
}  
  
export default AppTestCss;
```

리엑트 v16 이상부터는 class를 className으로 변환시켜 주고 경고를 띄웁니다.
<br />
#### 2.4.8 꼭 닫아야 하는 태그
---
input 태그 같은 경우는 html에서는 닫지 않아도 됩니다.
JSX의 경우에 닫지 않는 경우에 오류가 발생합니다.
태그 사이에 값이 없는 경우에는 다음과 같이 작성할 수 있습니다.
```javascript
import "add_css.css";  
  
function AppSelfClosing() {  
  const name = "리엑트";  
  
  return (  
    <>  
      <div className="react">{name}</div>  
      <input />  
    </>  
  );  
}
```

`<input />` 태그를 보면 스스로 닫혀있는 것을 알 수 있습니다.
<br />
#### 2.4.9 주석
---
JSX 내부에서 주석을 작성할 경우 `{/* ... */}`로 감싸서 작성하면 됩니다.
그냥 javascript처럼 주석을 작성한다면 주석이 그대로 보입니다.
<br />

### 2.5 ESLint와 Prettier 적용하기
---
ESLint는 문법 검사 도구 이고 Prettier는 스타일 자동 정리 도구 입니다.