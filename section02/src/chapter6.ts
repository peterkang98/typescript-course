// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;       // any 타입의 값은 모든 변수에 다 넣을 수 있음 (never 타입 빼고)

// anyVar.toFixed(1);  // 모든 메소드도 호출 가능 (당연히 런타임에 오류 발생)


//
// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = () => {};
unknownVar = 1;
// num = unknownVar;       // any와 달리 unknown 타입의 변수의 값은 어떠한 변수에도 넣을 수 없음

// 컴파일 오류
// unknownVar++;          // + - * 등 연산 조차 할 수 없음
// unknownVar.toFixed(1)  // 어떠한 메소드도 호출 불가

// 단 typeof 조건식 안에서는 사용 가능 (타입 정제)
if (typeof unknownVar === "number") {
  num = unknownVar;
}