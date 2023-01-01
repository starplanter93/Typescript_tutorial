// 인덱스속성
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "jks",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 함수 오버로드
// add함수의 return타입은 string도 아니고 number도 아닌 Combinable이기 때문에,
// string을 인자에 넣었다고 해서 return값으로 string관련 메서드를 사용할 수 없음.
// as를 사용해서 형변환으로 처리해도 괜찮음.
// 그러나 함수오버로드를 사용해서 처리할 수도 있음
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("jks", "jkh");
result.split(" ");

// 선택적 체이닝 연산자
// 객체의 속성에 접근할 때, 우리가 그 객체에 속성이 존재하는지 여부를 확신할 수 없다면,
// 선택적 체이닝 연산자 `?`를 사용해서 안전하게 해당 객체의 속성에 접근할 수 있다.
const fetchedUserData = {
  id: "u1",
  name: "jks",
  job: { title: "student", description: "asdf" },
};
// ? 앞의 요소가 정의되지 않았다면 그 이후에 오는 요소에는 접근하지 않는다.
console.log(fetchedUserData?.job?.title);

// null 병합 연산자
// falsy 한 값들 중에서 null이나 undefined만 걸러내주는 연산자이다.
const userInput = "";

const storedData = userInput ?? "Default";

console.log(storedData); // ''

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StateDate: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// // 인덱스 타입은 객체가 지닐 수 있는 속성에 대해 보다 유연한 객체를 생성할 수 있게 해준다.
// // 아래처럼 객체의 키와 벨류에 들어갈 타입만 지정해두면 얼마든지 타입에 맞는 속성들을 추가해도된다.
// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "유효한 이메일이 아닙니다.",
//   username: "문자로 시작해야합니다.",
// };
