type MergeStringsArray = [string, string, ...string[]];

//If an array has less than two string elements, it will be invalid, like the following:
//const invalidArray: MergeStringsArray = ['some-string'];

const validArray: MergeStringsArray = ["some-string1", "some-string2"];
