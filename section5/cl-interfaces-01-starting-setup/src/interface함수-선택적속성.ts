// 함수도 객체이기 때문에 함수 또한 인터페이스를 통해 구조를 설정할 수 있다.
// type AddFn = (a: number, b: number) => number;
// 인터페이스 이름으로 설정한 중괄호 안에 익명함수와 그에대한 리턴타입을 설정해주면 된다.
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// 인터페이스나 클래스에서 속성이나 메서드 뒤에 ? 를 붙여서 해당 속성이나 메서드가 반드시 필요하지 않음을 나타낼 수 있다.
// 매개변수 뒤에 ?를 붙이거나 = 로 기본값을 설정해줘서 해당 매개변수가 반드시 필요하지 않음을 나타낼수도있다.
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there - I am");

// 인터페이스는 JS 에서 지원하지 않기때문에 JS로 컴파일될때 완전히 무시된다.
// TS를 통한 개발 전용기능이라고 생각하면된다.
