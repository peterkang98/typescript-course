interface Person {
  name: string;
  age?: number;
  sayHi: () => void; // 함수 타입 표현식
  sayHello(): void; // 메소드 시그니처
}

const person: Person = {
  name: "강동현",
  age: 27,
  sayHi: () => console.log("hi"),
  sayHello() {
    console.log(`hello my name is ${this.name}`);
  }
}

type newType = number | Person;