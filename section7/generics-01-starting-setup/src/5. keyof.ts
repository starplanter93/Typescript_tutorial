/* function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([1, 2]));

// obj에 매개변수key가 key로 들어가 있는지 TS가 알지 못하므로 오류.
// function extractAndConvert(obj: object, key: string) {
//   return "Value: " + obj[key];
// }

// keyof 라는 키워드를 통해 매개변수 key가 obj의 key라는 것을 TS에게 알려줄 수 있음.
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "jks" }, "name");
 */
