const employee = {
  name: "강동현",
  age: 27,
  position: "developer",
  work() {
    console.log("일하는 중");
  },
}

/**
 * 타입스크립트에서 클래스는 자바스크립트 클래스로 취급되면서 동시에 타입으로도 취급됨
 */
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일하는 중");
  }
}

const employeeA = new Employee("강동현", 27, "개발자");
console.log(employeeA);


// 클래스가 타입으로 활용되는 경우
const employeeB: Employee = {
  name: "홍길동",
  age: 21,
  position: "Secretary",
  work() {
    console.log("일하는 중");
  },
}