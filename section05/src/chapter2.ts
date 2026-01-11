/**선언 병합
 * 인터페이스는 동일한 이름으로 중복 선언 가능
 * 선언한 모든 프로퍼티들이 합쳐짐
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "Peter",
  age: 27
}