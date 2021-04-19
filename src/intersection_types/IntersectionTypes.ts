interface FastFood {
  oil: number;
}

interface ItalianFood {
  tasty: boolean;
}

interface HealthyFood {
  calories: number;
}

let food1: FastFood | HealthyFood;
let food2: ItalianFood;
let food3: FastFood;
let food4: FastFood & ItalianFood;
