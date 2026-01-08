// type alias (타입 별칭): 기존 타입에 이름을 붙이는 것
// 복잡한 타입을 재사용하거나 의미를 명확히 하기 위해 사용
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "강동현",
  nickname: "pk9988",
  birth: "1998-11-16",
  bio: "hello world",
  location: "서울시"
}

// 인덱스 시그니처: key와 value의 규칙을 기준으로 객체의 타입을 정의
type CountryCodes = {
  // 이 객체는 문자열 키를 가지며, 값도 문자열임을 나타냄
  [key: string] : string;
  // 이 객체는 반드시 Korea라는 키가 있어야하고 문자열 value를 가져야 함
  Korea: string;
}

let countryCodes: CountryCodes = {
  Korea: "kr",
  Japan: "jp",
  UnitedState: "us"
}