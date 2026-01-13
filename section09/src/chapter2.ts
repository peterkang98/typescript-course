/**
 * infer
 *
 * 조건부 타입 내에서 특정 타입을 추론하는 기능
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>  //string
type B = ReturnType<FuncB>  //number
// "() => number extends () => infer R"이 true가 되기 위한 R 타입을 자동 추론해줌


// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;   // number
type PromiseB = PromiseUnpack<Promise<string>>;   // string

