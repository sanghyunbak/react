const MyComponent = props => {
  return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>
}

export default MyComponent;



import Mycomponent from `./MyComponent`;

const App = () => {
  return <Mycomponent />
};

export default App;

function App() {
    const name = 'React';
    return (
        <Fragment>
            <h1>Hello {name}!</h1>
            <h2>Do you work well?</h2>
        </Fragment>
    )
}
export default App;

function App() {
    return (
        <>
            <h1>Hello React!</h1>
            <h2>Do you work well?</h2>
        </>
    )
}
export default App;

function AppTest() {
    return (
        <div>
            <h1>Hello React!</h1>
            <h2>Do you work well?</h2>
        </div>
    )
}


function App() {
    return (
        <div>
            Hello <b>react</b>
        </div>
    )
}

function App2() {
    return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}


setTimeout(() => {
  console.log('hello world');
}, 1000);
