/* class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

// 제네릭 클래스로 클래스를 만들면 속성의 타입을 동적으로 지정해 줄 수 있다.
const textStorage = new DataStorage<string>();
// textStorage.addItem(10);
// Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
textStorage.addItem("jks");
textStorage.addItem("jkh");
textStorage.removeItem("jks");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// 그런데 참조자료형을 이용한 작업을 할 때, 원치않은 결과가 나타날 수 있다.
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "jks" });
objStorage.addItem({ name: "jkh" });

objStorage.removeItem({ name: "jks" });
console.log(objStorage.getItem()); //[{name: 'jks'}]
// 분명히 {name: jks}객체를 지우려했는데 엉뚱한 {name: jkh} 객체가 지워졌다.
// 객체가 참조 자료형이기 때문에, addItem으로 추가된 {name: jks}객체와
// removeItem의 인자로 들어간 {name: jks}객체는 서로 다른 객체이다. (서로 다른 주소값을 가지기 때문)
// 따라서 removeItem의 indexOf는 -1을 반환하게되고 removeItem메서드는 우리가 원하는 방식으로 작동하지 않는다.
// 그러므로 if 검사를 활용해서 잘못 작동하지 않도록 제한을 걸어주고
// 우리가 추가하고 제거하려는 객체를 변수에 할당해서 그 변수를 통해 작업하는 것이 좋다.
class DataStorage1<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item)) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const objStorage1 = new DataStorage1<object>();
const name1 = { name: "jks" };
objStorage1.addItem(name1);
objStorage1.addItem({ name: "jkh" });

objStorage1.removeItem(name1);
console.log(objStorage1.getItem());

// 아니면 어차피 클래스의 메서드가 원시자료형으로만 올바르게 작동하기 때문에,
// 아예 T를 원시자료형만 받도록 설정하는것이 좋을 수도 있다.
// < T extends string | number | boolean >
 */
