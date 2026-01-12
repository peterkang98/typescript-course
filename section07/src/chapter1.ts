// 타입이 여러개 있다면?
// 타입 변수를 여러개 선언
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [num1, num2] = swap("1", 2);
console.log(num1, num2)


// 배열의 경우?
// 배열 타입의 타입 변수를 사용
function returnFirstVal<T>(data: T[]) {
  return data[0];
}

let num = returnFirstVal([0, 1, 2]);
let str = returnFirstVal(["hello", "my"]);


// 배열인데 첫번째 요소 타입만 알고 있고, 나머지는 모른다면?
// 튜플 타입의 타입 변수를 사용
function returnFirstVal2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let numStr = returnFirstVal2([1, "hello", "my"]);

// length 프로퍼티가 있는 타입만 매개변수로 받고 싶다면?
// extends로 제한할 수 있음
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);      // 3
let var2 = getLength("12345");  // 5
let var3 = getLength({length: 10});  // 10
// let var4 = getLength(10);  length 프로퍼티가 없으므로 컴파일 오류

console.log(var1, var2, var3)