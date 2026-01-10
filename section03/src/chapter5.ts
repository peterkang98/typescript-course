/**
 * 타입 추론 (점진적 타입 시스템)
 * 명시적으로 타입을 지정할 수 있고, 지정 안 한다면 컴파일러가 알아서 추론
 * 추론할 때 기본적으로 더 범용적으로 사용할 수 있도록 넓은 타입으로 추론해줌 (타입 넓히기)
 */

let a: number = 10;

let b = 10;   // let을 쓰면 number 타입으로 추론 (타입 넓히기: 더 범용적으로 사용할 수 있도록 넓은 타입으로 추론하는 과정)
const constB = 10;    // const를 쓰면 number literal 타입이 됨
let c = {
  id: 1,
  name: "Peter"
};
let arr = [1, "hello", true];

// 단 함수의 매개변수는 초기값이 어떤게 들어올지 모르기 때문에 추론 불가
// function func(param) {} // 컴파일 오류

// 함수의 매개변수로 기본값이 있으면 추론 가능
function fun(param = "hello") {}

// 함수의 리턴 타입은 반환값을 기준으로 추론 가능
function func() {
  return "hello";
}


// 초기값을 지정 안 한다면? -> 암묵적 any 타입 (즉, 타입이 진화할 수 있음)
let d;
d = 1;  // 하지만 값을 할당하는 순간 타입이 진화함 (any -> number)
d.toFixed(1);
// d.toUpperCase() // 컴파일 오류 (문자열의 메소드를 쓸 수 없음)

d = "hello" // 다른 타입의 값을 할당하면 또 타입이 진화함 (number -> string)
d.toUpperCase();

// 상수는 자동으로 리터럴 타입이 됨. (값이 절대 안 바뀌니까)
const num = 10;
const str = "hello";
