/**
 * 제네릭 (일반적인, 포괄적인)
 */

// 제네릭 함수: 모든 타입에 두루두루 쓸 수 있는 범용적인 함수
// 함수 이름 뒤에 타입 변수 <T>를 선언해야 함
//
// 타입 변수:
//   - 일반 변수처럼 상황에 따라 다른 타입을 담을 수 있는 변수
//   - 실제 함수가 호출될 때 인수의 타입을 사용해서 타입을 결정함
function func<T>(val: T): T {
  return val;
}

let num = func(10);
num.toFixed(1);

let str = func("hello");
str.toUpperCase();

// 함수를 호출할 때 명시적으로 타입 변수에 들어갈 타입을 지정할 수도 있음
// 없었다면 컴파일러가 number[] 타입으로 추론했겠지만, 튜플로 지정해서 반환 값도 튜플 타입으로 받음
let tup = func<[number, number, number]>([1, 2, 3]);