## 3. Component
---

> ** 💡 objective of this chapter **
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

<blockquote>
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

<blockquote>
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

