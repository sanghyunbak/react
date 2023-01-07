function BlackDoc() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: function () {
      console.log(this.name + ": 멍멍!");
    },
  };
}

const blackdoc = BlackDoc();
blackdoc.bark();

function WhiteDoc() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: () => {
      console.log(this.name + ": 멍멍!");
      console.log("%cno this keyword: " + name + ": 멍멍!", "color:red;");
    },
  };
}

const whitedoc = WhiteDoc();
whitedoc.bark();
