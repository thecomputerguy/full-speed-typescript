const word = "Hello";

export function hello(greetingWord: string = word): string {
  console.log("Function called.");
  return `${greetingWord} world`;
}

hello(word);
