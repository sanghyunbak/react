## 1. Why react?
---
javascript의 활용 영역이 점차 넓어짐, slack, atom, VS Code 등 유명한 데스크톱 어플리케이션 조차도 일렉트론(자바스크립트로 데스크톱 어플리케이션을 만들 수 있는 프레임워크)으로 만들어 졌습니다.
모바일 어플리케이션 역시 크로스 플랫폼 어플리케이션을 개발할 수 있는 여러 프레임워크(Ionic, Titanium, NativeScript, React Native 등)를 사용해서 페이스북, 디스코드, 페이팔 이베이 등 수 많은 공룡급 어플리케이션 및 중/소 어플리케이션을 개발 했습니다.
프론트 앤드 영역에서 개발을 진행하려면 어떨까요?

angula, Backbone.js, Derby.js, Ember.js, Ext.js, Knockback.js, Sammy.js, PureMVC, Vue.js 등이 있습니다. 이 프레임워크 들은 MVC(Model-View-Controller), MVVM(Model-View-View Model) 아키텍처를 사용합니다. AngularJS의 경우 MVW(Model-View-Whatever) 아키텍처로 어플리케이션을 구조화 합니다.
>모델: 데이터 영역(보이지 않는 영역)
>뷰: 사용자에게 보이는 영역

아래의 예를 봅시다
위는 모델(데이터)이며 아래는 이를 표현한 뷰 이다.
```json
{  
  "title": "hello",  
  "contents": "Hellow World",  
  "author": "velopert",  
  "likes": 1  
}
```
```html
<div id="post-1">  
    <div class="title">Hello</div>  
    <div class="contents">Hello World</div>  
    <div class="author">volopert</div>  
    <div class="likes">1</div>  
</div>
```
`link`의 값을 1이 아닌 2로 변경한다고 생각해 보자.
어플리케이션에서는 해당 tag를 찾아야 하고(post-1 id를 갖는 div 내부의 linkes 클래스를 갖는 div의 값을 변경) 이는 어플리케이션의 규모가 커질수록 복잡해 진다.
페이스북 개발 팀은 <mark>기존 뷰를 날려버리고</mark> 새로 렌더링을 하는 방식을 고안했습니다.
이를 통해 어떤 데이터가 변할 때 마다 어떤 변화를 줘야할 지를 고민하지 않게 되었습니다.
이것이... 과연 더 효율적일까요❓
웹 브라우저에서는 CPU점유율도 크게 증가할 테고 메모리도 많이 쓸텐데요... 그리고 렌더링이 변경 될 때마다 화면이 끊기는 것을 경험하지 않을까요❓
이와 같은 방식으로 <mark>최대한 성능을 아끼고 편안한 사용자 경험(user experience)을 제공</mark>하면서 구현한 것이 react 입니다.
<br>
### 1.1.1 리액트의 이해
---
오직 뷰만 신경 쓰는 라이브러리 입니다.
**렌더링**은 사용자 화면에 뷰를 보여 주는 것을 말합니다.
리엑트가 어떻게 최대한 성능을 아끼고 편안한 사용자 경험을 제공하는 지 궁금하다면 '초기 렌더링' 개념과 '리렌더링' 개념을 알아야 합니다.
> DOM(Document Object Model)은 **웹 페이지에 대한 인터페이스**로 객체로 문서 구조를 표현하는 방법입니다. XML이나 HTML로 작성 합니다.
> DOM은 트리 형태 입니다.
> 동적 UI를 제공하기 위한 목적으로 나온 것이 아니다 보니 최적화 되어 있지 않습니다.
> DOM에 변화가 생기면 브라우저는 CSS를 다시 연산하고, 레이아웃을 구성하며, 페이지를 리페인트 합니다.

#### 1.1.1.1 초기 렌더링
---

#### 1.1.1.2 조화과정
---
"업데이트 과정을 거친다" 라고 하기보다 새롭게 갈아끼우기 때문에 조화(reconciliation)과정을 거친다. 라고 합니다.

#### 1.2.1.2 Virtual DOM
---
실제 DOM이 아닌 이를 추상화한 자바스크립트 객체

#### 1.2.2 기타 특징
---
리엑트는 프레임워크가 아니라 라이브러리
