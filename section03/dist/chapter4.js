/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */
/**
 * 1. 합집합 - Union 타입 (|)
 */
// a는 문자열, 숫자, 불린 값 다 가질 수 있음
let a;
a = 1;
a = "hello";
a = true;
let arr = [1, "hello", true];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
/**
 * 2. 교집합 타입 (&) - Intersection 타입
 */
// variable은 자동으로 never 타입이 됨(공집합)
// 이유는 문자열 집합과 숫자 집합의 교집합은 존재하지 않기 때문 (대부분의 기본 타입들의 교집합은 never 타입이 됨)
let variable;
// Dog 타입과 Person 타입에 다 해당하려면 {name, color} 프로퍼티와 {name, language} 프로퍼티를 가져야 함
// 즉 {name, color, language} 프로퍼티를 모두 가져야 함
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
