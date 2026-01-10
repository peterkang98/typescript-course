/**
 * 기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2; // 업 캐스팅(자식 -> 부모)이여서 가능
let animal = {
    name: "기린",
    color: "yellow"
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};
// Animal이 슈퍼타입, Dog가 서브타입
animal = dog; // 업 캐스팅
// dog = animal; // 다운 캐스팅 (컴파일 오류: breed 프로퍼티가 없는건 Dog 타입이 될 수 없기 때문에)
/**
 * 초과 프로퍼티 검사 (Excess Property Checking)
 * 변수의 값을 객체 리터럴로 초기화하거나, 함수의 매개변수로 객체 리터럴을 전달할 때 발동.
 * 객체 타입에 정의하지 않은 프로퍼티를 작성할 수 없게 막는 검사
 */
// 객체 리터럴 선언
let dog2 = {
    name: "돌돌이",
    color: "brown",
    // breed: "진도"
};
// 검사를 피하는 방법 = 올바른 서브 타입의 변수에 담았다가 변수를 사용해서 할당/전달
let dog3 = dog;
function func(animal) { }
func({
    name: "돌돌이",
    color: "brown",
    // breed: "진도"
});
func(dog);
export {};
