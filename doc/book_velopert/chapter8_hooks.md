

> Hooks is new feature of React 16.8 version.
> Hooks provide `useState`, `useEffect` etc.
> Use React built-in hooks
> Make custom Hooks.

### 8.1 useState
---
`useState` is very basic Hook
We use this function in chapter 3. Let's review this function.
> Counter.js
```javascript
import React, {useState} from 'react';  
  
const MyComponent = () => {  
  const [value, setValue] = useState(0);  
  return (  
      <div>  
        <p>  
          current counter value is <b>{value}</b>  
        </p>  
        <button onClick={() => setValue(value + 1)}> +1</button>  
        <button onClick={() => setValue(value - 1)}> -1</button>  
      </div>  
  );  
};  
  
export default MyComponent;
```
If you want use `useState` function, you must import.

<br />

#### 8.1.1 use `useState` repeatedly
---
> Info.js

```javascript
import React, {useState} from 'react';  
  
const Info = () => {  
  const [name, setName] = useState('');  
  const [nickname, setNickname] = useState('');  
  
  const onChangeName = e => {  
    setName(e.target.value);  
  };  
  
  const onChangeNickname = e => {  
    setNickname(e.target.value);  
  };  
  
  return (  
      <div>  
        <div>  
          <input value={name} onChange={onChangeName}></input>  
          <input value={nickname} onChange={onChangeNickname}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

<br />

### 8.2 useEffect
---
`useEffect` function run when rendering.


> InfoUseEffect.js

```javascript
import React, {useEffect, useState} from 'react';  
  
const Info = () => {  
  const [name, setName] = useState('');  
  const [nickname, setNickname] = useState('');  
  
  useEffect(() => {  
    console.log('rendering completed');  
    console.log({  
      name,  
      nickname  
    });  
  })  
  const onChangeName = e => {  
    setName(e.target.value);  
  };  
  
  const onChangeNickname = e => {  
    setNickname(e.target.value);  
  };  
  
  return (  
      <div>  
        <div>  
          <input value={name} onChange={onChangeName}></input>  
          <input value={nickname} onChange={onChangeNickname}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

<br />

#### 8.2.1 Only run when mount
---
Don't want every rendering useEffect function run, then add empty array to second parameter of  useEffect function.

>UseEffectOnlyFirstRender.js

```javascript
import React, {useEffect, useState} from 'react';  
  
const Info = () => {  
  const [name, setName] = useState('');  
  const [nickname, setNickname] = useState('');  
  
  useEffect(() => {  
    console.log('rendering completed only first render');  
    console.log({  
      name,  
      nickname  
    });  
  }, []) // add second argument empty array  
  const onChangeName = e => {  
    setName(e.target.value);  
  };  
  
  const onChangeNickname = e => {  
    setNickname(e.target.value);  
  };  
  
  return (  
      <div>  
        <div>  
          <input value={name} onChange={onChangeName}></input>  
          <input value={nickname} onChange={onChangeNickname}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

<br />

#### 8.2.2 Only update when specific value update
---
```javascript
import React, {useEffect, useState} from 'react';  
  
const Info = () => {  
  const [name, setName] = useState('');  
  const [nickname, setNickname] = useState('');  
  
  useEffect(() => {  
    console.log('name parameter change useEffect function run');  
    console.log({  
      name,  
      nickname  
    });  
  }, [name]) // add second argument empty array  
  const onChangeName = e => {  
    setName(e.target.value);  
  };  
  
  const onChangeNickname = e => {  
    setNickname(e.target.value);  
  };  
  
  return (  
      <div>  
        <div>  
          <input value={name} onChange={onChangeName}></input>  
          <input value={nickname} onChange={onChangeNickname}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

<br />

#### 8.2.3 clean up
---
If you want run some code before unmount or before update, add return function of `useEffect` cleanup function.

> UseEffectCleanup.js
```javascript
import React, {useEffect, useState} from 'react';  
  
const Info = () => {  
  const [name, setName] = useState('');  
  const [nickname, setNickname] = useState('');  
  
  useEffect(() => {  
    console.log('rendering with cleanup');  
    console.log(  
      name  
    );  
    return () => {  
      console.log('clean up');  
      console.log(name);  
    }  
  }, []) // add second argument empty array  
  const onChangeName = e => {  
    setName(e.target.value);  
  };  
  
  const onChangeNickname = e => {  
    setNickname(e.target.value);  
  };  
  
  return (  
      <div>  
        <div>  
          <input value={name} onChange={onChangeName}></input>  
          <input value={nickname} onChange={onChangeNickname}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

> ParentUseEffectCleanup.js
```javascript
import React, {useState} from 'react';  
import UseEffectCleanUp from './UseEffectCleanUp';  
  
const ParentUseEffectCleanUp = () => {  
  const [visible, setVisible] = useState(false);  
  return (  
      <div>  
        <button  
            onClick={() => {  
              setVisible(!visible);  
            }}>  
          {visible ? 'hide': 'show'}  
        </button>  
        <hr />  
        {visible && <UseEffectCleanUp />}  
      </div>  
  );  
};  
  
export default ParentUseEffectCleanUp;
```

<br />

### 8.3 useReducer
---
> Relate to Redux.
> reducer get current state and information for update that called `action`
> You must keep immutable when make new state.
> `action` in Redux must have type field, but in useReducer don't have to have a`type` field.
> and action is don't have to object type, it can be string or integer.
> 

<br />

#### 8.3.1 implements Counter
---
> re-implement Counter component `useReducer`

>CounterWithReducer.js
```javascript
import React, {useReducer, useState} from 'react';  
  
function reducer(state, action) {  
  
  switch (action.type) {  
    case 'INCREMENT':  
      return {value: state.value + 1};  
    case 'DECREMENT':  
      return {value: state.value - 1};  
    default:  
      return state;  
  }  
  
}  
  
const MyComponent = () => {  
  const [state, dispatch] = useReducer(reducer, {value: 0});  
  return (  
      <div>  
        <p>  
          current counter value is <b>{state.value}</b>  
        </p>  
        <button onClick={() => dispatch({type: 'INCREMENT'})}> +1</button>  
        <button onClick={() => dispatch({type: 'DECREMENT'})}> -1</button>  
      </div>  
  );  
};  
  
export default MyComponent;
```

<br />

#### 8.3.2 manage input state
---
You can single assignment operation with state variable. It's better than use useState that multiple assinment.

```javascript
import React, {useReducer, useState} from 'react';  
  
const Info = () => {  
  // It will change to useReducer  
  // const [name, setName] = useState('');  // const [nickname, setNickname] = useState('');  
  // const onChangeName = e => {  //   setName(e.target.value);  // };  //  // const onChangeNickname = e => {  //   setNickname(e.target.value);  // };  
  function reducer(state, action) {  
    return {  
      ...state, [action.name]: action.value,  
    };  
  }  
  
  const [state, dispatch] = useReducer(reducer, {  
    name: '',  
    nickname: '',  
  });  
  
  const {name, nickname} = state;  
  const onChange = e => {  
    dispatch(e.target);  
  };  
  
  return (  
      <div>  
        <div>  
          <input name="name" value={name} onChange={onChange}></input>  
          <input name="nickname" value={nickname} onChange={onChange}></input>  
        </div>  
        <div>  
          <div>  
            <b>Name: </b> {name}  
          </div>  
          <div>  
            <b>Nickname: </b> {nickname}  
          </div>  
        </div>  
      </div>  
  );  
};  
  
export default Info;
```

set name attribute 'name'

<br />

### 8.4 useMemo
---
It optimize calculate performance.

> Average.js
```javascript
import React, {useState, useMemo} from 'react';  
  
const getAverage = numbers => {  
  console.log('(UseMemo) Calculating average ...');  
  if (numbers.length === 0) return 0;  
  const sum = numbers.reduce((a, b) => a + b);  
  return sum / numbers.length;  
};  
  
const Average = () => {  
  const [list, setList] = useState([]);  
  const [number, setNumber] = useState('');  
  
  const onChange = e => {  
    setNumber(e.target.value);  
  };  
  
  const onInsert = e => {  
    const nextList = list.concat(parseInt(number));  
    setList(nextList);  
    setNumber('');  
  };  
  
  const avg = useMemo(() => getAverage(list), [list]);  
  
  // return JSX so return li tag is surrounded brace  
  return (  
      <div>  
        <input value={number} onChange={onChange}/>  
        <button onClick={onInsert}> Insert</button>  
        <ul>  
          {list.map((value, index) => (  
              <li key={index}> {value} </li>))  
          }  
        </ul>  
        <div>  
          <b>Average: </b> {avg}  
        </div>  
      </div>  
  );  
};  

export default Average;
```

<br />

### 8.5 useCallback
---
> It optimize rendering performance.
> if you use function that defined in component.
> Every rendering that function will newly defined.
> It is not good situation when too many rendering occur.

> UseCallbackAverage.js
```javascript
import React, {useState, useMemo, useCallback} from 'react';  
  
const getAverage = numbers => {  
  console.log('(UseMemo) Calculating average ...');  
  if (numbers.length === 0) return 0;  
  const sum = numbers.reduce((a, b) => a + b);  
  return sum / numbers.length;  
};  
  
const Average = () => {  
  const [list, setList] = useState([]);  
  const [number, setNumber] = useState('');  
  
  const onChange = useCallback(  
      (e) => {  
        setNumber(e.target.value);  
      },  
      [],  
  );  
  
  const onInsert = useCallback(  
      (e) => {  
        const nextList = list.concat(parseInt(number));  
        setList(nextList);  
        setNumber('');  
      },  
      [number, list],  
  );  
  
  const avg = useMemo(() => getAverage(list), [list]);  
  
  // return JSX so return li tag is surrounded brace  
  return (  
      <div>  
        <input value={number} onChange={onChange}/>  
        <button onClick={onInsert}> Insert</button>  
        <ul>  
          {list.map((value, index) => (  
              <li key={index}> {value} </li>))  
          }  
        </ul>  
        <div>  
          <b>Average: </b> {avg}  
        </div>  
      </div>  
  );  
};  
  
export default Average;
```

<br />

### 8.6 useRef
---
> useRef Hook make it easy to use `ref` in component.

make focus on input when click Insert button in component.

>UseRefAverage.js
```javascript
import React, {useState, useMemo, useCallback, useRef} from 'react';  
  
const getAverage = numbers => {  
  console.log('(UseMemo) Calculating average ...');  
  if (numbers.length === 0) return 0;  
  const sum = numbers.reduce((a, b) => a + b);  
  return sum / numbers.length;  
};  
  
const Average = () => {  
  const [list, setList] = useState([]);  
  const [number, setNumber] = useState('');  
  const inputEl = useRef(null);  
  
  const onChange = useCallback(  
      (e) => {  
        setNumber(e.target.value);  
      },  
      [],  
  );  
  
  const onInsert = useCallback(  
      (e) => {  
        const nextList = list.concat(parseInt(number));  
        setList(nextList);  
        setNumber('');  
        inputEl.current.focus();  
      },  
      [number, list],  
  );  
  
  const avg = useMemo(() => getAverage(list), [list]);  
  
  // return JSX so return li tag is surrounded brace  
  return (  
      <div>  
        <input value={number} onChange={onChange} ref={inputEl}/>  
        <button onClick={onInsert}> Insert</button>  
        <ul>  
          {list.map((value, index) => (  
              <li key={index}> {value} </li>))  
          }  
        </ul>  
        <div>  
          <b>Average: </b> {avg}  
        </div>  
      </div>  
  );  
};  
  
export default Average;
```

> LocalVarUseRef.js
```javascript
import React, {useRef} from 'react';  
  
const LocalVarUseRef = () => {  
  const id = useRef(1);  
  const setId = (n) => {  
    id.current = n;  
  }  
  const printId = () => {  
    console.log(id.current);  
  }  
  return (  
      <div>  
        refSample  
      </div>  
  );  
};  
  
export default LocalVarUseRef;
```
Local variable is independent rendering.

<br />

### 8.7 custom Hooks
---
> UseInput.js

```javascript
import {useReducer} from 'react';  
  
function reducer(state, action) {  
  return {  
    ...state, [action.name]: action.value  
  };  
}  
  
export default function useInputs(initialForm) {  
  
  const [state, dispatch] = useReducer(reducer, initialForm);  
  const onChange = e => {  
    dispatch(e.target);  
  };  
  
  return [state, onChange];  
}
```

<br />

### 8.8 Other Hooks
---
[hooks list](https://nikgraf.github.io/react-hooks)
[awesome Hooks](https://github.com/rehooks/awesome-react-hooks)

<br />

### 8.9 Summary
---
> react recommend use hooks than class component function like `setState`.
> react will support class component.
> So first option is functional component + hooks, seconds class component.