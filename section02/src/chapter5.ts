// enum 타입 (enum은 .js로 컴파일 후에도 없어지지 않음)
enum Role {
  ADMIN,
  USER,
  GUEST
}

enum Language {
  korean = "ko",
  english = "en",
  japanese = "jp",
}

const user1 = {
  name: "강동현",
  role: Role.ADMIN       // 0 관리자
}

const user2 = {
  name: "강희수",
  role: Role.USER       // 1 일반 유저
}

const user3 = {
  name: "아무개",
  role: Role.GUEST       // 2 게스트
}

console.log(user1, user2, user3);
console.log(Role);