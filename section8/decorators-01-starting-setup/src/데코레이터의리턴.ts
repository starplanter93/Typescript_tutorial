/* // 데코레이터의 리턴값
function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// 클래스 데코레이터 함수의 리턴에는 클래스를 반환해줄 수 있다.
// 여기서 반환된 클래스와 생성자함수는 기존 클래스와 그 생성자 함수를 기반(super())으로 한다.
// 하지만 기존 클래스와는 다른 새로운 클래스이다.
function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "jks";

  constructor() {
    console.log("Createing person object...");
  }
}

// const pers = new Person();

// console.log(pers);

// 메서드나 엑세서 데코레이터도 리턴에 새로운 프로퍼티 디스크립터를 추가할 수 있다.
// 매개변수나 속성 데코레이터도 리턴할수는 있지만 TS가 그것을 무시하기 때문에 의미가 없다.
function Log(target: any, propertyName: string | Symbol) {
  console.log("속성 데코레이터");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("엑세서 데코레이터");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

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

// 메서드 데코레이터의 리턴을 이용해 this 바인더 데코레이터 만들기
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
 */
