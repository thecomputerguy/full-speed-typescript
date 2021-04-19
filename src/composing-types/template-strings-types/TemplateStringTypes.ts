type StringThatStartsWithGet = `get${string}`;

const myString: StringThatStartsWithGet = "getData";

//invalid type, fails because string does not start with 'get'
//const invalidString: StringThatStartsWithGet = 'invalidString';
