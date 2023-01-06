/* // 속성 데코레이터

// 속성 데코레이터는 두개의 인자를 받는다
// target은 오브젝트의 프로토타입이 된다. 만약 속성이 static이라면 타겟은 생성자 함수에 대신 적용된다.
// 그러므로 오브젝트가 어떤 구조가 될지 모른다면, any로 지정해준다.
// propertyName은 속성의 이름이 된다.
// 속성 데코레이터는 클래스의 속성이 정의되었을 때 실행된다.
function Log(target: any, propertyName: string | Symbol) {
  console.log("속성 데코레이터");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("양수로 입력해주세요.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
 */
