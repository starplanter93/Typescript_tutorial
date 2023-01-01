// 타입가드
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

function add(a: Combinable, b: Combinable) {
  // 아래와 같은 조건을 타입가드라고 한다.
  // 타입가드는 클래스에서 어떤 속성이나 메서드를 사용하려 할 때, 그것이 존재하는지 확인하거나,
  // 타입을 사용하기 전에 이 타입으로 어떤 작업을 수행할 수 있는지 확인하는 개념이나 방식을 나타내는 용어이다.
  // 아래 코드는 유니언 타입으로 인해 발생하는 에러를 막아주고,
  // 런타임 시 코드가 정확하게 작동하게 해준다.
  // 타입가드의 조건은 타입스크립트 뿐만아니라 자바스크립트에서도 유효한 구문으로 작성해야한다.
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // 객체 내부의 요소를 확인하고 싶다면 자바스크립트 문법인 `in`을 사용할 수 있다.
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StateDate: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() }); //Name: Manu, StateDate: Sun Jan 01 2023 12:20:15 GMT+0900 (한국 표준시)

// 클래스에서 타입가드를 쓰는 방법
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// // 아래와 같이 객체 할때 처럼 `in`으로 검사를 해줄 수도 있음.
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

// 하지만 아래처럼 `instanceof`를 사용하는 것이 오타 방지를 위해 더 좋음
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // instanceof는 자바스크립트의 문법.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1); // Driving...
useVehicle(v2); // Driving a truck..., Loading cargo...1000
