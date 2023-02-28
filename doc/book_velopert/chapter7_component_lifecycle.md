
### 7.1 Understanding lifecycle method
---
> Total lifecycle method type is 9.
> likes pre/post, use "Will", "Did"
> Three categorieis: mount, update, unmount

<br />

#### Mount
---
In browser DOM appear, this is mount
- create component
- constructor: when new creation of component class constructor method
- getDerivedStateFromProps: from props value to state
- render: UI rendering method
- componentDidMount : after component rendered at browser

<br />

### Update
---
- change props
- change state
- rerendering parent's component
- forcely trigger rendering using `this.forceUpdate`
---
- getDerivedStateFromProps: also called when mount, when props change
- shouldComponentUpdate: return true/false. if true return, rendering
- render: render component
- getSnapshotBeforeUpdate: before apply DOM 
- componentDidUpdate: after component's update 

<br />

### Unmount
---
Remove component in DOM
- componentWillUnmount: before remove. component in DOM

<br />

### 7.2 Check it out lifcycle method
---
#### 7.2.1 render() function
---
Only must have method in lifecycle.
This function return tag or component. If you want to show nothing, return null or false.

> Warnning
> Do not use `setState` not in event setting.
> If you  wnat get DOM information or change state status use componentDidMount.

<br />

#### 7.2.2 constructor method
---
`constructor(props) {...}`
this function will be called, when you create component's constructor method.

<br />

#### 7.2.3 getDerivedStateFromProps method
---
this method will called when update state value from props.

```javascript
static getDerivedStateFromProps(nextProps, prevState) {  
  if (nextProps.value !== prevState.value) {  
    return {value: nextProps.value};  
  }  
  return null;  
}
```
javscript has no 'statc' reserved keyword....

<br />

#### 7.2.4 componentDidMount method
---
`componentDidMount() {...}`

this will be executed after first rendering. 
You can register event, do async task likes setTimeout, setInterval, Network request. 

<br />

### 7.2.5 shouldComponentUpdate method
---
`shouldComponentUpdate(nextProps, nextwState) {...}`
You can set the value, whether it will rerender or not when props or state change.
default return value is true.
You can performance optimize using this method to stop rerendering.

<br />

#### 7.2.6 getSanpshotBeforeUpdate method
---
This method will be called  before browser rendering.
Return snapshot(current value state).

<br />

#### 7.2.7 componentDidUpdate method
---
`componentDidUpdate(prevProps, prevState, snapshot) {...}`
It will run after rerenderin complete.
You can process DOM relative task. You cass access old data via prevProps, prevState.
if getSnapshotBeforeUpdate method return value you can get the snapshot.

<br />

#### 7.2.8 componentWillUnmount method
---
`componentWillUnmount() {...}`
It will run when delete component from DOM.

<br />

#### 7.2.9 componentDidCatch method
---
It can show error UI, when errro occure during rendering.

```javascript
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
  console.log({error, info})
}
```

<br />

### 7.3 use lifecycle method
---

#### 7.3.1 create example component
---
```javascript
import React, {Component} from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null; // ref setting

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // if last number is 4 didn't rerendering
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
       return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapshot) {
      console.log('Color of before update: ', snapshot);
    }
  }


  render() {
    console.log('render');

    const style = {
      color: this.props.color
    }

    return (
        <div>
          <h1 style={style} ref={ref => this.myRef=ref}>
            {this.state.number}
          </h1>
          <p>color: {this.state.color}</p>
          <button onClick={this.handleClick}>ADD</button>
        </div>
    );
  }
}

export default LifeCycleSample;
```

#### 7.3.2 Use example component in App component
---

<br />

#### 7.3.3 correct Error
---

You can catch exception when component rendering.
`componentDidCatch` method will run when error occur.
If you want catch error, surround component with component that contains componentDidCatch function overrided.

> ErrorBound.js
```javascript
import React, {Component} from 'react';  
  
class ErrorBoundary extends Component {  
  state = {  
    error: false,  
  };  
  
  componentDidCatch(error, errorInfo) {  
    this.setState({  
      error: true,  
    });  
    console.log({error, errorInfo});  
  }  
  
  render() {  
  
    if (this.state.error) return <div> Error Occur! </div>;  
    return this.props.children;  
  
  }  
}  
  
export default ErrorBoundary;
```

<br />


> ErrorLifeCycle.js
```javascript
import React, {Component} from 'react';  
  
class LifeCycleSample extends Component {  
  state = {  
    number: 0,  
    color: null  
  }  
  
  myRef = null; // ref setting  
  
  constructor(props) {  
    super(props);  
    console.log('constructor');  
  }  
  
  static getDerivedStateFromProps(nextProps, prevState) {  
    console.log('getDerivedStateFromProps');  
    if (nextProps.color !== prevState.color) {  
      return {color: nextProps.color};  
    }  
    return null;  
  }  
  
  componentDidMount() {  
    console.log('componentDidMount');  
  }  
  
  shouldComponentUpdate(nextProps, nextState) {  
    console.log('shouldComponentUpdate', nextProps, nextState);  
    // if last number is 4 didn't rerendering  
    return nextState.number % 10 !== 4;  
  }  
  
  componentWillUnmount() {  
    console.log('componentWillUnmount');  
  }  
  
  handleClick = () => {  
    this.setState({  
      number: this.state.number + 1  
    })  
  }  
  
  getSnapshotBeforeUpdate(prevProps, prevState) {  
    console.log('getSnapshotBeforeUpdate');  
    if(prevProps.color !== this.props.color) {  
      return this.myRef.style.color;  
    }  
    return null;  
  }  
  
  componentDidUpdate(prevProps, prevState, snapshot) {  
    console.log('componentDidUpdate', prevProps, prevState);  
    if(snapshot) {  
      console.log('Color of before update: ', snapshot);  
    }  
  }  
  
  
  render() {  
    console.log('render');  
  
    const style = {  
      color: this.props.color  
    }  
  
    return (  
        <div>  
          {this.props.missing.value}  
          <h1 style={style} ref={ref => this.myRef=ref}>  
            {this.state.number}  
          </h1>  
          <p>color: {this.state.color}</p>  
          <button onClick={this.handleClick}>ADD</button>  
        </div>  
    );  
  }  
}  
  
export default LifeCycleSample;
```

<br />

> ParentErrorLifecycle.js
```javascript
import React, {Component} from 'react';  
import ErrorLifeCycle from './ErrorLifeCycle';  
import ErrorBoundary from './ErrorBoundary';  
  
  
function getRandomColor() {  
  return '#' + Math.floor(Math.random() * 16777215).toString(16);  
}  
  
class ParentLifeCycleSample extends Component {  
  state = {  
    color: '#000000',  
  }  
  
  handleClick = () => {  
    this.setState({  
      color: getRandomColor()  
    })  
  }  
  
  
  render() {  
    return (  
        <div>  
          <button onClick={this.handleClick}>Random Color</button>  
          <ErrorBoundary>  
            <ErrorLifeCycle color={this.state.color} />  
          </ErrorBoundary>  
        </div>  
    );  
  }  
}  
  
export default ParentLifeCycleSample;
```


<br />

### 7.4 Summary 
---
> You can manage component lifecycle use lifecycle methods.
> `shouldComponentUpdate` method make performance better let's see this contents in chapter 11

