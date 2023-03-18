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
todo list app composed of 4 components.

> 1. TodoTemplate
> 	1. align display to center and show app's title
> 2. TodoInsert
> 	1. new item add
> 	2. maange input\`s state through use state
> 3. TodoListItem
> 	1. show indivisual item information
> 	2. get todo object as a props, and show styles that depends state.
> 4. TodoList
> 	1. get todos array and convert multiple TodoListItem via built-in array function map.

```🔑info
src/components directory is traditional customary way store components.
```
this stage we concentrate build a architecture not implements feature.

<br />

#### 10.2.1 Implement TodoTemplate
---
`jsconfig.json`  file is VS Code\`s configuration file that in root directory of project.

1. make component
2. make parent component
3. assign style sheet file
4. add insert feature
5. use icon component

```javascript
import React from 'react';  
import './TodoTemplate.scss';  
  
const TodoTemplate = ({children}) => {  
  return (  
      <div>  
        <div className="TodoTemplate">  
          <div className="app-title">일정 관리</div>  
          <div className="content">{children}</div>  
        </div>  
      </div>  );  
};  
  
export default TodoTemplate;
```

<br />

#### 10.2.2 TodoInsert
---
> create TodoInsert.js
> create TodoInsert.scss



>TodoInsert.js

```jsx
import {MdAdd} from 'react-icons/md' // md: material design  
import React from 'react';  
import './TodoInsert.scss'  
  
const MyComponent = () => {  
  return (  
      <form className={"TodoInsert"}>  
        <input placeholder={'Insert todo job'} />  
        <button type={"submit"}>  
          <MdAdd />      
        </button>     
     </form>  );  
};  
  
export default MyComponent;
```

>TodoInsert.scss
```scss
.TodoInsert {  
  display: flex;  
  background: #495057;  
  
  input {  
    outline: none;  
    border: none;  
    padding: 0.5rem;  
    font-size: 1.125rem;  
    line-height: 1.5;  
    color: white;  
  
    &::placeholder {  
      color: #dee2e6;  
    }  
    flex: 1;  
  }  
  
  botton {  
    background: none;  
    outline: none;  
    border: none;  
    background: #868e96;  
    color: white;  
    padding-left: 1rem;  
    padding-right: 1rem;  
    font-size: 1.5rem;  
    display: flex;  
    align-items: center;  
    cursor: pointer;  
    transition: 0.1s background ease-in;  
  
    &:hover {  
      background: #adb5db;  
    }  
  }}
```


> TodoListItem.js
```jsx

import React from 'react';
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
      <div className={"TodoListItem"}>
        <div className="checkbox">
          <MdCheckBoxOutlineBlank />
          <div className="text">To do</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>

      </div>
  );
};

export default TodoListItem;


```

> TodoListItem.scss
```scss
.TodoListItem {  
  padding: 1rem;  
  display: flex;  
  align-items: center;  
  &:nth-child(even) {  
    background: #f8f9fa;  
  }  
  .checkbox {  
    cursor: pointer;  
    flex: 1;  
    display: flex;  
    align-items: center; //vertically center align  
    svg {  
      // icon  
      font-size: 1.5rem;  
    }    .text {  
      margin-left: 0.5rem;  
      flex: 1; // all range  
    }  
  
    // style when check  
    &.checked {  
      svg {  
        color: #22b8cf;  
      }      .text {  
        color: #adb5db;  
        text-decoration: line-through;  
      }    }  }  .remove {  
    display: flex;  
    align-items: center;  
    font-size: 1.5rem;  
    color: #ff6b6b;  
    cursor: pointer;  
    &:hover {  
      color: #ff8787;  
    }  }  
  // draw line between elements  
  & + & {  
    border-top: 1px solid #dee2e6;  
  }}
```


> TodoList.js
```jsx
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
      <div className={"TodoList"}>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
  );
};

export default TodoList;

```


> TodoList.scss
```scss
.TodoList {  
  min-height: 320px;  
  max-height: 513px;  
  overflow-y: auto;  
}
```


>TodoApp.js
```jsx
import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
  );
};

export default TodoApp;

```

<br />

### 10.3 Implements feature
---
