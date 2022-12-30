/* // 클래스 기본
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe(); // Department: Accounting

// accountingCopy 객체의 describe이라는 키에 accounting 객체의 describe함수를 할당한 것.
const accountingCopy = { describe: accounting.describe };

// describe메서드의 내부의 this.name때문에 name은 accounting 객체가 아닌 accountingCopy 객체에서 찾게 된다.
// accountingCopy객체에는 name이라는 키 값이 없기때문에 undefined가 출력된다.
// 이렇게 this가 클래스에서 생성된 인스턴스를 바라보는게 아니라 다른 객체를 바라보게 되어서 undefined가 나타날때,
// TS에서 오류를 출력시키고 싶다면,
// 해당 클래스의 메서드의 매개변수자리에 `this: 클래스이름`으로 명시해주면된다.
accountingCopy.describe(); // Department: undefined
// accountingCopy에 name 키를 추가한다면 오류가 사라지게 된다.
 */
