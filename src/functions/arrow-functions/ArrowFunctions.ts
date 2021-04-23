//Arrow functions
var addNrs = (x: number, y: number) => x + y;

var addNrs = (x: number, y: number) => {
  return x + y;
};

var addNrs = function (x: number, y: number) {
  return x + y;
};

//Wrapping an object in parentheses
var createName = (x: string, y: string) => ({ first: x, last: y });

//preserving scope with arrow syntax
var ScopeLosingEX = {
  text: "",
  run: function () {
    //Here we have the usual JS way
    setTimeout(function () {
      alert(this.text);
    }, 1000);
  },
};

//alerts undefined
ScopeLosingEX.run();

var ScopePreservingEx = {
  text: "",
  run: function () {
    setTimeout(() => {
      alert(this.text);
    }, 1000);
  },
};

ScopePreservingEx.run();
