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
