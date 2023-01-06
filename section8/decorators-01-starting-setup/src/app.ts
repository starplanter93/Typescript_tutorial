// 데코레이터
// 데코레이터를 사용하려면 tsconfig파일에서 "experimentalDecorators" 옵션을 true로 설정해야한다.
// 함수를 데코레이터로 설정할 때, 앞글자를 대문자로 하는 것이 관례.
// 인자에 constructor를 넣어주고 타입까지 지정해준다.
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// 데코레이터를 사용하기 위해 @ 뒤에 함수를 불러온다.
// 중요한 것은 데코레이터의 경우, 클래스가 실체화 되기 이전에, 클래스가 정의만 되어도 실행된다는 점이다.
// 콘솔을 보면 Creating person object... 보다 Logger 데코레이터 함수의 콘솔이 먼저 찍힌 것을 알 수 있다.
@Logger
class Person {
  name = "jks";

  constructor() {
    console.log("Createing person object...");
  }
}

const pers = new Person();

console.log(pers);
