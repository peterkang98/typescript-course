// enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "강동현",
    role: Role.ADMIN // 관리자
};
const user2 = {
    name: "강희수",
    role: Role.USER // 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST // 게스트
};
console.log(user1, user2, user3);
export {};
