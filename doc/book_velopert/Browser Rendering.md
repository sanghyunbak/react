
![[Rendering_Process.png]]

Rendering
Paint

![[DOM_CSSOM.png]]


### Parsing
---
HTML을 해석해서 트리를 구성하는 단계
DOM(Document Object Model) Tree
CSSOM (CSS Object Model) tree
Java POM(Project Object Model)과 비슷하군‼️

### Style
---
![[Render_Tree.png]]
스타일 단계에서는 DOM tree와 CSSOM Tree를 매칭시켜 Render Tree를 구성합니다.


### Layout
---
노드의 정확한 위치와 크기를 정하는 단계 입니다.
만약 %값으로 지정한 스타일이 있다면 이를 픽셀 단위로 환산 합니다.

### Paint
---
실제 화면의 픽셀로 계산한다.
여러 레이어로 구성되어 있으며 관리 된다.

### Composite
---
여러 레이어를 합성하여 화면에 나타내고 이 단계 후 사용자는 실제로 볼 수있다.

### Reference
---
[일반 사용자 Blog](https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/)
[Naver Blog](https://d2.naver.com/helloworld/59361)


