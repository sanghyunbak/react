import { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div classNAme="react">{name}</div>;
  }
}

export default App;

function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function () {
  console.log(this.name + ": 멍멍");
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + ": 멍멍");
  }
}

const dog = new Dog("흰둥이");
dog.say(); // 흰둥이: 멍멍
