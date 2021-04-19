type Person = {
  name: string;
};

type Company = {
  name: string;
  manager: Person;
};

const manager: Person = {
  name: "Jenny",
};

const creditSuisse: Company = {
  name: "credit suisse",
  manager,
};

const google: Company = {
  name: "Google",
  manager: {
    name: "Austin",
  },
};
