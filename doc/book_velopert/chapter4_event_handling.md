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

```

<br />

### 4.3 함수 컴포넌트로 익히기
---
>#### 💡Info
>앞 장에서 익힌 이벤트 핸들링 방식을 함수 컴포넌트로 익혀 봅시다.

<br />

