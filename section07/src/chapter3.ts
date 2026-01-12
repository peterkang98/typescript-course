/**
 * 제네릭 인터페이스
 * -> 제네릭 함수와 달리 타입으로 사용할 때 어떤 타입이 들어올지 명시해야 함
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 함수와 달리 타입으로 사용할 때 어떤 타입이 들어올지 명시해야 함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0
};

/**
 * 인덱스 시그니처를 사용한 제네릭 인터페이스
 */

interface Map<V> {
  [key: string]: V;
}

let strMap: Map<string> = {
  key: "value"
};

let boolMap: Map<boolean> = {
  key: true
};

/**
 * 제네릭 타입 별칭 (Type)
 * -> 제네릭 함수와 달리 타입으로 사용할 때 어떤 타입이 들어올지 명시해야 함
 */

type Map2<V> = {
  [key: string]: V;
};

let strMap2: Map2<string> = {
  key: "hello"
}

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 *
 * 타입 좁히기를 위한 조건문 없이 그냥 어떤 타입만 받을지를 제네릭 타입 변수로 해결
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 타입 좁히기를 위한 조건문 없이 그냥 어떤 타입만 받을지를 제네릭 타입 변수로 해결
// 어차피 Student로 타입이 제한되었기 때문에 타입 좁히기 조건문이 필요 없음
function goToSchool(user: User<Student>) {
  console.log(`${user.profile.school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "강동현",
  profile: {
    type: "developer",
    skill: "TypeScript"
  }
}

const studentUser: User<Student> = {
  name: "강동현",
  profile: {
    type: "student",
    school: "서경대"
  }
}

