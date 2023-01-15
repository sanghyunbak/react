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
위는 함수형 컴포넌트 입니다.(함수는 리턴 가능한 클래스로 봐도 될까❓)
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
차이점은 2가지 입니다.
1. state 기능 및 라이프 사이클 기능을 사용할 수 있다.
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
> 
> **함수 컴포넌트의 장점**
>  - 선언하기가 편하다.
>  - 메모리 자원을 덜 사용한다.
>  - 빌드 후 배포 시 결과물의 파일 크기가 더 작습니다.
>
> **함수 컴포넌트의 단점**
> - state와 라이프사이클 API 사용이 불가능하다.
>> - react 16.8 버전부터 Hooks 기능 도입을 통해 해결 됨
> 리엑트 공식 메뉴얼에서는 컴포넌트 작성 시 함수컴포넌트를 사용하고, Hooks를 사용하도록 권장 하고 있다.
> 그렇지만 클래스형 컴포넌트가 사라지지는 않기 때문에 알아두기는 해야 한다.

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
⭐️ 함수 내 함수를 바로 정의 하지 않고 리턴 객체에 담아 줍니다.
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
<br />

### 3.3 props
---
<br />

#### 3.3.1 JSX 내부에서 props 렌더링
---
컴포넌트 함수에서 파라미터로 받아서 사용할 수 있습니다.
```javascript
const MyComponent = props => {  
  return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>  
}  
  
export default MyComponent;
```
<br />

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
<br />

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
<br />

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
<br />

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


구조 분해 문법이라고도 불립니다. 함수 파라미터에서도 쓰일 수 있습니다.

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
<br />

#### 3.3.6 propTypes를 통한 props 검증
---
필수 props를 지정하거나 타입(type)을 지정할 때 protoTypes를 사용, 이를 위해 import 구문을 사용하여 불러와야 합니다.
```javascript
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
  (...)
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string
};
```

이러면 name은 무조건 문자열(string) 형태로 전달해야 된다는 것을 의미합니다.
아래와 같이 일치하는 타입이 아닌 값을 전달하면 브라우저에서 에러를 보여줍니다.
```javascript
import MyComponent from "./props";  
  
const App = () => {  
  return <MyComponent name={3}>리엑트</MyComponent>; //3을 넣을 때 따옴표가 아닌 {}
};  
  
export default App;
```
<br />

#### 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정
---
propTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업을 해 봅시다.
propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 됩니다.
```javascript
import PropTypes from 'prop-types';  
  
const MyComponent = ({name, favoriteNumber, children}) => {  
  return (  
      <div>  
        안녕하세요, 제 이름은 {name}입니다. <br/>  
        children 값은 {children}입니다.  
        <br/>  
        제가 좋아하는 숫자는 {favoriteNumber}입니다.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: '기본 이름',  
};  
  
MyComponent.propTypes = {  
  name: PropTypes.string,  
  favoriteNumber: PropTypes.number.isRequired,  
};  
  
export default MyComponent;
```

앞서 정의한 App.js를 보면 favoriteNumber를 정의하지 않았기 때문에 브라우저에서 경고 메시지를 생성하는 것을 볼 수 있습니다. 아래와 같이 값을 지정한다면 경고 없이 출력되는 것을 볼 수 있습니다.

```javascript
import MyComponent from './MyComponent';  
  
const App = () => {  
  return (  
      <MyComponent name="React" favoriteNumber={1}>  
        리엑트  
      </MyComponent>  
  );  
};  
  
export default App;
```
<br />

##### 3.3.6.2 더 많은 PropTypes 종류
---
- array
- arrayOf
- bool
- func
- number
- object
- string
- symbol
- node
- instanceOf
- oneOf
- oneOfType
- objectOf
- shape
- any

더 많은 정보는 https://github.com/facebook/prop-types 에서 볼 수 있습니다.
<br />

#### 3.3.7 클래스형 컴포넌트에서 props 사용하기
---
클래스형 컴포넌트에서 props를 사용하려면 this.props를 조회하면 됩니다.

```javascript
import { Component } from "react";  
import PropTypes from "prop-types";  
  
class MyComponent extends Component {  
  render() {  
    const { name, favoriteNumber, children } = this.props; //destructuring assignment  
    return (  
      <div>  
        안녕하세요, 제 이름은 {name}입니다. <br />  
        children 값은 {children}입니다.  
        <br />  
        제가 좋아하는 숫자는 {favoriteNumber}입니다.  
      </div>  
    );  
  }  
}  
  
MyComponent.defaultProps = {  
  name: "기본 이름",  
};  
  
MyComponent.propTypes = {  
  name: PropTypes.string,  
  favoriteNumber: PropTypes.number.isRequired,  
};  
  
export default MyComponent;**
```

클래스형 컴포넌트에서는 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 것도 가능합니다.

```javascript
import { Component } from "react";  
import PropTypes from "prop-types";  
  
class MyComponent extends Component {  
  static defaultProps = {  
    name: "기본 이름",  
  };  
  
  static propTypes = {  
    name: PropTypes.string,  
    favoriteNumber: PropTypes.number.isRequired,  
  };  
  
  render() {  
    const { name, favoriteNumber, children } = this.props; //destructuring assignment  
    return (  
      <div>  
        안녕하세요, 제 이름은 {name}입니다. <br />  
        children 값은 {children}입니다.  
        <br />  
        제가 좋아하는 숫자는 {favoriteNumber}입니다.  
      </div>  
    );  
  }  
}  
  
export default MyComponent;
```

> **defaultProps와 propTypes는 꼭 사용해야 하나요?**
> 그렇지는 않습니다. 선택사항입니다.
<br />

### 3.4 state
---
state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다. props의 경우 부모 컴포넌트가 설정하는 값이며 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있습니다.
리엑트에서는 두 가지 종류의 `state`가 있습니다.
하나는 클래스형 컴포넌트가 지니고 있는 `state`이고 다른 하나는 함수 컴포넌트에서 `useState`입니다.
<br />

#### 3.4.1 클래스형 컴포넌트의 state
---
```javascript
import React, {Component} from 'react';  
  
class ClassComponentState extends Component {  
  constructor(props) {  
    super(props);  
    //state의 초깃값 설정하기  
    this.state = {  
      number: 0  
    };  
  }  
  render() {  
    const { number } = this.state; // state 조회 시 this.state로 조회 합니다.  
    return (  
        <div>  
          <h1>{number}</h1>  
          <button  
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.  
              onClick={() => {  
                // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.  
                this.setState({ number: number + 1});  
              }}  
          >  
            +1  
          </button>  
        </div>  
    );  
  }  
}  
  
export default ClassComponentState;
```
> **Rule**
> 1. constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 합니다.
>> - 근데... constuctor를 안써주어도 됨
> 2. state는 객체 형식이어야 합니다.
> 3. 참조는 `this.state`와 같이 this에서 변수를 참조할 수 있습니다.

```javascript
import { Component } from 'react';  
  
class StateTest extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      number: 0,  
      fixedNumber: 0  
    }  
  }  
  
  render() {  
    const {number, fixedNumber} = this.state;  
    return (  
        <div>  
          <h1>{number}</h1>  
          <h2>바뀌지 않는 값: {fixedNumber}</h2>  
          <button  
            // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.  
            onClick={() => {  
              this.setState({number: number + 1});  
            }}  
          >  
           +1  
          </button>  
        </div>  
    );  
  }  
};  
  
export default StateTest;
```

현재 state 안에 fixedNumber값이 추가 되었습니다.

<br />

##### 3.4.1.2 state를 constructor에서 꺼내기
---
```javascript
import {Component} from 'react';  
  
class StateTestWithoutConstructor extends Component {  
  
  state = {  
    number: 0,  
    fixedNumber: 0,  
  };  
  
  render() {  
    const {number, fixedNumber} = this.state;  
    return (  
        <div>  
          <h1>State without constructor</h1>  
          <h1>{number}</h1>  
          <h2>바뀌지 않는 값: {fixedNumber}</h2>  
          <button  
              // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.  
              onClick={() => {  
                this.setState({number: number + 1});  
              }}  
          >  
            +1  
          </button>  
        </div>  
    );  
  }  
};  
  
export default StateTestWithoutConstructor;
```
<br />

##### 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
---

setState인자로 객체를 넘겨 줄 경우 Async한 동작을 하게 되지만, 인자로 함수를 넘겨주는 경우 Sync한 동작을 수행하게 됩니다. 이때는 아래와 같은 형태의 코드가 됩니다.
```javascript
this.setState((prevState, props) => {
  return {
    // 업데이트하고 싶은 내용
  }
})
```

아래와 같이
```javascript
import {Component} from 'react';  
  
class SyncSetStateWithArrowFunction extends Component {  
  state = {  
    number: 0,  
    fixedNumber: 0,  
  };  
  
  render() {  
    const {number, fixedNumber} = this.state;  
    return (  
        <div>  
          <h1>State without constructor</h1>  
          <h1>{number}</h1>  
          <h2>바뀌지 않는 값: {fixedNumber}</h2>  
          <button  
              // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.  
              onClick={() => {  
                this.setState({number: number + 1});  
                this.setState({number: this.state.number + 1});  
              }}  
          >  
            +1 (Async version)  
          </button>  
  
          <button  
              onClick={() => {  
                this.setState(prevState => {  
                  return {  
                    number: prevState.number + 1  
                  };  
                });  
				// 위 코드와 아래 코드는 완전히 동일한 기능을 하는 코드 입니다.
				// 화살표 함수에서 반환을 바로 하고 싶다면 {}를 없애면 됩니다.
				// 아래는 객체를 ()로 감싸서 객체인 {} 밖에 ()로 감싼 형태 입니다.
                this.setState(prevState => ({  
                  number: prevState.number + 1  
                }));  
              }}  
          >  
            +1 (Sync version)  
          </button>  
        </div>  
    );  
  }  
};  
  
export default SyncSetStateWithArrowFunction;
```
<br />

##### 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
---
콜백함수를 두번 째 파라미터로 제공하기 때문에 해당 인자 값을 넣으면 setState로 값을 업데이트한 이후에 특정 작업을 처리할 수 있습니다.

```javascript
import {Component} from 'react';  
  
class CallBack extends Component {  
  state = {  
    number: 0,  
    fixedNumber: 0,  
  };  
  
  render() {  
    const {number, fixedNumber} = this.state;  
    return (  
        <div>  
          <h1>CallBack Test (show console.log)</h1>  
          <h1>{number}</h1>  
          <h2>바뀌지 않는 값: {fixedNumber}</h2>  
  
          <button  
              onClick={() => {  
                this.setState(prevState => {  
                  return {  
                    number: prevState.number + 1,  
                  };  
                });  
  
                this.setState(prevState => ({  
                      number: prevState.number + 1,  
                    }),  
                    () => {  
                      console.log('setState function is just called...');  
                      console.log(this.state);  
                    }  
                );  
              }}  
          >  
            +1 (Sync and Callback version)  
          </button>  
        </div>  
    );  
  }  
};  
  
export default CallBack;
```
<br />

#### 3.4.2 함수 컴포넌트에서 useState 사용하기
---
> 리엑트 16.8 버전 이전에서는 함수 컴포넌트에서 state를 사용할 수 없었습니다.
> 16.9 이후부터 useState라는 함수를 사용하여 함수컴포넌트에서도 state를 사용할 수 있게 되었습니다.
> 이 과정에서 <mark>Hooks</mark>를 사용하게 되었습니다.
> useState는 Hooks의 한 종류로 사용되며 더 많은 Hooks의 종류는 8장에서 보도록 합니다.
<br />

##### 3.4.2.1 배열 비구조화 할당
---
> 🚦배열 비구조화 할당은 이전에 배운 객체 비구조화 할당과 비슷합니다.
> 즉, 배열을 쉽게 추출해 줄 수 있게 합니다.

아래와 같이 배열의 값 2개를 추출할 수 있습니다.
```javascript
const array = [1,2];
const one = array[0];
const two = array[1];
```

이를 배열 비 구조화 할당문을 사용하면 아래와 같이 값을 추출할 수 있습니다.
```javascript
const array = [1,2];
const[one, two] = array;
```
<br />

##### 3.4.2.2 useState 사용하기
---
> 💊 배열 비 구조화 할당문을 앞서 알려드렸기 때문에 useState 함수를 쉽게 이해할 수 있습니다.
> 새로운 컴포넌트에서 비구조화 할당문을 배워 봅시다.

```javascript
import {useState} from 'react';  
  
const Say = () => {  
  const [message, setMessage] = useState('');  
  const onClickEnter = () => setMessage('안녕하세요');  
  const onClickLeave = () => setMessage('안녕히 가세요!');  
  
  return (  
      <div>  
        <button onClick={onClickEnter}>입장</button>  
        <button onClick={onClickLeave}>퇴장</button>  
        <h1>{message}</h1>  
      </div>  
  );  
};  
  
export default Say;
```

useState의 인자에는 초깃값이 들어갑니다.
state 초기 값은 객체형태를  넣어주어야 하지만 useState에서는 반드시 객체가 아니어도 상관없습니다.
값의 형태는 자유입니다. 함수 호출 결과로 배열이 반환되는데요. 배열의 첫번 째 값은 현재 상태이고, 두번 째 값은 상태를 바꾸어주는 함수 입니다. 이 함수를 setter라고 합니다. 여기서 message, setMessage이름은 변경이 가능한 이름들 입니다.

<br />

##### 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기
---

기존 입장, 퇴장 버튼 외에 컬러를 표현하는 부분도 useState를 사용해보자.
아래와 같이 복수의 setState를 사용할 수 있다.
```javascript
import {useState} from 'react';  
  
const SayColor = () => {  
  const [message, setMessage] = useState('');  
  const onClickEnter = () => setMessage('안녕하세요');  
  const onClickLeave = () => setMessage('안녕히 가세요!');  
  
  const [color, setColor] = useState('black');  
  
  return (  
      <div>  
        <button onClick={onClickEnter}>입장</button>  
        <button onClick={onClickLeave}>퇴장</button>  
        <button style={{'color': message}} onClick={()=> setMessage('Test')}>Test</button>  
        <h1 style={{color}}>{message}</h1>  
        <h1 style={{color}}>Color: {color}</h1>  
        <h2> style attribute에 들어가면 color 변수는 color: {color} 형태로 들어가고...</h2>  
        <h2> 태그사이 값으로 들어가면 {color} 형태로 들어가는데... 왜 그러지? </h2>  
        <button style={{color: 'red'}} onClick={() => setColor('red')}>빨강  
        </button>  
        <button style={{color: 'green'}} onClick={() => setColor('green')}>초록  
        </button>  
        <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑  
        </button>  
      </div>  
  );  
};  
  
export default SayColor;
```

코드 내에도 기술하였듯이 style 속성 값으로 들어가게 되면 신기하게도 key: value 형태로 들어가고 태그 사이의 값으로 들어가면 value 형태로 들어가는데... 가만 보아하니 {{value}} 형태가 있고 {value} 형태가 있는데...
한번 테스트 해보자. webstorm에서 보면 이게 맞는 거 같다.
<br />

### 3.5 state를 사용할 때 주의 사항
---
> 💡**info**
> state 변경 시에는 setState혹은 useState를 사용하고 직접적인 접근을 하면 안됩니다.
> 아래와 같은 접근은 하시면 안됩니다.

```javascript
// in class component
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// in function component
const [object, setObject] = useSafe({a: 1, b: 1});
object.b = 2;
```

아래와 같이 사본을 만들어서 Setter를 통해 접근을 합니다.

```javascript
// object access
const array = [
{id: 1, value: true},
{id: 2, value: true},
{id: 3, value: false},
];

let nextArray = array.concat({id: 4}); // add new item
nextArray.filter(item => item.id !== 2);
nextArray.map(item => (item.id === 1 ❓ {...item, value: false} : item)); // when id:1 value set to false


```

위에서 ...은 spread 연산자라고 하며 내용은 이후 차근차근 알아보겠습니다.
<br />

### 3.6 정리
---
> 👍 Summary
> 1. 이번 장에서는 component를 만들어서 내보내는 방법을 알아 보았습니다.
> 2. props와 state를 사용하는 방법을 배워 보았습니다.
> 3. 둘의 역할은 매우 다른데 props는 부모 컴포넌트가 설정한 값을 사용하고, state는 컴포넌트 자체 생성 값으로 컴포넌트 내부에서 값을 업데이 할 수 있습니다.
> 4. props를 사용해도 유동적으로 활용할 수 있습니다. 앞으로 다뤄볼 일정관리 앱을 보면 부모 컴포넌트의 state값을 자식의 props로 넘겨주고 자식 컴포넌트에서 특정 이벤트가 발생할 경우 부모의 메서드를 호출하면 유동적으로 props값을 사용할 수 있습니다.
> 5. state와 useState를 배워보았는데 앞으로는 useState를 사용할 것을 권장 합니다.(react에서도 Hooks사용을 권장)


