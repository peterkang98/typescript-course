/**
 * 접근 제어자
 *  - public: 기본 접근 제어자, 어디서든 접근 가능
 *  - private: 해당 클래스 내에서만 접근 가능.
 *    - 외부에서는 읽지도 못 함
 *    - 해당 클래스의 자식 클래스도 접근 불가
 *  - protected: 해당 클래스 + 자식 클래스 내에서는 접근 가능
 *
 *  - 생성자의 매개변수에 접근 제어자를 명시하면 자동으로 필드 선언 + 값 초기화를 해줌 (this.변수명 = 변수명; 을 안 써도 됨)
 */

class Employee {
  // 필드
  // (생성자에서 접근 제어자를 명시했기 때문에 생략 가능)

  // 생성자
  // (접근 제어자를 명시했기 때문에 변수 초기화도 자동으로 해줌)
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employeeA = new Employee("강동현", 27, "개발자");