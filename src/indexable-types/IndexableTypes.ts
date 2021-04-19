type Data = {
  [key: string]: any;
};

const fooStringData: string = "fooKey";
const fooBooleanData: boolean = false;
const data = {
  fooStringData: "Foo",
  fooBooleanData: true,
};

type Rectangle = {
  length: number;
  [key: string]: number;
};

const rectangle = {
  length: 5,
  breadth: 10,
  area: 50,
};
