function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResultUndefined(num: number): undefined {
  console.log("Result: " + num);
  return;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const add = cb(result);
  console.log(add);
}

printResult(add(5, 12));

let combineValuesEx1: Function;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandler(10, 20, (result) => {
  console.log(result);
  return result;
});

function sendRequest(data: string, cb: (response: any) => void): void {
  // ... sending a request with "data"
  const num = cb({ data: "Hi there!" });
  console.log(num - 3);
  console.log(typeof num);
  return num;
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return 10;
});

function func1(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function func2(num1: number, num2: number): number {
  return num1 + num2;
}
// 예제 1번
let arrow: (a: number, b: number) => number;

arrow = func1; // Error!
arrow = func2;

// 예제 2번
let arrow2: (a: number, b: number) => void;

arrow2 = func1; // 이상없음
arrow2 = func2; // 이상없음

console.log(arrow2(5, 5));

// 예제 3번
function func3(num1: number, cb: (num2: number, num3: number) => void) {
  const counts = cb(num1, num1);
  console.log(`counts : ${counts}`); // counts : 25
}

func3(5, (a, b) => {
  return a * b;
});
