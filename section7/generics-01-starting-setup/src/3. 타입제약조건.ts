/* // 타입제약조건
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // merge의 두번째 인자를 30을 주게되면, 에러도 뜨지 않고 콘솔에도 30을 찾을 수 없다.
// // JS에서 Object.assign의 용법에 맞지 않기 때문에 이런 현상이 발생한다.
// const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, 30);
// console.log(mergedObj);

// 그래서 매개변수의 타입으로 지정된 T와 U가 어떤 객체인지는 상관없어도, 객체 타입이기는 해야한다.
// 이때 타입제약조건이 필요하다.
// 타입제약조건은 <> 안에 extends를 통해 설정할 수 있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  // const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, 30);
  // 'number' 형식의 인수는 'object' 형식의 매개 변수에 할당될 수 없습니다.
  const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, { age: 30 });
  console.log(mergedObj); */
