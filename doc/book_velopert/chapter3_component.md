## 3. Component
---

> **💡 objective of this chapter**
> 1. 클래스형 컴포넌트를 알아 봅니다.
> 2. 컴포넌트의 속성 값을 지닌 props를 알아 봅니다.
> 3. 상태 값을 지닌 state를 사용하는 방법을 알아 봅니다.

<br />

### 3.1 class component
---

2장에서 본 컴포넌트는 함수형 컴포넌트 입니다.
```javascript
function App() {  
  const name = "뤼엑트";  
  return <div>{name === "리엑트" ? <h1>리엑트 입니다.</h1> : null}</div>;  
}
```
위는 함수형 컴포넌트 입니다.
아래는 클래스형 컴포넌트 입니다.
```javascript
  
class App extends Component {  
  render() {  
    const name = "react";  
    return <div classNAme="react">{name}</div>;  
  }  
}  
  
export default App
```

두 컴포넌트의 역할은 동일합니다.
차이점은 3가지 입니다.
1. state 기능 및 라이프 사이클 기능을 사용할 수 있따.
2. 임의 메서드를 정의할 수 있다.

> ### class 문법
> ES6에서 class 문법이 생겼습니다. 이전 버전에서도 개념은 있었지만 prototype이라는 문법을 사용해서 아래처럼 작업을 해야 했습니다.
> 함수를 하나 정의하고(생성자 개념), 함수의 prototype 속성에 원하는 method이름의 속성에 함수를 할당합니다.
> 생성자 성격의 원 함수에서 정의한 attribute인 name에 접근하기 위해 this 키워드를 사용했습니다.
<blockquote> App.js

```javascript
function Dog(name) {  
  this.name = name;  
}  
  
Dog.prototype.say = function () {  
  console.log(this.name + ": 멍멍");  
};
```
</blockquote>

> 아래와 같이 class 키워드를 사용해서 클래스를 생성할 수 있습니다.
> 생성자는 constructor 이름의 함수로 선언할 수 있습니다.
> 생성자에서 할당한 속성 값인 name 은 prototype 방식과 마찬가지로 this 키워드를 통해 접근이 가능합니다.
<blockquote> App.js 

```javascript
class Dog {  
  constructor(name) {  
    this.name = name;  
  }  
  say() {  
    console.log(this.name + ": 멍멍");  
  }  
}  
  
const dog = new Dog("흰둥이");  
dog.say(); // 흰둥이: 멍멍
```
</blockquote>

> 클래스형 컴포넌트에는 render 함수가 꼭 있어야 한다(상속❓, implements❓). 그리고 반환해야 하는 JSX 값을 가지고 있어야 한다.
> **함수 컴포넌트의 장점**
>  - 선언하기가 편하다.
>  - 메모리 자원을 덜 사용한다.
>  - 빌드 후 배포 시 결과물의 파일 크기가 더 작습니다.
>
> **함수 컴포넌트의 단점**
> - state와 라이프사이클 API 사용이 불가능하다.
    > 	- react 16.8 버전부터 Hooks 기능 도입을 통해 해결 됨
    >
    >  리엑트 공식 메뉴얼에서는 컴포넌트 작성 시 함수컴포넌트를 사용하고, Hooks를 사용하도록 권장 하고 있다.
    > 	그렇지만 클래스형 컴포넌트가 사라지지는 않기 때문에 알아두기는 해야 한다.

<br />

### 3.2 첫 컴포넌트 생성
---
파일 만들기 -> 코드 작성하기 -> 모듈 내보내기 및 불러오기
<br />

#### 3.1.1 소스 디렉터리에 MyComponent.js 파일 생성
---
```javascript
const MyComponent = () => {
	return <div>나의 새롭고 멋진 컴포넌트 </div>;
};

export default MyComponent;
```

()=> 는 ES6에서 도입된 화살표 함수 문법 입니다.

<blockquote>

화살표 함수(arrow function)는 주로 함수를 파라미터로 전달할 때 유용
``` javascript
setTimeout(function() {
  console.log('hello world');
}, 1000);

setTimeout(() => {  
  console.log('hello world');  
}, 1000);
```

두 함수의 용도가 다른데 이는 this의 반환 값을 보고 알 수 있습니다.
```javascript
function BlackDoc() {  
  this.name = "흰둥이";  
  return {  
    name: "검둥이",  
    bark: function () {  
      console.log(this.name + ": 멍멍!");  // 검둥이 멍멍
    },  
  };  
}  
  
const blackdoc = BlackDoc();  
blackdoc.bark();  
  
function WhiteDoc() {  
  this.name = "흰둥이";  
  return {  
    name: "검둥이",  
    bark: () => {  
      console.log(this.name + ": 멍멍!");  // 흰둥이 멍멍
    },  
  };  
}  
  
const whitedoc = WhiteDoc();  
whitedoc.bark();
```

일반함수(function 키워드를 사용해서 정의한 함수)의 경우 자신이 종속된 객체를 this로 가리키며, 화살표함수는 자신이 종속된 인스턴스를 가리킵니다.

</blockquote>

#### 3.2.3 모듈 내보내기 및 불러오기
---
##### 3.2.3.1 모듈 내보내기 (export)
```javascript
export default MyComponent;
```

다른 파일에서 이 파일을 import 할 때 위에서 선언한 MyComponent 클래스를 불러오도록 설정

##### 3.2.3.2 모듈 불러오기 (import)
``` javascript, title="App.js"
import Mycomponent from `./MyComponent`;  
  
const App = () => {  
  return <Mycomponent />  
};  
  
export default App;
```

import 문을 통해 작성한 MyComponent를 불러 옵니다.

### 3.3 props
---
#### 3.3.1 JSX 내부에서 props 렌더링
---
컴포넌트 함수에서 파라미터로 받아서 사용할 수 있습니다.
```javascript
const MyComponent = props => {  
  return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>  
}  
  
export default MyComponent;
```

#### 3.3.2 컴포넌트를 사용할 때 props 값 지정하기
---
props 값은 부모 컴포넌트에서 지정합니다. MyComponent를 사용하는 App.js에서 다음과 같이 지정합니다.
``` javascript
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" />;
};

export default App;

```

#### props 기본값 설정: defaultProps
---
`return <MyComponent name="React" />`에서 name 값을 지운다면 어떻게 될까요❓
"안녕하세요. 제 이름은 입니다." 라는 내용이 보일 것입니다.

```javascript
const MyComponent = props => {  
  return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>  
}  
  
MyComponent.defaultProps = {  
  name: "기본 이름"  
};  
export default MyComponent;
```

#### 3.3.4 태그 사이의 내용을 보여주는 children
---
리엑트에서 컴포넌트 사이의 내용을 보여주는 props가 있는데 바로 이게 children입니다.
```javascript
import MyComponent from "./MyComponent";  
  
const App = () => {  
  return <MyComponent>리엑트</MyComponent>;  
};  
  
export default App;
```

위 코드에서 MyComponent 태가 사이에 작성한 리엑트라는 문자열을 MyComponent 내부에서 보여 주려면 props.children 값을 보여 주어야 합니다.

```javascript
const MyComponent = props => {  
  return (  
      <div>  
        안녕하세요, 제 이름은 {props.name} 입니다. <br />  
        children 값은 {props.children}  
        입니다.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "기본 이름"  
};  
  
export default MyComponent
```

#### 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
---
props의 값을 호출하기 위해 props를 앞에 계속 붙여주고 있습니다.
이게 매우 귀찮기 때문에 Destructuring Assignment 문법을 통해 내부의 값을 바로 추출하는 방법을 알아보겠습니다.

```javascript
const MyComponent = (props) => {  
  const { name, children } = props;  
  return (  
    <div>  
      안녕하세요, 제 이름은 {name} 입니다.  
      <br />  
      children 값은 {children} 입니다.  
    </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "기본 이름",  
};  
export default MyComponent;
```


구조 분해 문법이라고도 불린다. 함수 파라미터에서도 쓰일 수 있다.

```javascript
const MyComponent = ({ name, children }) => {  
  return (  
      <div>  
        안녕하세요, 제 이름은 {name} 입니다.  
        <br />  
        children 값은 {children} 입니다.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "기본 이름",  
};  
export default MyComponent;
```

props 이름도 나오지 않았지만 이렇게 잘 사용할 수 있습니다. 앞으로는 비구조화 할당 문법을 사용합니다.

#### 3.3.6 propTypes를 통한 props 검증