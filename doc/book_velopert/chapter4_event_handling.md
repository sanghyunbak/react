> #### 💡Info
> 이벤트는 사용자가 웹 브라우저에서 DOM 요소들과 상호작용하는 것
> Button 요소에 마우스 커서를 올렸을 때 onmouseover 이벤트를 실행하고, 클릭했을 때는 onclick이벤트를 실행합니다.
> Form 요소는 값이 바뀔 때 onchange 이벤트를 실행합니다.
> 아래의 코드에서는 "Click Me"라고 써있는 버튼이 있고 이를 누르면 alert 함수를 사용해서 메시지 박스를 띄웁니다.

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

### 4.1  리엑트의 이벤트 시스템
---
>#### 💡Info
>리엑트의 이벤트 시스템은 HTML의 이벤트와 인터페이스가 동일합니다.
>사용법은 HTML과 비슷한데 몇 가지 주의 사항이 있습니다.

<br />

#### 4.1.1 이벤트를 사용할 때 주의 사항
---
1. 이벤트 이름은 카멜 표기법으로 작성 합니다.
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라. 함수형태의 값을 전달 합니다.
3. DOM요소에만 이벤트를 설정할 수 있습니다.

<br />

#### 4.1.2 이벤트 종류
---
리엑트에서는 아래의 이벤트를 지원합니다.
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
  위의 이벤트가 전부는 아니며 나머지 이벤트는 리엑트 메뉴얼 [리엑트 메뉴얼](http://facebook.github.io/react/docs/events.html)을 찹고 합니다.

<br />

### 4.2 예제로 이벤트 핸들링 익히기
---
>#### 💡Info
>예제를 통해 이벤트 핸들러 사용법을 익힙니다.
>예제에서는 onChange, onKeyPress 이벤트를 핸들링하는 방법을 사용해 봅니다.
>이벤트 핸들러를 통해 전달 받은 값을 state에 설정하는 방법을 익힙니다.

<br />

##### 4.2.1.1 컴포넌트 생성
---

실습을 위한 기본 컴포넌트를 만들어 봅시다.
```javascript
import React, {Component} from 'react';  
  
class EventPractice extends Component {  
  render() {  
    return (  
        <div>  
          <h1>이벤트 연습</h1>  
        </div>  
    );  
  }  
}  
  
export default EventPractice;
```

<br />

##### 4.2.1.2 App.js에서 EventPractice 렌더링
---
App.js에서 위에서 만든 EventPractce.js를 불러와 렌더링 합니다.
```javascript
import EventPractice from './EventPractice';  
  
const App = () => {  
  return <EventPractice />  
};  
  
export default App;
```
웹 브라우저에서 정상적으로 렌더링 되는 화면을 볼 수 있습니다.

<br />

#### 4.2.2 onChange 이벤트 핸들링하기
---
>##### 💡실습 순서
>1. EventPractice 컴포넌트에 input요소를 렌더링 하는 코드를 넣습니다.
>2. 해당 요소에 onChange 이벤트를 설정하는 코드를 작성합니다. 

```javascript
import React, {Component} from 'react';  
  
class EventPracticeOnChange extends Component {  
  render() {  
    return (  
        <div>  
          <h1>이벤트 연습</h1>  
          <input  
              type="text"  
              name="message"  
              placeholder="아무거나 입력해 보세요"  
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

콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체 입니다.
네이티브 이벤트와 인터페이스가 동일해서 HTML 이벤트를 다룰 때와 동일하게 다루면 됩니다.
다른 점은 이벤트 종료 시 초기화가 되므로 정보를 참조할 수 없습니다. 
예를 들어 0.5초 뒤에 참조하게 되면 모든 이벤트가 초기화가 되어 참조가 불가능해 집니다.
비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 합니다. (v17부터는 안써도 됨...)

```javascript
import React, {Component} from 'react';  
  
class EventPracticeOnChange extends Component {  
  render() {  
    return (  
        <div>  
          <h1>이벤트 연습</h1>  
          <input  
              type="text"  
              name="message"  
              placeholder="아무거나 입력해 보세요"  
              onChange={  
                (e) => {  
                  e.persist() // v17부터 아무 의미 없음  
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

chrome에서 console.warn 함수를 통해 로깅을 수행하면 빨간 줄이 나지만 warn이라는 의미일 뿐 문법적인 오류는 없다.

<br />

##### 4.2.2.2 state에 input 값 담기
##### 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정
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
          <h1>이벤트 연습</h1>  
          <input  
              type="text"  
              name="message"  
              value={this.state.message}  
              placeholder="아무거나 입력해 보세요"  
              onChange={  
                (e) => {  
                  e.persist() // v17부터 아무 의미 없음  
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
            확인  
          </button>  
        </div>  
    );  
  }  
}  
  
export default EventPracticeWithState;
```

<br />

### 4.3 함수 컴포넌트로 익히기
---
>#### 💡Info
>앞 장에서 익힌 이벤트 핸들링 방식을 함수 컴포넌트로 익혀 봅시다.

<br />

