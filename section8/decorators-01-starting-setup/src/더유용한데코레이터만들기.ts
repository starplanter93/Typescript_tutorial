/* // 더 유용한 데코레이터 만들기
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// function WithTemplate(template: string, hookId: string) {
//   // TS에게 존재는 알지만 필요없으니 쓰지 않겠다고 알려주는 '_'
//   return function (_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - person")
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
