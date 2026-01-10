/**
 * 함수 오버로딩
 * 같은 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 일단 모든 매개변수는 넘버타입
 * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
 * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 */
// 함수 구현체 시그니처
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a + 20);
    }
}
func(1);
func(1, 3, 4);
