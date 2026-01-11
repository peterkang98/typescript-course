// 클래스: 객체를 만드는 틀
//  - 클래스명은 대문자로 시작하는게 관례
//  - 클래스 안에서는 각 메소드를 쉼표(,)로 구분하지 않음

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메소드
  study() {
    console.log("공부 중...");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

// 클래스로 만든 객체 = 인스턴스
let studentA = new Student("강동현", "A+", 27);
studentA.study();
studentA.introduce();


class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

let developer = new StudentDeveloper("강동현", "A", 27, "Java");
developer.programming();