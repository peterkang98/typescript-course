/**
 * keyof 연산자
 * 객체 타입의 모든 public 프로퍼티의 이름들을 유니온한 타입으로 추출
 * 나중에 객체 타입의 프로퍼티가 바뀌어도 코드를 수정 안 해도 됨
 */

interface Person {
  name: string;
  age: number;
}

// keyof Person -> "name" | "age"
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "강동현",
  age: 27
}

getPropertyKey(person, "name");

// 타입스크립트에서는 타입을 정의할 때 typeof 연산자를 쓰면 어떤 변수의 타입을 추출하는 용도로 사용 가능
const person2 = {
  name: "강동현",
  age: 27
}

// Person2의 타입은 {name: string, age: number}
type Person2 = typeof person2;

// keyof typeof person2 -> 변수 person2에서 타입을 추출 {name: string, age: number}
// 타입을 기반으로 keyof 연산자가 실행됨 -> "name" | "age"
function getPropertyKey2(person: Person2, key: keyof typeof person2) {
  return person[key];
}