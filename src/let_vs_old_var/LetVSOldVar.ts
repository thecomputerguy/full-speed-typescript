for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}

//Capture the current state of 'i'
//by invoking a function with its current value
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  })(i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}
