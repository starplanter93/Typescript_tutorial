/* // 상속
abstract class Department {
  static fiscalYear = 2022;
  // private 제어자를 사용하면 클래스 외부 뿐만아니라, 상속받는 클래스들에서도 해당 속성에 접근할 수 없다.
  // 만약 클래스 외부에서 속성에 접근하는 것은 막고, 상속받는 클래스에서는 접근가능하도록 하고싶다면
  // `protected` 제어자를 사용하면 된다.
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // 클래스 내에서 정적 속성이나 메서드에 접근하고 싶다면, this를 쓰는 것이아니라 해당 클래스의 이름으로 접근해야한다.
    // 왜냐하면 this는 클래스를 기반으로 생성된 인스턴스를 참조하기 때문이다.
    // 그러므로 클래스의 인스턴스와 완전히 분리되어있는 정적 속성이나 메서드는 this로 접근할 수 없다.
    console.log(Department.fiscalYear);
  }

  // 정적 메서드나 속성을 추가하려면 static 제어자를 사용하면 된다.
  // 정적 메서드나 속성은 해당 클래스의 인스턴스에서 접근할 수 없다.
  // 그러므로 정적으로 지정된 속성이나 메서드는 new 키워드로 클래스 이름을 호출하지 않고, 직접 클래스에 접근한다.
  // JS의 Math 생성자 함수가 대표적인 예이다. Math.PI -> 정적 속성, Math.pow() -> 정적 메서드

  static createEmployee(name: string) {
    return { name: name };
  }

  // 부모 클래스에서 어떤 속성이나 메서드의 기본값을 주지 않으면서,
  // 상속되는 클래스들에 해당 속성이나 메서드를 반드시 갖고 있게 설정하고 싶다면,
  // 부모 클래스를 추상 클래스로 반들고 해당 속성이나 메서드에 `abstract` 키워드를 붙이면 된다.
  // 추상 메서드의 경우 중괄호를 지우고 리턴타입까지 명시해주면 된다.
  // 추상 클래스는 인스턴스화 될 수 없다.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformaiton() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// `extends` 키워드를 통해 클래스 상속을 할 수 있다.

class ITDepartment extends Department {
  adimins: string[];
  constructor(id: string, public admins: string[]) {
    // 부모 생성자의 속성을 물려받고 싶을 때에는 super 키워드를 사용한다.
    // 여기서 id의 경우엔 ITDepartment 클래스에서 새로 지정해주고 싶었기 때문에
    // 생성자의 매개변수에 id를 추가하고 super에 id 변수를 넣어주었지만,
    // name의 경우엔 하드코딩하고 싶었기 때문에
    // 생성자의 매개변수에 넣지 않고 super에 'IT'로 하드코딩해주었다.
    super(id, "IT");
    this.adimins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // 싱글턴 패턴 구현을 위해 private static 속성에 클래스 자체를 타입으로 지정해준다.
  private static instance: AccountingDepartment;

  // 게터는 항상 무언가를 반환해야한다. 그러므로 리턴문이 반드시 필요.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // 세터도 게터와 비슷하지만 리턴문이 필요없고 매개변수를 받는다.
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("유효한 값을 넣어주세요.");
    }
    this.addReport(value);
  }

  // 싱글턴 패턴
  // 특정 클래스의 인스턴스를 단 하나만 갖게 하는 것
  // 정적 메서드나 속성을 사용할 수 없거나, 사용하지 않고자 하는 동시에,
  // 클래스를 기반으로 정확히 하나의 객체만 자길 수 있도록 하고자 하는 경우 사용
  // 싱글턴 패턴으로 만들고자 하는 클래스의 생성자 앞에 private 키워드를 붙여서 private 생성자로 만들면 된다.
  // private 생성자로 만들면 new를 통해 클래스를 생성할 수 없다.
  // private때문에 클래스 외부에서 접근할 수 없고, 내부에서만 접근 가능하기 때문이다.
  // 그렇다면 생성자로 객체를 만들 수 없는데 내부에 접근하려면 어떻게 해야할까?
  // 정적 메서드를 통해 클래스에 바로 접근하면 된다.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    // 지금 이 클래스의 인스턴스가 있다면 그 인스턴스 자체를 반환하도록 하고,
    // 없다면 인스턴스를 새로 만들어서 this.instance에 할당하고 리턴.
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "jks") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("jks");
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment("d1", ["jks"]);

IT.addEmployee("jks");
IT.addEmployee("jkh");

IT.describe(); // IT Department - ID: d1
IT.printEmployeeInformaiton(); // 2, ['jks', 'jkh']

console.log(IT); // ITDepartment {id: 'd1', name: 'IT', employees: Array(2), admins: Array(1), adimins: Array(1)}

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2); // 싱글턴 패턴을 이용해 만든 인스턴스는 모두 같다는 것을 보여줌.

// 세터를 불러올 때에는 속성처럼 접근한다. 그러므로 세터에 설정된 매개변수에 값을 넣고싶다면 변수 선언하듯이 한다.
accounting.mostRecentReport = "123";
accounting.addReport("Error");
// 게터를 불러오기 위해선 속성처럼 접근한다. 함수나 메서드처럼 ()를 사용하지 않음.
console.log(accounting.mostRecentReport);

accounting.addEmployee("jks");
accounting.addEmployee("jkh");

accounting.printReports(); // ['Error']
accounting.printEmployeeInformaiton(); // 1, ['jkh']
accounting.describe();
 */
