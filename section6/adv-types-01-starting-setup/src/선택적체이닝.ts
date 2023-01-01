/* // 선택적 체이닝 연산자
// 객체의 속성에 접근할 때, 우리가 그 객체에 속성이 존재하는지 여부를 확신할 수 없다면,
// 선택적 체이닝 연산자 `?`를 사용해서 안전하게 해당 객체의 속성에 접근할 수 있다.
const fetchedUserData = {
  id: "u1",
  name: "jks",
  job: { title: "student", description: "asdf" },
};
// ? 앞의 요소가 정의되지 않았다면 그 이후에 오는 요소에는 접근하지 않는다.
console.log(fetchedUserData?.job?.title); */
