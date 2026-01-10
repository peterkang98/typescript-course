/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
 *
 * checklist
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 반환값 타입 호환?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;   컴파일 오류: 반환값 타입이 다운 캐스팅 될 수 없음


// 매개변수의 타입 호환?
// 1. 매개변수 개수가 같음
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (val) => {};
let d: D = (val) => {};

// c = d;   컴파일 오류: 업 캐스팅인데도 허용 안 됨?
d = c; // 반대로 다운 캐스팅인데 허용됨?
// 그 이유는 서브타입이 슈퍼타입보다 더 구체적이고(프로퍼티가 더 많음)
// 함수 안에서 슈퍼타입 매개변수로 서브타입만이 갖는 프로퍼티에 접근하려는 코드가 있을 수 있기 때문에 컴파일러가 허용을 안 함

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;  Animal 타입 매개변수로 Dog 타입의 color 프로퍼티를 접근할 수 없기 때문에 컴파일 오류가 남
dogFunc = animalFunc;


// 2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;  // func1의 매개변수 개수가 func2보다 많아서 호환 가능
// func2 = func1;