/**
 * Exclude<T, U>
 *
 * -> T에서 U를 제거한 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1 단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2 단계
// string |
// never

// 최종적으로는
// string
type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출한 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;  // boolean

/**
 * ReturnType<T>
 *   함수의 반환값 타입을 추출한 타입
 */

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number

// ReturnType<T> 직접 구현
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// 해설
// 타입 T로 함수 타입만 허용. 반환값의 타입 + 매개변수의 개수와 타입은 상관 없음
// T extends (...args: any) => infer R 조건식   =   T로 들어온 함수 타입이 (...args: any) => infer R 함수 타입의 서브타입이 되기 위한 R 타입을 컴파일러가 자동 추론
// 예시 T로 () => string이 들어오면 R은 자동으로 string 타입을 가짐