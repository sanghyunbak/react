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
