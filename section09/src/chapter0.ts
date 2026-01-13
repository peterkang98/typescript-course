/**
 * 조건부 타입
 */

// 삼항 연산자
// number가 string을 확장하는 타입(서브 타입)이라면 string을 반환, 아니면 number를 반환
// 그러므로 A는 number 타입을 갖게 됨
type A = number extends string ? string : number;

type ObjA = {
  a: number
}

type ObjB = {
  a: number,
  b: number
}

type B = ObjB extends ObjA ? number : string; // B는 number 타입

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // varA는 string 타입

// 오버로드 시그니처
// 제네릭으로 “입력 타입”을 잡고, 조건부 타입으로 “그 입력 타입에 따라 반환 타입을 결정”
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any){
  if (typeof text === "string"){
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

const result = removeSpaces("hi my name is Peter");
result.toUpperCase();

const result2 = removeSpaces(undefined);
const result3 = removeSpaces(54);
