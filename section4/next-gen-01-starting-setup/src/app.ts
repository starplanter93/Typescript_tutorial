// const userName = "jks";
// let age = 30;

// const add = (a: number, b: number = 1) => a + b;

// const printOutput = (output: string | number) => {
//   console.log(output);
// };

// const printOutput = (output: string | number) => console.log(output);

// const printOutput: (a: string | number) => void = (output) =>
//   console.log(output);

// printOutput(add(5));

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const person = {
  userName: "jks",
  age: 30,
};

const { userName: adminName, age } = person;
console.log(adminName, age);
