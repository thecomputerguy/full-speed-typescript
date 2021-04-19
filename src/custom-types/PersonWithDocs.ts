type Dentist = {
  /**
   * The full name of the person
   */
  name: string;
  /**
   * This person is known for what?
   */
  knownFor: string[];
};

const alex: Dentist = {
  name: "Alex",
  knownFor: ["Tooth Surgery"],
};
