interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

class PersonImpl implements IPerson {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const jordon: IPerson = new PersonImpl("Jordon", "Quinn", 29);
console.log(jordon.firstName);
console.log(jordon.lastName);
console.log(jordon.age);

interface Musician {
  singles: number;
  albums: number;
}

interface Rapper {
  singles: number;
  albums: number;
  styles: number;
}

var eminem: Musician = {
  singles: 120,
  albums: 80,
  //styles: 4, //Cannot assign as this property does not exist on musician
};

//var rapper: Rapper = eminem; //cannot convert Musician to Rapper

//Works
var rapper: Rapper = <Rapper>eminem;

//Forced type assertions
var rapperName: string = "Rapper Eminem";

//Error: Cannot convert 'string' to 'number'
//var singles: number = <number> rapperName;

//Works. First convert it to any and then convert it to a number
var singles: number = <number>(<any>rapperName);
