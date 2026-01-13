/**
 * 분산적인 조건부 타입
 *
 * 조건부 타입의 타입 변수에 Union 타입을 할당하면 분산적인 조건부 타입으로 업그레이드됨
 * 타입 변수에 할당한 Union 타입 내부의 모든 타입이 분리되어서 평가된 후 다시 유니온 타입으로 묶음
 *
 * 분산적인 조건부 타입으로 작동하지 않기를 원하면,
 * 그냥 [T] extends [number] 처럼 대괄호를 붙이면됨
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// number | string 타입은 number의 슈퍼타입이므로 조건부 타입의 결과로 number가 반환될것 같지만
// number | string 타입이 반환 됨 ???
let c: StringNumberSwitch<number | string>;

// 그 이유는 유니온 타입은 하나씩 타입을 다 분리해서 T에 대입하고, 그 결과들을 다시 유니온함.
// 즉, StringNumberSwitch<number> | StringNumberSwitch<string> 이런식으로


// 실용적인 예제
// 특정 유니온 타입에서 특정 타입만 없애기
type Exclude<T, U> = T extends U ? never : T;

// number | boolean
type A = Exclude<number | string | boolean, string>

// Exclude<number, string> -> number
// Exclude<string, string> -> never
// Exclude<boolean, string> -> boolean

// number | never | boolean -> number | boolean
// never는 공집합이므로 다른 타입과 합집합을 하면 없어짐


// 특정 유니온 타입에서 특정 타입만 남기고 나머지는 없애기
type Extract<T, U> = T extends U ? (U extends T ? T : never) : never;

type B = Extract<number | string | boolean, string>