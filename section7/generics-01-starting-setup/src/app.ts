// 제네릭 함수 생성하기
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// // 작동잘한다. 하지만
// console.log(merge({ name: "jks" }, { age: 30 }));

// // age가 mergedObj에 있는 key라는 것을 TS가 알지못한다.
// // merge가 객체를 반환한다는 것을 알긴하지만, 그 객체의 key가 뭐가 있는지는 모르기때문.
// const mergedObj = merge({ name: "jks" }, { age: 30 });
// mergedObj.age;
// 이럴경우 제네릭 함수를 생성하면 유용하다.
// 이렇게 제네릭 함수를 만들어주면 TS는 이 함수의 리턴값으로 objA와 objB의 인터섹션을 반환한다고 인식한다.
// 즉, 함수를 호출할 때, 인자로 들어갈 요소의 타입을 동적으로 지정해주는 것이다.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// 그러므로 mergedObj의 요소에 접근할 수 있다.
const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);
