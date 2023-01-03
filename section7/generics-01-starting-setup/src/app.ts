function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

// TS는 element에 length라는 요소가 있는지 알 수 없어서 오류 출력
// 'T' 형식에 'length' 속성이 없습니다.
// function countAndDescribe<T>(element: T) {
//   let descriptionText = "Got no value";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element";
//   } else if (element.length > 1) {
//     descriptionText = "Got " + element.length + " elements";
//   }
//   return [element, descriptionText];
// }

// 그래서 인터페이스를 하나 만들고 그것을 T의 타입제약조건으로 설정해줌.
// 이 인터페이스는 T가 length속성만 갖는다면 다른건 신경쓰지 않게 해줌.
// 그러므로 countAndDescribe 함수는 length속성을 갖는 배열이나 문자열 혹은 length속성을 지닌 객체 등을 인자로 받을 수 있게됨.
// 굳이 T에 유니언타입으로 array나 string을 지정하지 않는 이유는 유니언 타입보다 유연한 타입을 지정하고 싶기 때문.
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

// console.log(countAndDescribe(30));
// Error : 'number' 형식의 인수는 'Lengthy' 형식의 매개 변수에 할당될 수 없습니다.
console.log(countAndDescribe([1, 2]));
