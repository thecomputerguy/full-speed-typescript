/**Checking types */
let typeChecking = "A value here";
class Animal {
  public name: string;
  public type: string;

  constructor(_name: string, _type: string) {
    this.name = _name;
    this.type = _type;
  }
}

let tiger = new Animal("White tiger", "carnivorous");

if (tiger instanceof Animal) {
  console.log("tiger is an instanceof of Animal");
  //Do some stuff here...
}
