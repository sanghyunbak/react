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
> 	1. align display center and show app title
> 2. TodoInsert
> 	1. new item add
> 	2. input state management use state
> 3. TodoListItem
> 	1. show indivisual item information
> 	2. get todo object as a props, and show styles that depends state.
> 4. TodoList
> 	1. get todos array and convert multiple TodoListItem via built-in array function map.

```🔑info
src/components directory is traditional customary way store components.
```

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

