const trainingCartRestrictions = {
  name: "DefaultCart",
  maxTrainingsPerCart: 10,
};

//Error
// trainingCartRestrictions = {
//     name: "MyCart",
//     maxTrainingsPerCart: 10,
// }

//Still works
trainingCartRestrictions.name = "ConsultancyCart";
trainingCartRestrictions.maxTrainingsPerCart--;
