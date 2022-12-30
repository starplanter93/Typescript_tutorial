// 인터섹션 타입
// 다른 타입을 결합할 수 있음
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  // Date타입은 타입스크립트가 지원하는 자바스크립트에 내장된 Date객체 기반의 타입
  startDate: Date;
};

// `&` 기호로 서로 다른 타입을 합칠 수 있음
// 만약 interface 기호를 사용해서 Admin과 Employee를 인터페이스로 만들어도 아래처럼 결합해서 타입으로 사용가능.
// 서로 다른 객체타입을 합치면 두 객체의 합집합인 요소를 갖는 타입이 된다.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "jks",
  privileges: ["create-server"],
  startDate: new Date(),
};

// 타입 인터섹션은 객체에만 가능한 것이 아니라, 아래처럼 여러 다른 타입도 가능하다.
type Combinable = string | number;
type Numeric = number | boolean;

// Universal 타입은 두 타입의 교집합인 number 타입이 된다.
type Universal = Combinable & Numeric;
