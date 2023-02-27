### 6.1 map function in Javascript
---
> #### 💡Info
> if you use built-in fufnction `map` you can access array type efficiently.

<br />

#### 6.1.1 Syntax
---
`arr.map(callback, [thisArg])`

Syntax of this function parameter is this.
- callback: function that create new array with below parameters.
	- currentValue: current element in processing
	- index: current index of element
	- array: original array of current processing array
- thisArg(Optional): this reference of internal callback function

<br />

### 6.1.2 Example
---
Let's make sqiare value of given list.
``` javascript
var numbers = [1,2,3,4,5];
var processed = numbers.map(function(num){
	return num *num;
});

console.log(processed);
```


make ES6 syntax.
```javascript
var numbers = [1,2,3,4,5];
var result = numbers.map((num) => num *num);
console.log(result)
```

<br />

### 6.2 convert from data array to component array
---
#### 6.2.1 modify component
---
```javascript
const IterationSample = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];
  const nameList = names.map(name => <li>{name}</li>)
  return (
      <ul>
        {nameList}
      </ul>
  );
};

export default IterationSample;
```

above code snippet makes error that each child in a list should have unique "key" prop.

### 6.3 key
---
> In react `key` makes efficiently find the difference of VirtualDOM

### 6.3.1 key setting
---
> You should defined key as a props of component

```javascript
const articleList = artticles.map(article => (
	<Article
		title={article.title}
		writer={article.writer}
		key={article.id}
		/>
));
```

but 6.2.1 example has no key.
If you moidfy 6.2.1 example like below, you can't see error message of chorme developer tool.
```javascript
const IterationSample = () => {  
  const names = ['snowman', 'ice', 'snow', 'wind'];  
  const nameList = names.map((name, index) => <li key={index}>{name}</li>)  
  return (  
      <ul>  
        {nameList}  
      </ul>  
  );  
};  
  
export default IterationSample;
```
but use index as a key is not efficient way in rendering. You must use index as. a key, if you don't have any unique key value.

<br />

### 6.4 Apply to Application
---
> - Initial status setting.
> - Implement adding data function.
> - Implement data deletion feature.

<br />

#### 6.4.1 Setting initial status
---
Set initial state use `useState`
First, data array.
Second, input state to insert text.
Third, state for unique id that new element added.

<br />

#### 6.4.2 Implements add data feature 
---
At first, implements new name add feature.
Above ul tag, rendering input and button tag, and maange input state.

``` javascript
import React, {useState} from 'react';

const MyComponent = () => {
  const [names, setNames] = useState([
    {id: 1, text: 'Snowman'},
    {id: 2, text: 'Ice'},
    {id: 3, text: 'Snow'},
    {id: 4, text: 'Wind'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = (e) => {
    // push add data to origianl variable, that make performance degradation, use concat to performance. 
    // let newNames = names;
    // newNames.push({id: nextId, text: inputText});

    let newNames = names.concat({id: nextId, text: inputText})
    setNextId(nextId + 1);
    setNames(newNames);
    console.log(names)
  }

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

  return (
      <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>Add</button>
        <ul>
          {namesList}
        </ul>
      </>

  );
};

export default MyComponent;

```

<br />

#### 6.4.3 Implement delete data operation
---
We implements delete operation of this app. 
Data will be removed, when double click item.
we use filter function that filtering by condition.

```javascript
// filter example : get number that bigger than 3

// const numbers = [1,2,3,4,5,6];
// const biggerThanThree = numbers.filter(number => number > 3);

import React, {useState} from 'react';

const MyComponent = () => {
  const [names, setNames] = useState([
    {id: 1, text: 'Snowman'},
    {id: 2, text: 'Ice'},
    {id: 3, text: 'Snow'},
    {id: 4, text: 'Wind'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = (e) => {
    // push add data to origianl variable, that make performance degradation, use concat to performance.
    // let newNames = names;
    // newNames.push({id: nextId, text: inputText});

    let newNames = names.concat({id: nextId, text: inputText});
    setNextId(nextId + 1);
    setNames(newNames);
    console.log(names);
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => (<li key={name.id}
                                          onDoubleClick={() => onRemove(
                                              name.id)}>{name.text}</li>));

  return (
      <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>Add</button>
        <ul>
          {namesList}
        </ul>
      </>

  );
};

export default MyComponent;

```

<br />

### 6.5 Summary
---
> - This chapter we learn repated data rendering feature, and manage dynamic array .
> - Be careful when component array rendering set key value.
> - If you modify array type of state value, use map, filter, concat not directry access state.