function myFunctionVar() {
  var a = 'hello';
  if (true) {
    var a = "bye";
    console.log(a);
  }

  console.log(a)
}
console.log("😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎")
myFunctionVar() // var키워드는 scope이 합수 단위라 bye, bye 가 출력 됨

function myFunctionLet() {
  let a = 'hello';
  if (true) {
    let a = "bye";
    console.log(a);
  }

  console.log(a)
}
console.log("😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀")
myFunctionLet() // let 키워드는 scope이 bye, hello가 출력 됨
