/* // 제어자
class Department {
  // 아래처럼 class에 변수(속성)을 선언하고 생성자(constructor)에서 this로 초기화 하는 과정을 거치는 것이 정석이지만,
  // 그냥 바로 생성자의 매개변수에 제어자(옵션), 속성명, 타입을 지정해주는 것으로 선언과 초기화를 한번에 단축시켜서 할 수도 있다.
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformaiton() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("jks");
accounting.addEmployee("jkh");

// 아래와 같이 클래스의 메서드를 통해서가 아니라 직접적으로 employees속성에 요소를 추가할 수 있는데,
// accounting.employees[2] = "pdh";
// 클래스를 사용할 경우, 메서드를 통해서 수정하는 게 아니라 이렇게 외부에서 직접적으로 속성에 접근하는 것은 지양해야한다.
// 즉, 클래스를 통해 어떤 작업을 할 때, 방법을 하나로 통일시켜야 한다는 의미이다.
// 외부에서 클래스 내부에 접근하는 것을 막기 위해서는 `private` 키워드를 사용하면 된다.
// `private` 키워드는 `제어자` 라고 부르며, 클래스 내부의 속성이나 메서드에 모두 사용할 수 있다.
// private 의 반대되는 키워드는 `public` 이며 이는 기본값이라 일일이 추가해줄 필요는 없다.
// 하지만 private과 public은 자바스크립트가 알지 못하는 개념이며, TS에서 컴파일 시 오류가 나더라도,
// JS에선 오류가 나지 않는다.

// 수정하면 안되는 속성이 있다면 `readonly` 제어자를 사용하면된다. 이 제어자도 TS에서만 사용된다.

accounting.describe(); // Department (d1): Accounting
accounting.printEmployeeInformaiton(); // 2, ['jks', 'jkh']
 */
