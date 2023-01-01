/* type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 함수 오버로드
// add함수의 return타입은 string도 아니고 number도 아닌 Combinable이기 때문에,
// string을 인자에 넣었다고 해서 return값으로 string관련 메서드를 사용할 수 없음.
// as를 사용해서 형변환으로 처리해도 괜찮음.
// 그러나 함수오버로드를 사용해서 처리할 수도 있음
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("jks", "jkh");
result.split(" ");
 */
