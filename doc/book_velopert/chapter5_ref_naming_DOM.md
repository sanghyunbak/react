

> #### ๐กInfo
> ์ผ๋ฐ HTML์์ DOM ์์์ ์ด๋ฆ์ ๋ฌ ๋๋ id ์์ฑ ๊ฐ์ ์ฌ์ฉํฉ๋๋ค.
> ์๋ ์ฝ๋์ ๊ฐ์ด react์ index.js์์๋ root๋ผ๋ ์ด๋ฆ์ ๊ฐ์ง ์์์ ๋ฆฌ์ํธ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๋ผ๋ ์ฝ๋๊ฐ ์์ต๋๋ค.
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
```
> ๋ฆฌ์ํธ ํ๋ก์ ํธ ๋ด๋ถ์์ DOM์ ์ด๋ฆ์ ๋ค๋ ๋ฐฉ๋ฒ์ด ์๋๋ฐ ์ด๊ฒ์ด ref ์๋๋ค.

<br />

> #### ๐Note
> React component์ id๋ฅผ ์ฌ์ฉํ๋ฉด ์๋๋์โ
> id๋ฅผ ์ฌ์ฉํด๋ ๋ฉ๋๋ค. ํ์ง๋ง ์๋์ ๊ฐ์ ์ฃผ์์ฌํญ์ด ๋ฐ๋ฆ๋๋ค. ๊ทธ๋์ ํน์ํ ๊ฒฝ์ฐ๊ฐ ์๋๋ผ๋ฉด ์ฌ์ฉ์ ๊ถ์ฅํ์ง ์์ต๋๋ค.
> - ์ปดํฌ๋ํธ๋ฅผ ๋ฐ๋ณต์ ์ผ๋ก ์ฌ์ฉํ๋ค๊ณ  ๊ฐ์ ํ๋ค๋ฉด, ๋์ผํ id๋ฅผ ๊ฐ์ง DOM๋ค์ด ์๊ฒจ๋  ์ ์์ต๋๋ค.
> 	- ref๋ ์ ์ญ์ ์ผ๋ก ์ฌ์ฉ๋๊ธฐ ๋๋ฌธ์ ์ด๋ฐ ๋ฌธ์ ๊ฐ ์๊ธฐ์ง ์์ต๋๋ค. 
> - ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด์๋ id ๋ท ๋ถ๋ถ์ ์ถ๊ฐ์ ์ธ ํ์คํธ๋ฅผ ๋ถ์ฌ์ ์ค๋ณต id๊ฐ ์์ฑ๋๋ ๊ฒ์ ๋ฐฉ์งํด์ผ ํฉ๋๋ค.

<br />

### 5.1 ref๋ ์ด๋ค ์ํฉ์์ ์ฌ์ฉํด์ผ ํ ๊น?
---
>#### ๐กInfo
>๋จผ์  ref๋ '์ด๋ค' ์์์ ํด์ผํ  ๋ ์ฌ์ฉ๋์ผ ํ ๊น์โ
> DOM์ ์ง์  ์ ๊ทผํด์ผ ํ๋ ๊ฒฝ์ฐ์ ์ฌ์ฉ ๋ฉ๋๋ค.

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example</title>
  <style>
    .success {
      background-color: lightgreen;
    }

    .failure {
      background-color: lightcoral;
    }
  </style>
  <script>
    function validate() {
      var input = document.getElementById('password');
      input.className='';
      if(input.value==='0000') {
        input.className='success';
      } else {
        input.className='failure';
      }
    }
  </script>
</head>
<body>
  <input type="password" id="password"></input>
  <button onclick="validate()">Validate</button>
</body>
</html>
```

์ ์ฝ๋๋ฅผ ๋ณด๋ฉด `password`๋ผ๋ id๋ฅผ ๊ฐ์ง DOM ์์์ ๊ฐ์ ๊ฐ์ ธ์์ ๋น๊ต ํ className์ ๋ฐ๊ฟ ์ ์์ต๋๋ค.

![input text](./resources/chapter5_inputbox.png)

<p align="center" width="100%">
    <img width="33%" src="resources/chapter5_inputbox.png"> 
</p>

ํ์ง๋ง react์์๋ state๋ฅผ ์ฌ์ฉํด์ ์ ์์์ ์ํํ  ์ ์์ต๋๋ค. 

์ด ์ฅ์์๋ ํด๋์คํ ์ปดํฌ๋ํธ์ ๊ฒฝ์ฐ๋ง ์ดํด๋ณด๊ฒ ์ต๋๋ค. 
ํจ์ํ ์ปดํฌ๋ํธ์ ๊ฒฝ์ฐ Hooks์ ๊ฐ์ด ์ฌ์ฉํด์ผ ํ๊ธฐ ๋๋ฌธ์ 8์ฅ์์ Hooks๋ฅผ ๋ฐฐ์ฐ๋ฉด์ ์ดํด๋ณผ ์์ ์๋๋ค.

> #### ๐กInfo
> ์ปดํฌ๋ํธ ๋ง๋ค๊ธฐ -> input์ ref๋ฌ๊ธฐ -> ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ ๋ฐ์ ์๋ง๋ค ํฌ์ปค์ค ์ถ๊ฐ

<br />

#### 5.1.1 ์์  ์ปดํฌ๋ํธ ์์ฑ
---
```css
.success {
    background-color: lightgreen;
}

.failure {
    background-color: lightcoral;
}
```

<br />

#### 5.1.3 situation that must Use DOM (Can't use state only)
---
- focus on specific input 
- control scrol box 
- draw canvas element

<br />

### 5.2 use ref
---

<br />

#### 5.2.1 use callback function to use ref
---
use callback function to make ref is basic way in react. Send that information using ref to element set 'ref' via props that callback function get 'ref' as a parameter.
You can change `this.input` to `this.superman` (input or superman is user-defined name of ref)
```javascript
<input ref={(ref) => {this.input=ref}} />
```



<br />

#### 5.2.3 createRef 
---
react version 16.3 support this feature
look at the example, using `React.creawteRef()` function to assign variable name `input`
and  when you use this `ref` add <mark> `current` </mark> attribute (this is constraint of using createRef() function)

> ๐ก Warnning
>  add current attribute of user-defined ref name
>  this.<mark>(user-defined name)</mark>.current

<br />

```javascript
import React, {Component} from 'react';

class RefUsingCreateRef extends Component {
  input =  React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
        <div>
          <p>RefUsingCreateRef</p>
          <input ref={this.input} />
        </div>
    )
  }
}

export default RefUsingCreateRef;
```

<br />

#### 5.2.3 Apply
---

##### 5.2.3.1 add ref on input tag
---
assign ref on input tag(functional component)

<br />

##### 5.2.3.2 modify button onClick event code base
---
Modify code base to focus on input tag,  when onClick event occur in button.

<br />

```javascript
import React, {Component} from 'react';  
import './ValidationSample.css';  
  
class ValidationSampleWithRefFocus extends Component {  
  state = {  
    password: '',  
    clicked: false,  
    validated: false,  
  };  
  
  handleChange = (e) => {  
    this.setState({  
      password: e.target.value  
    });  
  };  
  
  handleButtonClick = () => {  
    this.setState({  
      clicked: true,  
      validated: this.state.password == '0000'  
    })  
    this.input.focus();  
  }  
  
  render() {  
    return (  
        <div>  
          <p>Ref with focus</p>  
          <input  
              type={'password'}  
              value={this.state.password}  
              onChange={this.handleChange}  
              ref={(ref) => this.input = ref}  
              className={this.state.clicked ?  
                  (this.state.validated ? 'success' : 'failure') :  
                  ''}  
          />  
          <button onClick={this.handleButtonClick}  
          > Validated  
          </button>  
        </div>  
    );  
  }  
}  
  
export default ValidationSampleWithRefFocus;
```

<br />

You can confirm focus of cursor at input box.

<br />

### 5.3 Ref on component
---
> #### ๐กInfo
> In react you can assign ref on component. This usually use external component access DOM of internal component. it's assigning use case is same as  DOM.

<br />

#### 5.3.1 Use case
---

```javascript
<MyComponent
    ref={(ref) => {
      this.userDefinedName = ref;
    }}
/>
```

you can access method or member of userDefinedName component. (ex: userDefinedName.handleClick, userDefinedName.input etc)
Let's make component that has scroll box and delegate the action that pull down scroll-bar  to parent component.

> #### ๐กInfo
> - create Sendbox component.
> - assign ref to component
> - call function in compnent using ref

<br />

#### 5.3.2 Initial setting of component
---
Let's create ScrollBox component file.

##### 5.3.2.1 Create component file
---

```javascript
import React, {Component} from 'react';

class ScrollBox extends Component {
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };
    return (
        <div
            style={style}
            ref={(ref) => {
              this.box = ref;
            }}
        >
          <div style={innerStyle}/>
        </div>
    );
  }
}

export default ScrollBox;
```


<br />

##### 5.3.2.2 Rendering ScrollBox component in App component
---

<br />

#### 5.3.3 Create mehod in component
---
Create method that pull down scroll. 
> #### ๐กInfo
> - scrollTop: vertical scroll-bar position(0~350)
> - scrollHeight: Div height in scroll box()
> - clientheight: Height of Box that have scroll(300)

<br />

#### 5.3.4 assign ref on component and use internal method
---

```javascript
import React, {Component} from 'react';
import ScrollBoxWithPullDownMethod from './ScrollBoxWithPullDownMethod';

class ParentScrollBox extends Component {
  render() {
    return (
        <div>
          <ScrollBoxWithPullDownMethod ref={(ref) => this.scrollBox = ref} />
          <button onClick={() => {this.scrollBox.scrollToBottom()}}>
            Go to bottom
          </button>
        </div>
    );
  }
}

export default ParentScrollBox;
```

`onClick = {this.scrollBox.scrollToBottom}` is correct syntax but, `this.scrolBox` is undefined so it occur exception. If you make new function in onClick attribute, this.scrollBox 
variable is defined before click button element.

<br />

### 5.4 Summary
---
> use ref between components is not fit react objective.
> Only use refs between components that relationship is parent and child.