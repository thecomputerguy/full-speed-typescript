/**Variables single type */
let firstName: string = "Alan";
let age: number = 6;
let isMarried: boolean = false;

/**Variables multi type
 * Multitypes can be achieved by using any as type
 */
let myVariable: any = "hello world";
myVariable = 10;
myVariable = false;

/**Sub types
 * Sub types are used when we are unaware of the value of the variable.
 * TypeScript provides us with two sub types: null and undefined.
 *
 */

//let dummyVariable: number = undefined;

/**Implicit vs explicit typing */
let implicit = "Hello World";
console.log(typeof implicit);

let explicit: string = "Hello World";
console.log(typeof explicit);
