## 3. Component
---

> **π‘ objective of this chapter**
> 1. ν΄λμ€ν μ»΄ν¬λνΈλ₯Ό μμ λ΄λλ€.
> 2. μ»΄ν¬λνΈμ μμ± κ°μ μ§λ propsλ₯Ό μμ λ΄λλ€.
> 3. μν κ°μ μ§λ stateλ₯Ό μ¬μ©νλ λ°©λ²μ μμ λ΄λλ€.

<br />

### 3.1 class component
---

2μ₯μμ λ³Έ μ»΄ν¬λνΈλ ν¨μν μ»΄ν¬λνΈ μλλ€.
```javascript
function App() {  
  const name = "λ€ΌμνΈ";  
  return <div>{name === "λ¦¬μνΈ" ? <h1>λ¦¬μνΈ μλλ€.</h1> : null}</div>;  
}
```
μλ ν¨μν μ»΄ν¬λνΈ μλλ€.(ν¨μλ λ¦¬ν΄ κ°λ₯ν ν΄λμ€λ‘ λ΄λ λ κΉβ)
μλλ ν΄λμ€ν μ»΄ν¬λνΈ μλλ€.
```javascript
  
class App extends Component {  
  render() {  
    const name = "react";  
    return <div classNAme="react">{name}</div>;  
  }  
}  
  
export default App
```

λ μ»΄ν¬λνΈμ μ­ν μ λμΌν©λλ€.
μ°¨μ΄μ μ 2κ°μ§ μλλ€.
1. state κΈ°λ₯ λ° λΌμ΄ν μ¬μ΄ν΄ κΈ°λ₯μ μ¬μ©ν  μ μλ€.
2. μμ λ©μλλ₯Ό μ μν  μ μλ€.

> ### class λ¬Έλ²
> ES6μμ class λ¬Έλ²μ΄ μκ²Όμ΅λλ€. μ΄μ  λ²μ μμλ κ°λμ μμμ§λ§ prototypeμ΄λΌλ λ¬Έλ²μ μ¬μ©ν΄μ μλμ²λΌ μμμ ν΄μΌ νμ΅λλ€.
> ν¨μλ₯Ό νλ μ μνκ³ (μμ±μ κ°λ), ν¨μμ prototype μμ±μ μνλ methodμ΄λ¦μ μμ±μ ν¨μλ₯Ό ν λΉν©λλ€.
> μμ±μ μ±κ²©μ μ ν¨μμμ μ μν attributeμΈ nameμ μ κ·ΌνκΈ° μν΄ this ν€μλλ₯Ό μ¬μ©νμ΅λλ€.
<blockquote> App.js

```javascript
function Dog(name) {  
  this.name = name;  
}  
  
Dog.prototype.say = function () {  
  console.log(this.name + ": λ©λ©");  
};
```
</blockquote>

> μλμ κ°μ΄ class ν€μλλ₯Ό μ¬μ©ν΄μ ν΄λμ€λ₯Ό μμ±ν  μ μμ΅λλ€.
> μμ±μλ constructor μ΄λ¦μ ν¨μλ‘ μ μΈν  μ μμ΅λλ€.
> μμ±μμμ ν λΉν μμ± κ°μΈ name μ prototype λ°©μκ³Ό λ§μ°¬κ°μ§λ‘ this ν€μλλ₯Ό ν΅ν΄ μ κ·Όμ΄ κ°λ₯ν©λλ€.
<blockquote> App.js 

```javascript
class Dog {  
  constructor(name) {  
    this.name = name;  
  }  
  say() {  
    console.log(this.name + ": λ©λ©");  
  }  
}  
  
const dog = new Dog("ν°λ₯μ΄");  
dog.say(); // ν°λ₯μ΄: λ©λ©
```
</blockquote>

> ν΄λμ€ν μ»΄ν¬λνΈμλ render ν¨μκ° κΌ­ μμ΄μΌ νλ€(μμβ, implementsβ). κ·Έλ¦¬κ³  λ°νν΄μΌ νλ JSX κ°μ κ°μ§κ³  μμ΄μΌ νλ€.
> 
> **ν¨μ μ»΄ν¬λνΈμ μ₯μ **
>  - μ μΈνκΈ°κ° νΈνλ€.
>  - λ©λͺ¨λ¦¬ μμμ λ μ¬μ©νλ€.
>  - λΉλ ν λ°°ν¬ μ κ²°κ³Όλ¬Όμ νμΌ ν¬κΈ°κ° λ μμ΅λλ€.
>
> **ν¨μ μ»΄ν¬λνΈμ λ¨μ **
> - stateμ λΌμ΄νμ¬μ΄ν΄ API μ¬μ©μ΄ λΆκ°λ₯νλ€.
>> - react 16.8 λ²μ λΆν° Hooks κΈ°λ₯ λμμ ν΅ν΄ ν΄κ²° λ¨
> λ¦¬μνΈ κ³΅μ λ©λ΄μΌμμλ μ»΄ν¬λνΈ μμ± μ ν¨μμ»΄ν¬λνΈλ₯Ό μ¬μ©νκ³ , Hooksλ₯Ό μ¬μ©νλλ‘ κΆμ₯ νκ³  μλ€.
> κ·Έλ μ§λ§ ν΄λμ€ν μ»΄ν¬λνΈκ° μ¬λΌμ§μ§λ μκΈ° λλ¬Έμ μμλκΈ°λ ν΄μΌ νλ€.

<br />

### 3.2 μ²« μ»΄ν¬λνΈ μμ±
---
νμΌ λ§λ€κΈ° -> μ½λ μμ±νκΈ° -> λͺ¨λ λ΄λ³΄λ΄κΈ° λ° λΆλ¬μ€κΈ°

<br />

#### 3.1.1 μμ€ λλ ν°λ¦¬μ MyComponent.js νμΌ μμ±
---
```javascript
const MyComponent = () => {
	return <div>λμ μλ‘­κ³  λ©μ§ μ»΄ν¬λνΈ </div>;
};

export default MyComponent;
```

()=> λ ES6μμ λμλ νμ΄ν ν¨μ λ¬Έλ² μλλ€.

<blockquote>

νμ΄ν ν¨μ(arrow function)λ μ£Όλ‘ ν¨μλ₯Ό νλΌλ―Έν°λ‘ μ λ¬ν  λ μ μ©
``` javascript
setTimeout(function() {
  console.log('hello world');
}, 1000);

setTimeout(() => {  
  console.log('hello world');  
}, 1000);
```

λ ν¨μμ μ©λκ° λ€λ₯Έλ° μ΄λ thisμ λ°ν κ°μ λ³΄κ³  μ μ μμ΅λλ€.
```javascript
function BlackDoc() {  
  this.name = "ν°λ₯μ΄";  
  return {  
    name: "κ²λ₯μ΄",  
    bark: function () {  
      console.log(this.name + ": λ©λ©!");  // κ²λ₯μ΄ λ©λ©
    },  
  };  
}  
  
const blackdoc = BlackDoc();  
blackdoc.bark();  
  
function WhiteDoc() {  
  this.name = "ν°λ₯μ΄";  
  return {  
    name: "κ²λ₯μ΄",  
    bark: () => {  
      console.log(this.name + ": λ©λ©!");  // ν°λ₯μ΄ λ©λ©
    },  
  };  
}  
  
const whitedoc = WhiteDoc();  
whitedoc.bark();
```
β­οΈ ν¨μ λ΄ ν¨μλ₯Ό λ°λ‘ μ μ νμ§ μκ³  λ¦¬ν΄ κ°μ²΄μ λ΄μ μ€λλ€.
μΌλ°ν¨μ(function ν€μλλ₯Ό μ¬μ©ν΄μ μ μν ν¨μ)μ κ²½μ° μμ μ΄ μ’μλ κ°μ²΄λ₯Ό thisλ‘ κ°λ¦¬ν€λ©°, νμ΄νν¨μλ μμ μ΄ μ’μλ μΈμ€ν΄μ€λ₯Ό κ°λ¦¬ν΅λλ€.

</blockquote>

#### 3.2.3 λͺ¨λ λ΄λ³΄λ΄κΈ° λ° λΆλ¬μ€κΈ°
---
##### 3.2.3.1 λͺ¨λ λ΄λ³΄λ΄κΈ° (export)
```javascript
export default MyComponent;
```

λ€λ₯Έ νμΌμμ μ΄ νμΌμ import ν  λ μμμ μ μΈν MyComponent ν΄λμ€λ₯Ό λΆλ¬μ€λλ‘ μ€μ 

##### 3.2.3.2 λͺ¨λ λΆλ¬μ€κΈ° (import)
``` javascript, title="App.js"
import Mycomponent from `./MyComponent`;  
  
const App = () => {  
  return <Mycomponent />  
};  
  
export default App;
```

import λ¬Έμ ν΅ν΄ μμ±ν MyComponentλ₯Ό λΆλ¬ μ΅λλ€.

<br />

### 3.3 props
---

<br />

#### 3.3.1 JSX λ΄λΆμμ props λ λλ§
---
μ»΄ν¬λνΈ ν¨μμμ νλΌλ―Έν°λ‘ λ°μμ μ¬μ©ν  μ μμ΅λλ€.
```javascript
const MyComponent = props => {  
  return <div>μλνμΈμ, μ  μ΄λ¦μ {props.name} μλλ€.</div>  
}  
  
export default MyComponent;
```

<br />

#### 3.3.2 μ»΄ν¬λνΈλ₯Ό μ¬μ©ν  λ props κ° μ§μ νκΈ°
---
props κ°μ λΆλͺ¨ μ»΄ν¬λνΈμμ μ§μ ν©λλ€. MyComponentλ₯Ό μ¬μ©νλ App.jsμμ λ€μκ³Ό κ°μ΄ μ§μ ν©λλ€.
``` javascript
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" />;
};

export default App;

```

<br />

#### props κΈ°λ³Έκ° μ€μ : defaultProps
---
`return <MyComponent name="React" />`μμ name κ°μ μ§μ΄λ€λ©΄ μ΄λ»κ² λ κΉμβ
"μλνμΈμ. μ  μ΄λ¦μ μλλ€." λΌλ λ΄μ©μ΄ λ³΄μΌ κ²μλλ€.

```javascript
const MyComponent = props => {  
  return <div>μλνμΈμ, μ  μ΄λ¦μ {props.name} μλλ€.</div>  
}  
  
MyComponent.defaultProps = {  
  name: "κΈ°λ³Έ μ΄λ¦"  
};  
export default MyComponent;
```

<br />

#### 3.3.4 νκ·Έ μ¬μ΄μ λ΄μ©μ λ³΄μ¬μ£Όλ children
---
λ¦¬μνΈμμ μ»΄ν¬λνΈ μ¬μ΄μ λ΄μ©μ λ³΄μ¬μ£Όλ propsκ° μλλ° λ°λ‘ μ΄κ² childrenμλλ€.
```javascript
import MyComponent from "./MyComponent";  
  
const App = () => {  
  return <MyComponent>λ¦¬μνΈ</MyComponent>;  
};  
  
export default App;
```

μ μ½λμμ MyComponent νκ° μ¬μ΄μ μμ±ν λ¦¬μνΈλΌλ λ¬Έμμ΄μ MyComponent λ΄λΆμμ λ³΄μ¬ μ£Όλ €λ©΄ props.children κ°μ λ³΄μ¬ μ£Όμ΄μΌ ν©λλ€.

```javascript
const MyComponent = props => {  
  return (  
      <div>  
        μλνμΈμ, μ  μ΄λ¦μ {props.name} μλλ€. <br />  
        children κ°μ {props.children}  
        μλλ€.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "κΈ°λ³Έ μ΄λ¦"  
};  
  
export default MyComponent
```

<br />

#### 3.3.5 λΉκ΅¬μ‘°ν ν λΉ λ¬Έλ²μ ν΅ν΄ props λ΄λΆ κ° μΆμΆνκΈ°
---
propsμ κ°μ νΈμΆνκΈ° μν΄ propsλ₯Ό μμ κ³μ λΆμ¬μ£Όκ³  μμ΅λλ€.
μ΄κ² λ§€μ° κ·μ°?κΈ° λλ¬Έμ Destructuring Assignment λ¬Έλ²μ ν΅ν΄ λ΄λΆμ κ°μ λ°λ‘ μΆμΆνλ λ°©λ²μ μμλ³΄κ² μ΅λλ€.

```javascript
const MyComponent = (props) => {  
  const { name, children } = props;  
  return (  
    <div>  
      μλνμΈμ, μ  μ΄λ¦μ {name} μλλ€.  
      <br />  
      children κ°μ {children} μλλ€.  
    </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "κΈ°λ³Έ μ΄λ¦",  
};  
export default MyComponent;
```


κ΅¬μ‘° λΆν΄ λ¬Έλ²μ΄λΌκ³ λ λΆλ¦½λλ€. ν¨μ νλΌλ―Έν°μμλ μ°μΌ μ μμ΅λλ€.

```javascript
const MyComponent = ({ name, children }) => {  
  return (  
      <div>  
        μλνμΈμ, μ  μ΄λ¦μ {name} μλλ€.  
        <br />  
        children κ°μ {children} μλλ€.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: "κΈ°λ³Έ μ΄λ¦",  
};  
export default MyComponent;
```

props μ΄λ¦λ λμ€μ§ μμμ§λ§ μ΄λ κ² μ μ¬μ©ν  μ μμ΅λλ€. μμΌλ‘λ λΉκ΅¬μ‘°ν ν λΉ λ¬Έλ²μ μ¬μ©ν©λλ€.

<br />

#### 3.3.6 propTypesλ₯Ό ν΅ν props κ²μ¦
---
νμ propsλ₯Ό μ§μ νκ±°λ νμ(type)μ μ§μ ν  λ protoTypesλ₯Ό μ¬μ©, μ΄λ₯Ό μν΄ import κ΅¬λ¬Έμ μ¬μ©νμ¬ λΆλ¬μμΌ ν©λλ€.
```javascript
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
  (...)
};

MyComponent.defaultProps = {
  name: 'κΈ°λ³Έ μ΄λ¦',
};

MyComponent.propTypes = {
  name: PropTypes.string
};
```

μ΄λ¬λ©΄ nameμ λ¬΄μ‘°κ±΄ λ¬Έμμ΄(string) ννλ‘ μ λ¬ν΄μΌ λλ€λ κ²μ μλ―Έν©λλ€.
μλμ κ°μ΄ μΌμΉνλ νμμ΄ μλ κ°μ μ λ¬νλ©΄ λΈλΌμ°μ μμ μλ¬λ₯Ό λ³΄μ¬μ€λλ€.
```javascript
import MyComponent from "./props";  
  
const App = () => {  
  return <MyComponent name={3}>λ¦¬μνΈ</MyComponent>; //3μ λ£μ λ λ°μ΄νκ° μλ {}
};  
  
export default App;
```

<br />

#### 3.3.6.1 isRequiredλ₯Ό μ¬μ©νμ¬ νμ propTypes μ€μ 
---
propTypesλ₯Ό μ§μ νμ§ μμμ λ κ²½κ³  λ©μμ§λ₯Ό λμ μ£Όλ μμμ ν΄ λ΄μλ€.
propTypesλ₯Ό μ§μ ν  λ λ€μ isRequiredλ₯Ό λΆμ¬ μ£Όλ©΄ λ©λλ€.
```javascript
import PropTypes from 'prop-types';  
  
const MyComponent = ({name, favoriteNumber, children}) => {  
  return (  
      <div>  
        μλνμΈμ, μ  μ΄λ¦μ {name}μλλ€. <br/>  
        children κ°μ {children}μλλ€.  
        <br/>  
        μ κ° μ’μνλ μ«μλ {favoriteNumber}μλλ€.  
      </div>  
  );  
};  
  
MyComponent.defaultProps = {  
  name: 'κΈ°λ³Έ μ΄λ¦',  
};  
  
MyComponent.propTypes = {  
  name: PropTypes.string,  
  favoriteNumber: PropTypes.number.isRequired,  
};  
  
export default MyComponent;
```

μμ μ μν App.jsλ₯Ό λ³΄λ©΄ favoriteNumberλ₯Ό μ μνμ§ μμκΈ° λλ¬Έμ λΈλΌμ°μ μμ κ²½κ³  λ©μμ§λ₯Ό μμ±νλ κ²μ λ³Ό μ μμ΅λλ€. μλμ κ°μ΄ κ°μ μ§μ νλ€λ©΄ κ²½κ³  μμ΄ μΆλ ₯λλ κ²μ λ³Ό μ μμ΅λλ€.

```javascript
import MyComponent from './MyComponent';  
  
const App = () => {  
  return (  
      <MyComponent name="React" favoriteNumber={1}>  
        λ¦¬μνΈ  
      </MyComponent>  
  );  
};  
  
export default App;
```

<br />

##### 3.3.6.2 λ λ§μ PropTypes μ’λ₯
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

λ λ§μ μ λ³΄λ https://github.com/facebook/prop-types μμ λ³Ό μ μμ΅λλ€.

<br />

#### 3.3.7 ν΄λμ€ν μ»΄ν¬λνΈμμ props μ¬μ©νκΈ°
---
ν΄λμ€ν μ»΄ν¬λνΈμμ propsλ₯Ό μ¬μ©νλ €λ©΄ this.propsλ₯Ό μ‘°ννλ©΄ λ©λλ€.

```javascript
import { Component } from "react";  
import PropTypes from "prop-types";  
  
class MyComponent extends Component {  
  render() {  
    const { name, favoriteNumber, children } = this.props; //destructuring assignment  
    return (  
      <div>  
        μλνμΈμ, μ  μ΄λ¦μ {name}μλλ€. <br />  
        children κ°μ {children}μλλ€.  
        <br />  
        μ κ° μ’μνλ μ«μλ {favoriteNumber}μλλ€.  
      </div>  
    );  
  }  
}  
  
MyComponent.defaultProps = {  
  name: "κΈ°λ³Έ μ΄λ¦",  
};  
  
MyComponent.propTypes = {  
  name: PropTypes.string,  
  favoriteNumber: PropTypes.number.isRequired,  
};  
  
export default MyComponent;**
```

ν΄λμ€ν μ»΄ν¬λνΈμμλ defaultPropsμ propTypesλ₯Ό μ€μ ν  λ class λ΄λΆμμ μ§μ νλ κ²λ κ°λ₯ν©λλ€.

```javascript
import { Component } from "react";  
import PropTypes from "prop-types";  
  
class MyComponent extends Component {  
  static defaultProps = {  
    name: "κΈ°λ³Έ μ΄λ¦",  
  };  
  
  static propTypes = {  
    name: PropTypes.string,  
    favoriteNumber: PropTypes.number.isRequired,  
  };  
  
  render() {  
    const { name, favoriteNumber, children } = this.props; //destructuring assignment  
    return (  
      <div>  
        μλνμΈμ, μ  μ΄λ¦μ {name}μλλ€. <br />  
        children κ°μ {children}μλλ€.  
        <br />  
        μ κ° μ’μνλ μ«μλ {favoriteNumber}μλλ€.  
      </div>  
    );  
  }  
}  
  
export default MyComponent;
```

> **defaultPropsμ propTypesλ κΌ­ μ¬μ©ν΄μΌ νλμ?**
> κ·Έλ μ§λ μμ΅λλ€. μ νμ¬ν­μλλ€.

<br />

### 3.4 state
---
stateλ μ»΄ν¬λνΈ λ΄λΆμμ λ°λ μ μλ κ°μ μλ―Έν©λλ€. propsμ κ²½μ° λΆλͺ¨ μ»΄ν¬λνΈκ° μ€μ νλ κ°μ΄λ©° μ»΄ν¬λνΈ μμ μ ν΄λΉ propsλ₯Ό μ½κΈ° μ μ©μΌλ‘λ§ μ¬μ©ν  μ μμ΅λλ€.
λ¦¬μνΈμμλ λ κ°μ§ μ’λ₯μ `state`κ° μμ΅λλ€.
νλλ ν΄λμ€ν μ»΄ν¬λνΈκ° μ§λκ³  μλ `state`μ΄κ³  λ€λ₯Έ νλλ ν¨μ μ»΄ν¬λνΈμμ `useState`μλλ€.

<br />

#### 3.4.1 ν΄λμ€ν μ»΄ν¬λνΈμ state
---
```javascript
import React, {Component} from 'react';  
  
class ClassComponentState extends Component {  
  constructor(props) {  
    super(props);  
    //stateμ μ΄κΉκ° μ€μ νκΈ°  
    this.state = {  
      number: 0  
    };  
  }  
  render() {  
    const { number } = this.state; // state μ‘°ν μ this.stateλ‘ μ‘°ν ν©λλ€.  
    return (  
        <div>  
          <h1>{number}</h1>  
          <button  
          // onClickμ ν΅ν΄ λ²νΌμ΄ ν΄λ¦­λμμ λ νΈμΆν  ν¨μλ₯Ό μ§μ ν©λλ€.  
              onClick={() => {  
                // this.setStateλ₯Ό μ¬μ©νμ¬ stateμ μλ‘μ΄ κ°μ λ£μ μ μμ΅λλ€.  
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
> 1. constructorλ₯Ό μμ±ν  λλ λ°λμ super(props)λ₯Ό νΈμΆν΄ μ£Όμ΄μΌ ν©λλ€.
>> - κ·Όλ°... constuctorλ₯Ό μμ¨μ£Όμ΄λ λ¨
> 2. stateλ κ°μ²΄ νμμ΄μ΄μΌ ν©λλ€.
> 3. μ°Έμ‘°λ `this.state`μ κ°μ΄ thisμμ λ³μλ₯Ό μ°Έμ‘°ν  μ μμ΅λλ€.

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
          <h2>λ°λμ§ μλ κ°: {fixedNumber}</h2>  
          <button  
            // onClickμ ν΅ν΄ λ²νΌμ΄ ν΄λ¦­λμμ λ νΈμΆν  ν¨μλ₯Ό μ§μ ν©λλ€.  
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

νμ¬ state μμ fixedNumberκ°μ΄ μΆκ° λμμ΅λλ€.

<br />

##### 3.4.1.2 stateλ₯Ό constructorμμ κΊΌλ΄κΈ°
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
          <h2>λ°λμ§ μλ κ°: {fixedNumber}</h2>  
          <button  
              // onClickμ ν΅ν΄ λ²νΌμ΄ ν΄λ¦­λμμ λ νΈμΆν  ν¨μλ₯Ό μ§μ ν©λλ€.  
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

##### 3.4.1.3 this.setStateμ κ°μ²΄ λμ  ν¨μ μΈμ μ λ¬νκΈ°
---

setStateμΈμλ‘ κ°μ²΄λ₯Ό λκ²¨ μ€ κ²½μ° Asyncν λμμ νκ² λμ§λ§, μΈμλ‘ ν¨μλ₯Ό λκ²¨μ£Όλ κ²½μ° Syncν λμμ μννκ² λ©λλ€. μ΄λλ μλμ κ°μ ννμ μ½λκ° λ©λλ€.
```javascript
this.setState((prevState, props) => {
  return {
    // μλ°μ΄νΈνκ³  μΆμ λ΄μ©
  }
})
```

μλμ κ°μ΄
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
          <h2>λ°λμ§ μλ κ°: {fixedNumber}</h2>  
          <button  
              // onClickμ ν΅ν΄ λ²νΌμ΄ ν΄λ¦­λμμ λ νΈμΆν  ν¨μλ₯Ό μ§μ ν©λλ€.  
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
				// μ μ½λμ μλ μ½λλ μμ ν λμΌν κΈ°λ₯μ νλ μ½λ μλλ€.
				// νμ΄ν ν¨μμμ λ°νμ λ°λ‘ νκ³  μΆλ€λ©΄ {}λ₯Ό μμ λ©΄ λ©λλ€.
				// μλλ κ°μ²΄λ₯Ό ()λ‘ κ°μΈμ κ°μ²΄μΈ {} λ°μ ()λ‘ κ°μΌ νν μλλ€.
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

##### 3.4.1.4 this.setStateκ° λλ ν νΉμ  μμ μ€ννκΈ°
---
μ½λ°±ν¨μλ₯Ό λλ² μ§Έ νλΌλ―Έν°λ‘ μ κ³΅νκΈ° λλ¬Έμ ν΄λΉ μΈμ κ°μ λ£μΌλ©΄ setStateλ‘ κ°μ μλ°μ΄νΈν μ΄νμ νΉμ  μμμ μ²λ¦¬ν  μ μμ΅λλ€.

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
          <h2>λ°λμ§ μλ κ°: {fixedNumber}</h2>  
  
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

#### 3.4.2 ν¨μ μ»΄ν¬λνΈμμ useState μ¬μ©νκΈ°
---
> λ¦¬μνΈ 16.8 λ²μ  μ΄μ μμλ ν¨μ μ»΄ν¬λνΈμμ stateλ₯Ό μ¬μ©ν  μ μμμ΅λλ€.
> 16.9 μ΄νλΆν° useStateλΌλ ν¨μλ₯Ό μ¬μ©νμ¬ ν¨μμ»΄ν¬λνΈμμλ stateλ₯Ό μ¬μ©ν  μ μκ² λμμ΅λλ€.
> μ΄ κ³Όμ μμ <mark>Hooks</mark>λ₯Ό μ¬μ©νκ² λμμ΅λλ€.
> useStateλ Hooksμ ν μ’λ₯λ‘ μ¬μ©λλ©° λ λ§μ Hooksμ μ’λ₯λ 8μ₯μμ λ³΄λλ‘ ν©λλ€.

<br />

##### 3.4.2.1 λ°°μ΄ λΉκ΅¬μ‘°ν ν λΉ
---
> π¦λ°°μ΄ λΉκ΅¬μ‘°ν ν λΉμ μ΄μ μ λ°°μ΄ κ°μ²΄ λΉκ΅¬μ‘°ν ν λΉκ³Ό λΉμ·ν©λλ€.
> μ¦, λ°°μ΄μ μ½κ² μΆμΆν΄ μ€ μ μκ² ν©λλ€.

μλμ κ°μ΄ λ°°μ΄μ κ° 2κ°λ₯Ό μΆμΆν  μ μμ΅λλ€.
```javascript
const array = [1,2];
const one = array[0];
const two = array[1];
```

μ΄λ₯Ό λ°°μ΄ λΉ κ΅¬μ‘°ν ν λΉλ¬Έμ μ¬μ©νλ©΄ μλμ κ°μ΄ κ°μ μΆμΆν  μ μμ΅λλ€.
```javascript
const array = [1,2];
const[one, two] = array;
```

<br />

##### 3.4.2.2 useState μ¬μ©νκΈ°
---
> π λ°°μ΄ λΉ κ΅¬μ‘°ν ν λΉλ¬Έμ μμ μλ €λλ ΈκΈ° λλ¬Έμ useState ν¨μλ₯Ό μ½κ² μ΄ν΄ν  μ μμ΅λλ€.
> μλ‘μ΄ μ»΄ν¬λνΈμμ λΉκ΅¬μ‘°ν ν λΉλ¬Έμ λ°°μ λ΄μλ€.

```javascript
import {useState} from 'react';  
  
const Say = () => {  
  const [message, setMessage] = useState('');  
  const onClickEnter = () => setMessage('μλνμΈμ');  
  const onClickLeave = () => setMessage('μλν κ°μΈμ!');  
  
  return (  
      <div>  
        <button onClick={onClickEnter}>μμ₯</button>  
        <button onClick={onClickLeave}>ν΄μ₯</button>  
        <h1>{message}</h1>  
      </div>  
  );  
};  
  
export default Say;
```

useStateμ μΈμμλ μ΄κΉκ°μ΄ λ€μ΄κ°λλ€.
state μ΄κΈ° κ°μ κ°μ²΄ννλ₯Ό  λ£μ΄μ£Όμ΄μΌ νμ§λ§ useStateμμλ λ°λμ κ°μ²΄κ° μλμ΄λ μκ΄μμ΅λλ€.
κ°μ ννλ μμ μλλ€. ν¨μ νΈμΆ κ²°κ³Όλ‘ λ°°μ΄μ΄ λ°νλλλ°μ. λ°°μ΄μ μ²«λ² μ§Έ κ°μ νμ¬ μνμ΄κ³ , λλ² μ§Έ κ°μ μνλ₯Ό λ°κΎΈμ΄μ£Όλ ν¨μ μλλ€. μ΄ ν¨μλ₯Ό setterλΌκ³  ν©λλ€. μ¬κΈ°μ message, setMessageμ΄λ¦μ λ³κ²½μ΄ κ°λ₯ν μ΄λ¦λ€ μλλ€.

<br />

##### 3.4.2.3 ν μ»΄ν¬λνΈμμ useState μ¬λ¬ λ² μ¬μ©νκΈ°
---

κΈ°μ‘΄ μμ₯, ν΄μ₯ λ²νΌ μΈμ μ»¬λ¬λ₯Ό νννλ λΆλΆλ useStateλ₯Ό μ¬μ©ν΄λ³΄μ.
μλμ κ°μ΄ λ³΅μμ setStateλ₯Ό μ¬μ©ν  μ μλ€.
```javascript
import {useState} from 'react';  
  
const SayColor = () => {  
  const [message, setMessage] = useState('');  
  const onClickEnter = () => setMessage('μλνμΈμ');  
  const onClickLeave = () => setMessage('μλν κ°μΈμ!');  
  
  const [color, setColor] = useState('black');  
  
  return (  
      <div>  
        <button onClick={onClickEnter}>μμ₯</button>  
        <button onClick={onClickLeave}>ν΄μ₯</button>  
        <button style={{'color': message}} onClick={()=> setMessage('Test')}>Test</button>  
        <h1 style={{color}}>{message}</h1>  
        <h1 style={{color}}>Color: {color}</h1>  
        <h2> style attributeμ λ€μ΄κ°λ©΄ color λ³μλ color: {color} ννλ‘ λ€μ΄κ°κ³ ...</h2>  
        <h2> νκ·Έμ¬μ΄ κ°μΌλ‘ λ€μ΄κ°λ©΄ {color} ννλ‘ λ€μ΄κ°λλ°... μ κ·Έλ¬μ§? </h2>  
        <button style={{color: 'red'}} onClick={() => setColor('red')}>λΉ¨κ°  
        </button>  
        <button style={{color: 'green'}} onClick={() => setColor('green')}>μ΄λ‘  
        </button>  
        <button style={{color: 'blue'}} onClick={() => setColor('blue')}>νλ  
        </button>  
      </div>  
  );  
};  
  
export default SayColor;
```

μ½λ λ΄μλ κΈ°μ νμλ―μ΄ style μμ± κ°μΌλ‘ λ€μ΄κ°κ² λλ©΄ μ κΈ°νκ²λ key: value ννλ‘ λ€μ΄κ°κ³  νκ·Έ μ¬μ΄μ κ°μΌλ‘ λ€μ΄κ°λ©΄ value ννλ‘ λ€μ΄κ°λλ°... κ°λ§ λ³΄μνλ {{value}} ννκ° μκ³  {value} ννκ° μλλ°...
νλ² νμ€νΈ ν΄λ³΄μ. webstormμμ λ³΄λ©΄ μ΄κ² λ§λ κ±° κ°λ€.

<br />

### 3.5 stateλ₯Ό μ¬μ©ν  λ μ£Όμ μ¬ν­
---
> π‘**info**
> state λ³κ²½ μμλ setStateνΉμ useStateλ₯Ό μ¬μ©νκ³  μ§μ μ μΈ μ κ·Όμ νλ©΄ μλ©λλ€.
> μλμ κ°μ μ κ·Όμ νμλ©΄ μλ©λλ€.

```javascript
// in class component
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// in function component
const [object, setObject] = useSafe({a: 1, b: 1});
object.b = 2;
```

μλμ κ°μ΄ μ¬λ³Έμ λ§λ€μ΄μ Setterλ₯Ό ν΅ν΄ μ κ·Όμ ν©λλ€.

```javascript
// object access
const array = [
{id: 1, value: true},
{id: 2, value: true},
{id: 3, value: false},
];

let nextArray = array.concat({id: 4}); // add new item
nextArray.filter(item => item.id !== 2);
nextArray.map(item => (item.id === 1 β {...item, value: false} : item)); // when id:1 value set to false


```

μμμ ...μ spread μ°μ°μλΌκ³  νλ©° λ΄μ©μ μ΄ν μ°¨κ·Όμ°¨κ·Ό μμλ³΄κ² μ΅λλ€.

<br />

### 3.6 μ λ¦¬
---
> π Summary
> 1. μ΄λ² μ₯μμλ componentλ₯Ό λ§λ€μ΄μ λ΄λ³΄λ΄λ λ°©λ²μ μμ λ³΄μμ΅λλ€.
> 2. propsμ stateλ₯Ό μ¬μ©νλ λ°©λ²μ λ°°μ λ³΄μμ΅λλ€.
> 3. λμ μ­ν μ λ§€μ° λ€λ₯Έλ° propsλ λΆλͺ¨ μ»΄ν¬λνΈκ° μ€μ ν κ°μ μ¬μ©νκ³ , stateλ μ»΄ν¬λνΈ μμ²΄ μμ± κ°μΌλ‘ μ»΄ν¬λνΈ λ΄λΆμμ κ°μ μλ°μ΄ ν  μ μμ΅λλ€.
> 4. propsλ₯Ό μ¬μ©ν΄λ μ λμ μΌλ‘ νμ©ν  μ μμ΅λλ€. μμΌλ‘ λ€λ€λ³Ό μΌμ κ΄λ¦¬ μ±μ λ³΄λ©΄ λΆλͺ¨ μ»΄ν¬λνΈμ stateκ°μ μμμ propsλ‘ λκ²¨μ£Όκ³  μμ μ»΄ν¬λνΈμμ νΉμ  μ΄λ²€νΈκ° λ°μν  κ²½μ° λΆλͺ¨μ λ©μλλ₯Ό νΈμΆνλ©΄ μ λμ μΌλ‘ propsκ°μ μ¬μ©ν  μ μμ΅λλ€.
> 5. stateμ useStateλ₯Ό λ°°μλ³΄μλλ° μμΌλ‘λ useStateλ₯Ό μ¬μ©ν  κ²μ κΆμ₯ ν©λλ€.(reactμμλ Hooksμ¬μ©μ κΆμ₯)


