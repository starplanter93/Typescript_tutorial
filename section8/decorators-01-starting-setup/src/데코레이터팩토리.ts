/* // 데코레이터 팩토리
// 데코레이터 함수에 원하는 인자를 넣고 싶다면 데코레이터 팩토리를 생성해주면 된다.
// 데코레이터 함수의 리턴에 익명함수를 만들고, 익명함수의 인자에 constructor를 넣어주고,
// 데코레이터 함수의 인자에 원하는 인자를 넣어주면된다.
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// 데코레이터 함수의 리턴값인 익명함수가 필요하기때문에,
// 단순히 데코레이터 함수를 불러오는 것 만이아니라 ()로 실행해주고, 인자로 우리가 원하는 값을 넣어준다.
@Logger("Logging - person")
class Person {
  name = "jks";

  constructor() {
    console.log("Createing person object...");
  }
}

const pers = new Person();

console.log(pers);
 */
