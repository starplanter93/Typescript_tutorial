/* // 형변환
// 형 변환은 타입스크립트가 직접 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려주는 역할을 한다.
// 이는 dom에 접근할 때, 자주 발생하는데, 타입스크립트가 HTML 파일을 보고 분석하지 못하기 때문이다.

// p태그가 HTMLParagraphElement를 잘 잡음
// const paragraph = document.querySelector("p");

// user-input id가 어디에 할당되어 있는지 알지 못함.(HTMLElement)
// const userInput = document.getElementById("user-input")!;
// 그래서 아래와 같은 오류 발생.
// userInput.value = "Hi there!"; // 'HTMLElement' 형식에 'value' 속성이 없습니다.

// 형변환을 통해 우리가 선택한 id를 지닌 htmlelement가 input이라는 것을 알려줘야한다.
// 형변환은 두 가지 방법이 있다.
// 하나는 형변환하고자하는 위치 앞에 무언가를 추가하는 방법
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// 여기서 HTMLInputElement는 tsconfig의 dom lib에 포함되어 있으므로 전역적으로 사용가능하다.
// 그러나 <>를 사용하는 방법은 react와 충돌할 가능성이 있다.
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
// userInput.value = "Hi there!";
// 이런 경우 as 를 사용하면된다.
// !는 느낌표 앞의 표현식을 null로 반환하지 않는다고 타입스크립트에게 알려주는 표시이다.
// 그런데 형변환기능은 !가 하는 역할도 같이 수행하기 때문에, 이 둘을 동시에 쓸 필요가 없다.
// 만약 표현식이 null로 반환될 가능성이 있다면, !를 제거하고 if 체크를 수행하는 것이 바람직하다.
// !를 사용하는 것이 아니라, if 체크를 활용하게되면 해당 html요소는 null값이 될 수 있다는 의미이기 때문에,
// 요소에 바로 as로 형변환을 하는 것이 아니라, if체크를 통과한 요소에 as로 형변환을 해주어야한다.
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
 */
