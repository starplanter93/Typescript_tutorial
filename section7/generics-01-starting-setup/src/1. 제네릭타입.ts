/* // 제네릭 타입
// 다른 타입과 연결되는 타입 타입뒤에 오는 <>로 제네릭타입을 확인할 수 있다.
// 제네릭 타입을 설정하는 것으로, TS에게 해당 변수에 설정된 타입과 그 타입과 연결된 타입이 무엇인지 알게하여
// 연결된 타입으로 작업할 때, TS의 여러 기능을 활용할 수 있다.
const names: Array<string> = []; // string[]
// names의 0번째 요소가 string임을 TS가 알고있기 때문에, split메서드를 써도 오류가 출력되지 않는다.
// 반대로 string이 지원하지 않는 메서드를 쓰려하면 오류가 출력될 것이다.
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("adsf");
  }, 2000);
});

// 마찬가지로 promise타입이 string 타입을 반환한다고 제너릭 타입을 통해 명시해줬기 때문에
// TS가 promise로 반환되는 data가 string임을 인식하고 split메서드를 허용해준다.
promise.then((data) => {
  data.split(" ");
});
 */
