/* // 인덱스 타입은 객체가 지닐 수 있는 속성에 대해 보다 유연한 객체를 생성할 수 있게 해준다.
// 아래처럼 객체의 키와 벨류에 들어갈 타입만 지정해두면 얼마든지 타입에 맞는 속성들을 추가해도된다.
interface ErrorContainer {
    [prop: string]: string;
  }
  
  const errorBag: ErrorContainer = {
    email: "유효한 이메일이 아닙니다.",
    username: "문자로 시작해야합니다.",
  }; */
