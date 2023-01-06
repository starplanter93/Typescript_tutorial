/* // 여러 데코레이터들의 실행 순서
function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - person")
// 여러개의 데코레이터가 들어가 있을 때, 실행순서가 중요하다.
// 콘솔을 통해 확인해보면,
// 우선 데코레이터 팩토리 함수는 위에서 아래로 순서대로 실행이 된다.
// 하지만 팩토리에서 리턴되는 데코레이터 함수는 아래에서 위로 실행이 된다.
// Logger factory -> Template factory -> Template deco -> Logger deco 순
@Logger("logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "jks";

  constructor() {
    console.log("Createing person object...");
  }
}

const pers = new Person();

console.log(pers);
 */
