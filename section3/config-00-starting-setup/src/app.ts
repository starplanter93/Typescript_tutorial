let appId = "abc";
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

button.addEventListener("click", () => {
  console.log("Clicked!");
});

const button2 = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button2) {
  button2.addEventListener("click", clickHandler.bind(null, "hi"));
}
