/* // 인터페이스는 객체의 구조를 의미한다.
// interface 키워드로 생성. JS에는 없는 기능
// 클래스와 달리 객체의 청사진으로 사용하는 것이 아니라, 사용자 정의 타입으로 사용할 뿐이다.
interface Person1 {
  // 인터페이스에서 다른 제어자는 사용할 수 없지만, readonly는 사용할 수 있다.
  // 이것은 type키워드를 사용해 정의한 사용자정의타입에서도 마찬가지다.
  // 인터페이스에서 readonly를 설정하면 해당 인터페이스의 속성을 받는 클래스에서도 그 속성은 readonly가 된다.
  // TS가 인터페이스를 통해 그 속성이 readonly라는 것을 자동으로 추론하기 때문이다.
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

// 인터페이스를 타입처럼 사용 가능.
let user: Person1;

user = {
  name: "jks",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Hi there - I am");

// 인터페이스와 type 키워드를 이용해서 정의한 사용자 정의 타입은 매우 비슷하다.
// type Person1 = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// 인터페이스는 객체의 구조를 설명할 때만 사용한다.
// 객체의 구조를 설명할 때 사용자 정의타입보다 인터페이스를 자주 사용하는 이유는
// 인터페이스를 클래스가 지켜야 할 약속처럼 사용할 수 있기 때문이다.
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// implements 키워드로 클래스의 인터페이스를 지정해줄 수 있다.
// 상속과 달리 , 를 써서 여러개의 인터페이스를 지정할 수도 있다.
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
// 즉 인터페이스는 구체적인 구현이 아니라, 서로 다른 클래스 간의 기능을 공유하기 위해 사용된다.
// 추상 클래스하고도 비슷한데, 인터페이스는 세부사항이 전혀 없지만,
// 추상클래스는 우리가 덮어써야 했던 부분(abstract)과 구체적인 부분이 혼재되어있다.

let user1: Greetable;

user1 = new Person("jks");

user1.greet("Hi there - I am");
 */
