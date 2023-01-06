/* // 엑세서, 메서드, 매개변수 데코레이터

function Log(target: any, propertyName: string | Symbol) {
  console.log("속성 데코레이터");
  console.log(target, propertyName);
}

// 엑세서 데코레이터는 인자를 3개 받는다.
// 각각 프로토타입, 이름, 프로퍼티 디스크립터이다.
// 프로퍼티 디스크립터는 콘솔에 다음과 같이 찍힌다 : {get: undefined, enumerable: false, configurable: true, set: ƒ}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("엑세서 데코레이터");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// 메서드 데코레이터는 엑세서 데코레이터와 매우 비슷하다.
// 프로퍼티 디스크립터는 다음과 같다 : {writable: true, enumerable: false, configurable: true, value: ƒ}
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("메서드 데코레이터");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// 매개변수 데코레이터도 target은 같다.
// name은 매개변수의 이름이아니라 매개변수가 속해있는 메서드의 이름이다.
// position은 매개변수가 몇 번째 인덱스인지를 나타낸다.
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("메서드 데코레이터");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// 데코레이터는 모두 메소드를 불러내거나 프로퍼티를 쓰거나, 클래스의 인스턴스가 실행될 때 작동하지 않는다.
// 데코레이터는 단지 클래스가 정의 될 때, 뒤에서 셋업 작업을 해준다.
// 그러므로 데코레이터는 메타프로그래밍에 주로 사용된다.
 */
