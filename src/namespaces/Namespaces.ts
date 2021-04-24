namespace Shipping {
  //Available as Shipping.Ship
  export interface Ship {
    name: string;
    port: string;
    displacement: number;
  }

  //Available as Shipping.Ferry
  export class Ferry implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number
    ) {}
  }

  let defaultDisplacement = 4000;
  class PrivateShip implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number = defaultDisplacement
    ) {}
  }

  let ferry = new Shipping.Ferry("Assurance", "London", 3220);
}

namespace Validator {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }

  let strings = ["Hello", "98052", "101"];

  let validators: { [s: string]: StringValidator } = {};
  validators["Letters only"] = new LettersOnlyValidator();

  //Show whether each string passed each validator

  for (let s of strings) {
    for (let name in validators) {
      let isMatch = validators[name].isAcceptable(s);
      console.log(
        `'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`
      );
    }
  }
}
