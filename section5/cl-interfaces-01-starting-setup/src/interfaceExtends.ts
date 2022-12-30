/* interface Named {
  readonly name: string;
}

// extends를 통해 클래스 상속하듯 인터페이스를 결합시킬 수 있다.
// 클래스 상속과 달리 , 를 통해 여러 인터페이스를 결합시키는 것도 가능하다.
interface Greetable extends Named {
  greet(phrase: string): void;
}

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

let user1: Greetable;

user1 = new Person("jks");

user1.greet("Hi there - I am");
 */
