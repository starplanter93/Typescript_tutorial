function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "jks", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);
