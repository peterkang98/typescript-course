/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 좁힘
 */
function func(value) {
    // 타입 체크를 해야만 해당 타입의 메소드를 호출할 수 있음
    if (typeof value === "number") { // 타입 가드
        // 타입 체크를 했기 때문에 이 중괄호 안에서는 변수가 number 타입임을 보장할 수 있음
        // 좁은 타입임을 보장할 수 있다면, 컴파일러가 자동으로 타입을 좁혀줌
        console.log(value.toFixed());
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        console.log(value.getTime());
    }
    else if (value && "age" in value) { // Person은 클래스가 아니라 타입이므로 instanceof를 쓸 수 없음
        // 대신 null이 아닌지 확인하고 Person 타입만 갖는 프로퍼티가 있는지 체크해주면 됨
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
export {};
