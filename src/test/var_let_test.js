function myFunctionVar() {
  var a = 'hello';
  if (true) {
    var a = "bye";
    console.log(a);
  }

  console.log(a)
}
console.log("ππππππππππππππππππππ")
myFunctionVar() // varν€μλλ scopeμ΄ ν©μ λ¨μλΌ bye, bye κ° μΆλ ₯ λ¨

function myFunctionLet() {
  let a = 'hello';
  if (true) {
    let a = "bye";
    console.log(a);
  }

  console.log(a)
}
console.log("ππππππππππππππππππππ")
myFunctionLet() // let ν€μλλ scopeμ΄ bye, helloκ° μΆλ ₯ λ¨
