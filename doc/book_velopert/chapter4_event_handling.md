> #### ๐กInfo
> ์ด๋ฒคํธ๋ ์ฌ์ฉ์๊ฐ ์น ๋ธ๋ผ์ฐ์ ์์ DOM ์์๋ค๊ณผ ์ํธ์์ฉํ๋ ๊ฒ
> Button ์์์ ๋ง์ฐ์ค ์ปค์๋ฅผ ์ฌ๋ ธ์ ๋ onmouseover ์ด๋ฒคํธ๋ฅผ ์คํํ๊ณ , ํด๋ฆญํ์ ๋๋ onclick์ด๋ฒคํธ๋ฅผ ์คํํฉ๋๋ค.
> Form ์์๋ ๊ฐ์ด ๋ฐ๋ ๋ onchange ์ด๋ฒคํธ๋ฅผ ์คํํฉ๋๋ค.
> ์๋์ ์ฝ๋์์๋ "Click Me"๋ผ๊ณ  ์จ์๋ ๋ฒํผ์ด ์๊ณ  ์ด๋ฅผ ๋๋ฅด๋ฉด alert ํจ์๋ฅผ ์ฌ์ฉํด์ ๋ฉ์์ง ๋ฐ์ค๋ฅผ ๋์๋๋ค.

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
 <button onclick="alert('executed')">  
     Click Me  
 </button>  
</body>  
</html>
```

<br />

### 4.1  ๋ฆฌ์ํธ์ ์ด๋ฒคํธ ์์คํ
---
>#### ๐กInfo
>๋ฆฌ์ํธ์ ์ด๋ฒคํธ ์์คํ์ HTML์ ์ด๋ฒคํธ์ ์ธํฐํ์ด์ค๊ฐ ๋์ผํฉ๋๋ค.
>์ฌ์ฉ๋ฒ์ HTML๊ณผ ๋น์ทํ๋ฐ ๋ช ๊ฐ์ง ์ฃผ์ ์ฌํญ์ด ์์ต๋๋ค.

<br />

#### 4.1.1 ์ด๋ฒคํธ๋ฅผ ์ฌ์ฉํ  ๋ ์ฃผ์ ์ฌํญ
---
1. ์ด๋ฒคํธ ์ด๋ฆ์ ์นด๋ฉ ํ๊ธฐ๋ฒ์ผ๋ก ์์ฑ ํฉ๋๋ค.
2. ์ด๋ฒคํธ์ ์คํํ  ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ ์ ๋ฌํ๋ ๊ฒ์ด ์๋๋ผ. ํจ์ํํ์ ๊ฐ์ ์ ๋ฌ ํฉ๋๋ค.
3. DOM์์์๋ง ์ด๋ฒคํธ๋ฅผ ์ค์ ํ  ์ ์์ต๋๋ค.

<br />

#### 4.1.2 ์ด๋ฒคํธ ์ข๋ฅ
---
๋ฆฌ์ํธ์์๋ ์๋์ ์ด๋ฒคํธ๋ฅผ ์ง์ํฉ๋๋ค.
- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition
  ์์ ์ด๋ฒคํธ๊ฐ ์ ๋ถ๋ ์๋๋ฉฐ ๋๋จธ์ง ์ด๋ฒคํธ๋ ๋ฆฌ์ํธ ๋ฉ๋ด์ผ [๋ฆฌ์ํธ ๋ฉ๋ด์ผ](http://facebook.github.io/react/docs/events.html)์ ์ฐน๊ณ  ํฉ๋๋ค.

<br />

### 4.2 ์์ ๋ก ์ด๋ฒคํธ ํธ๋ค๋ง ์ตํ๊ธฐ
---
>#### ๐กInfo
>์์ ๋ฅผ ํตํด ์ด๋ฒคํธ ํธ๋ค๋ฌ ์ฌ์ฉ๋ฒ์ ์ตํ๋๋ค.
>์์ ์์๋ onChange, onKeyPress ์ด๋ฒคํธ๋ฅผ ํธ๋ค๋งํ๋ ๋ฐฉ๋ฒ์ ์ฌ์ฉํด ๋ด๋๋ค.
>์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํตํด ์ ๋ฌ ๋ฐ์ ๊ฐ์ state์ ์ค์ ํ๋ ๋ฐฉ๋ฒ์ ์ตํ๋๋ค.

<br />

##### 4.2.1.1 ์ปดํฌ๋ํธ ์์ฑ
---

์ค์ต์ ์ํ ๊ธฐ๋ณธ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด ๋ด์๋ค.
```javascript
import React, {Component} from 'react';  
  
class EventPractice extends Component {  
  render() {  
    return (  
        <div>  
          <h1>์ด๋ฒคํธ ์ฐ์ต</h1>  
        </div>  
    );  
  }  
}  
  
export default EventPractice;
```

<br />

##### 4.2.1.2 App.js์์ EventPractice ๋ ๋๋ง
---
App.js์์ ์์์ ๋ง๋  EventPractce.js๋ฅผ ๋ถ๋ฌ์ ๋ ๋๋ง ํฉ๋๋ค.
```javascript
import EventPractice from './EventPractice';  
  
const App = () => {  
  return <EventPractice />  
};  
  
export default App;
```
์น ๋ธ๋ผ์ฐ์ ์์ ์ ์์ ์ผ๋ก ๋ ๋๋ง ๋๋ ํ๋ฉด์ ๋ณผ ์ ์์ต๋๋ค.

<br />

#### 4.2.2 onChange ์ด๋ฒคํธ ํธ๋ค๋งํ๊ธฐ
---
>##### ๐ก์ค์ต ์์
>1. EventPractice ์ปดํฌ๋ํธ์ input์์๋ฅผ ๋ ๋๋ง ํ๋ ์ฝ๋๋ฅผ ๋ฃ์ต๋๋ค.
>2. ํด๋น ์์์ onChange ์ด๋ฒคํธ๋ฅผ ์ค์ ํ๋ ์ฝ๋๋ฅผ ์์ฑํฉ๋๋ค. 

```javascript
import React, {Component} from 'react';  
  
class EventPracticeOnChange extends Component {  
  render() {  
    return (  
        <div>  
          <h1>์ด๋ฒคํธ ์ฐ์ต</h1>  
          <input  
              type="text"  
              name="message"  
              placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํด ๋ณด์ธ์"  
              onChange={  
                (e) => {  
                  console.log(e)  
                }  
              }  
          />  
        </div>  
    );  
  }  
}  
  
export default EventPracticeOnChange;
```

์ฝ์์ ๊ธฐ๋ก๋๋ e ๊ฐ์ฒด๋ SyntheticEvent๋ก ์น ๋ธ๋ผ์ฐ์ ์ ๋ค์ดํฐ๋ธ ์ด๋ฒคํธ๋ฅผ ๊ฐ์ธ๋ ๊ฐ์ฒด ์๋๋ค.
๋ค์ดํฐ๋ธ ์ด๋ฒคํธ์ ์ธํฐํ์ด์ค๊ฐ ๋์ผํด์ HTML ์ด๋ฒคํธ๋ฅผ ๋ค๋ฃฐ ๋์ ๋์ผํ๊ฒ ๋ค๋ฃจ๋ฉด ๋ฉ๋๋ค.
๋ค๋ฅธ ์ ์ ์ด๋ฒคํธ ์ข๋ฃ ์ ์ด๊ธฐํ๊ฐ ๋๋ฏ๋ก ์ ๋ณด๋ฅผ ์ฐธ์กฐํ  ์ ์์ต๋๋ค. 
์๋ฅผ ๋ค์ด 0.5์ด ๋ค์ ์ฐธ์กฐํ๊ฒ ๋๋ฉด ๋ชจ๋  ์ด๋ฒคํธ๊ฐ ์ด๊ธฐํ๊ฐ ๋์ด ์ฐธ์กฐ๊ฐ ๋ถ๊ฐ๋ฅํด ์ง๋๋ค.
๋น๋๊ธฐ์ ์ผ๋ก ์ด๋ฒคํธ ๊ฐ์ฒด๋ฅผ ์ฐธ์กฐํ  ์ผ์ด ์๋ค๋ฉด e.persist() ํจ์๋ฅผ ํธ์ถํด ์ฃผ์ด์ผ ํฉ๋๋ค. (v17๋ถํฐ๋ ์์จ๋ ๋จ...)

```javascript
import React, {Component} from 'react';  
  
class EventPracticeOnChange extends Component {  
  render() {  
    return (  
        <div>  
          <h1>์ด๋ฒคํธ ์ฐ์ต</h1>  
          <input  
              type="text"  
              name="message"  
              placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํด ๋ณด์ธ์"  
              onChange={  
                (e) => {  
                  e.persist() // v17๋ถํฐ ์๋ฌด ์๋ฏธ ์์  
                  console.log(e);  
                  setTimeout(()=>{  
                    console.warn(e.type);  
                    console.warn(e.target.value);  
                      }  
                  , 1);  
                }  
              }  
          />  
        </div>  
    );  
  }  
}  
  
export default EventPracticeOnChange;
```

chrome์์ console.warn ํจ์๋ฅผ ํตํด ๋ก๊น์ ์ํํ๋ฉด ๋นจ๊ฐ ์ค์ด ๋์ง๋ง warn์ด๋ผ๋ ์๋ฏธ์ผ ๋ฟ ๋ฌธ๋ฒ์ ์ธ ์ค๋ฅ๋ ์๋ค.

<br />

##### 4.2.2.2 state์ input ๊ฐ ๋ด๊ธฐ
##### 4.2.2.3 ๋ฒํผ์ ๋๋ฅผ ๋ comment ๊ฐ์ ๊ณต๋ฐฑ์ผ๋ก ์ค์ 
---
```javascript
import React, {Component} from 'react';  
  
class EventPracticeWithState extends Component {  
  state = {  
    message: ''  
  }  
  render() {  
    return (  
        <div>  
          <h1>์ด๋ฒคํธ ์ฐ์ต</h1>  
          <input  
              type="text"  
              name="message"  
              value={this.state.message}  
              placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํด ๋ณด์ธ์"  
              onChange={  
                (e) => {  
                  e.persist() // v17๋ถํฐ ์๋ฌด ์๋ฏธ ์์  
                  console.log(e);  
                  setTimeout(()=>{  
                        console.warn(e.type);  
                        console.warn(e.target.value);  
                      }  
                      , 1);  
                  this.setState({  
                    message: e.target.value  
                  })  
                  // this.state.message = e.target.value;  
                }  
              }  
          />  
  
          <button onClick={  
            ()=> {  
              alert(this.state.message)  
              this.setState({  
                message: ''  
              })  
            }  
          }>  
            ํ์ธ  
          </button>  
        </div>  
    );  
  }  
}  
  
export default EventPracticeWithState;
```

<br />

#### 4.2.3 ์์ ๋ฉ์๋ ๋ง๋ค๊ธฐ
---
4.1.1์ ์ ์ฃผ์ ์ฌํญ์์ <mark>"์ด๋ฒคํธ์์ ์คํํ  ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ ์ ๋ฌํ๋ ๊ฒ์ด ์๋๋ผ, ํจ์ ํํ์ ๊ฐ์ ์ ๋ฌํฉ๋๋ค."</mark>๋ผ๊ณ  ๋ฐฐ์ ์ต๋๋ค. ์ด ๋ฐฉ๋ฒ ๋์ ์ ํจ์๋ฅผ ๋ฏธ๋ฆฌ ์ค๋นํ์ฌ ์ ๋ฌํ๋ ๋ฐฉ๋ฒ์ ๋ด์๋ค.


<br />

### 4.3 ํจ์ ์ปดํฌ๋ํธ๋ก ์ตํ๊ธฐ
---
>#### ๐กInfo
>์ ์ฅ์์ ์ตํ ์ด๋ฒคํธ ํธ๋ค๋ง ๋ฐฉ์์ ํจ์ ์ปดํฌ๋ํธ๋ก ์ตํ ๋ด์๋ค.

<br />

์๋ ์์ ์ ๊ฐ์ด ํจ์ ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ์ฌ ์์ ๋ฅผ ๊ตฌ์ฑํ  ์ ์์ต๋๋ค.

```javascript
import React, {useState} from 'react';  
  
const EventPracticeUsingFunctionalMethod = () => {  
  const [username, setUsername] = useState('');  
  const [message, setMessage] = useState('');  
  // useState function get inital state value and return current state and state change function  
  const onChangeUsername = e => setUsername(e.target.value);  
  const onChangeMessage = e => setMessage(e.target.value);  
  // make another functino define... to get a parameter "e" ?  
  // functional programming: assign a function to variable onChangexxx  const onClick = () => {  
    alert(username + ':' + message);  
    setUsername('');  
    setMessage('');  
  };  
  const onKeyPress = e => {  
    if (e.key === 'Enter') {  
      onClick();  
    }  
  };  
  
  return (  
      <div>  
        <h1>๋ ๊ฐ์ ์ธํ ์ด๋ฒคํธ ์ฐ์ต (using functional component)</h1>  
        <input  
            type="text"  
            name="username"  
            placeholder="์ฌ์ฉ์๋ช"  
            value={username}  
            onChange={onChangeUsername}  
        />  
        <input  
          type="text"  
          name={"message"}  
          placeholder={"์๋ฌด๊ฑฐ๋ ์๋ ฅํด ๋ณด์ธ์"}  
          value={message}  
          onChange={onChangeMessage}  
          onKeyPress={onKeyPress}  
          />  
        <button onClick={onClick}> ํ์ธ</button>  
      </div>  
  );  
};  
  
export default EventPracticeUsingFunctionalMethod;
```

์ ์์  ๋ `e.target.name`์ ์ฌ์ฉํ์ง ์๊ณ  onChange ๊ด๋ จ ํจ์ ๋ ๊ฐ๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด ์ฃผ์์ต๋๋ค. 
์ธํ์ด ๋ ๊ฐ ์ด๋ฉด ์๊ด ์์ง๋ง ์ฌ๋ฌ ๊ฐ ์ผ ๊ฒฝ์ฐ ๋ฌธ์ ๊ฐ ๋ฉ๋๋ค.
์๋์ ๊ฐ์ด ๊ธฐ์กด์ `form` state์ ๊ฐ์ `form` state์ ์ ์ฅํ๊ณ  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ ๊ฐ๋ง ๋ฎ์ด ์์ฐ๋ ๋ฐฉ์์ผ๋ก ์์ ๋ฅผ ์์ฑํ  ์ ์์ต๋๋ค.

```python
import {useState} from 'react';  
  
const EventPracticeFunctionalComponentForm = () => {  
  const [form, setForm] = useState({  
    username: '',  
    message: '',  
  });  
  const {username, message} = form;  
  const onChange = e => {  
    const nextForm = {  
      ...form, // ๊ธฐ์กด์ form ๋ด์ฉ TODO: ... operator์ ์๋ฏธ๋ฅผ ์ ๋ชจ๋ฅด๊ฒ ์... Iterable์ ํํํ๋ ๊ฒ์ ์๋๊ฑฐ ๊ฐ๊ณ   
      [e.target.name]: e.target.value,  
    };  
    setForm(nextForm);  
  };  
  
  // Reason why use Spread operator  
  // let a = {1: "2", "2": 3};  // let b = {...a, "2": 2};  // let c = {a, "2": 2};  //  // result  // b = {1: "2", "2": 2};  // c = {{1: "2", "2": 3}, "2": 2};  
  const onClick = () => {  
    alert(username + ': ' + message);  
    setForm({  
      username: '',  
      message: '',  
    });  
  };  
  const onKeyPress = e => {  
    if (e.key === 'Enter') {  
      onClick();  
    }  
  };  
  return (  
      <div>  
        <h1>์ด๋ฒคํธ ์ฐ์ต form</h1>  
        <input  
            type={'text'}  
            name={'username'}  
            placeholder={'user name'}  
            value={username}  
            onChange={onChange}  
        />  
        <input  
            type={'text'}  
            name={'message'}  
            placeholder={'Insert any key'}  
            value={message}  
            onChange={onChange}  
            onKeyPress={onKeyPress}  
        />  
        <button onClick={onClick}>Confirm</button>  
      </div>  
  );  
};  
  
export default EventPracticeFunctionalComponentForm;
```

### 4.4 ์ ๋ฆฌ
---
> ๋ฆฌ์ํธ์์ ์ด๋ฒคํธ๋ฅผ ๋ค๋ฃจ๋ ๋ฐฉ์์ ๊ธฐ์กด์ javascript๋ jQuery๋ฅผ ๋ค๋ฃจ๋ ๊ฒ๊ณผ ์ ์ฌํฉ๋๋ค. 
> useState์์ form ๊ฐ์ฒด๋ฅผ ํตํด ์ฌ๋ฌ ์ธํ ๊ฐ์ ์ํ๋ฅผ ๊ด๋ฆฌํ์๋๋ฐ์. 8์ฅ์์๋ฐฐ์ธ useReducer์ ์ปค์คํ Hooks๋ฅผ ์ฌ์ฉํ๋ฉด ์ด ์์์ ๋ ํธํ๊ฒ ํ  ์ ์์ต๋๋ค.