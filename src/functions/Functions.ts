function countAverage(x: number, y: number, z: number): string {
  var together = x + y + z;
  var average = together / 3;
  return "The average is " + average;
}

var res = countAverage(3, 2, 10);
console.log(res);

//countAverage with initialization check.
function countAvr(x: number, y: number, z?: number): string {
  var together = x;
  var counter = 1;

  together += y;
  counter++;

  //as z is optional we must check if it's value exists.
  if (typeof z !== "undefined") {
    together += z;
    counter++;
  }

  var average = together / 3;
  return "The average is " + average;
}

var res = countAvr(2, 8); //the average is 5

function conc(i: string[], s = ",", b = 0, e = i.length) {
  var resp = "";

  for (var k = b; k < e; k++) {
    resp = i[k];
    if (k < e - 1) {
      resp += s;
    }
  }

  return resp;
}

var items = ["D", "E", "F"];

//'D,E,F'
var res = conc(items);

var partRes = conc(items, "-", 1);

/**
 * A rest parameter
 */
function countAvrWithRest(...avr: number[]): string {
  var t = 0;
  var c = 0;

  for (var i = 0; i < avr.length; i++) {
    t += avr[i];
    c++;
  }

  var av = t / c;
  return "The average is " + av;
}

var resRest = countAvrWithRest(1, 6, 8, 9, 11); // The avergage is 7

/**
 * Function overloads
 **/

//Definition signature
function countAvrOverloads(x: string, y: string, z: string): string;
function countAvrOverloads(x: number, y: number, z: number): string;
//implementation signature
function countAvrOverloads(x: any, y: any, z: any): string {
  var t = parseInt(x, 10);
  +parseInt(y, 10);
  +parseInt(z, 10);
  var avr = t / 3;
  return "The average is " + avr;
}

var res = countAvrOverloads(2, 4, 9); //5
