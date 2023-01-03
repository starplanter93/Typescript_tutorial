/* // 제네릭 유틸리티 타입
// TS에만 있는 타입.
// 파셜 타입
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }
  
  // 어떤 객체를 리턴하는 함수를 다음과 같이 만들 수도 있지만,
  // function createCourseGoal(title: string, description: string, date: Date) {
  //   return { title, description, completeUntil: date };
  // }
  
  // 유효성검사 등을 추가하기 위해 아래와 같이 구성할 수 있다.
  // function createCourseGoal(
  //   title: string,
  //   description: string,
  //   date: Date
  // ): CourseGoal {
  //   let courseGoal: CourseGoal = {};
  //   courseGoal.title = title;
  //   courseGoal.description = description;
  //   courseGoal.completeUntil = date;
  //   return courseGoal;
  // }
  // 하지만 당연히 `'{}' 형식에 'CourseGoal' 형식의 title, description, completeUntil 속성이 없습니다.`
  // 이런 에러가 발생하고, 이를 해결하기 위해서 Partial 타입을 써야한다.
  // 파셜 타입은 지정한 타입의 모든 속성을 선택적인 타입으로 바꿔준다.
  function createCourseGoal(
    title: string,
    description: string,
    date: Date
  ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // courseGoal이 파셜타입이기 때문에 형변환으로 원래 파입으로 돌려줘야한다.
    return courseGoal as CourseGoal;
  }
  
  // Readonly타입
  // 어떤 데이터가 수정되면 안될 때 사용하는 타입.
  const names: Readonly<string[]> = ["jks", "jkh"];
  // names.push("123");
  // Error: 'readonly string[]' 형식에 'push' 속성이 없습니다.
   */
