// 구조적 타입 시스템: 객체의 구조(프로퍼티, 메소드)를 기준으로 타입을 정의

// 객체 리터럴 타입: 객체의 모든 프로퍼티들의 타입까지 정의
let user: {
  id?: number; // 키에 ?가 붙으면 optional property가 됨(value가 없어도 OK, 하지만 있으면 number 타입이여야 함)
  name: string
} = {
  id: 1,
  name: "강동현"
}

console.log(user.id);

user = {
  name: "강희수"
}

let config: {
  readonly apiKey: string;
} = {
  apiKey: "abc1234",
};

// config.apiKey = "hacked"; // 읽기 전용이라서 할당 불가능