``  
> **💡 objective of this chapter**  
> 1. prepare project
> 2. UI structuring
> 3. Implement feature

<br />

### 10.1 prepare project 
---
#### 10.1.1 create project and library install
---
```bash
yarn create react-app todo-app
cd todo-app
yarn add sass classnames react-icons
```

<br />

#### 10.1.2 setting prettier
---
```json
{  
  "singleQuote": true,  
  "semi": true,  
  "useTabs": false,  
  "tabWidth": 2,  
  "trailingComma": "all",  
  "printWidth": 80  
}
```
<br />

#### 10.1.3 modify index.css
---
```css
body {  
  margin: 0;  
  padding: 0;  
  background: #e9ecef;   
}  
```

<br />

#### 10.1.4 Initialize App component
---

> TodoApp.js

```javascript
import React from 'react';  
import * as PropTypes from 'prop-types';  
  
function TodoTemplate(props) {  
  return null;  
}  
  
TodoTemplate.propTypes = {children: PropTypes.node};  
const TodoApp = () => {  
  return (  
      <div>Todo App</div>  
  );  
};  
  
export default TodoApp;
```

<br />

### 10.2 make up UI
---
> 1. TodoTemplate
> 2. TodoInsert
> 3. TodoListItem
> 4. TodoList

<br />

#### 10.2.1 Implement TodoTemplate
---
`jsconfig.json`  file is VS Code\`s configuration file that in root directory of project.

1. make component
2. make parent component
3. assign style sheet file
4. add insert feature
5. use icon component

<br />

#### 10.2.2 TodoInsert
---
> create TodoInsert.js
> create TodoInsert.scss

