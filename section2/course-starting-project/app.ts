let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "jks";
// userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

// console.log(userInput.length);

if (typeof userInput === "string") {
  console.log(userInput.length);
}

function voidFunc() {
  console.log("void");
}

console.log(voidFunc());

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

console.log(generateError("An error occurred!", 500));
