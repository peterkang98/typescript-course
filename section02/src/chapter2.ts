//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "i'm", "Peter"];

//제네릭 타입
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [[1, 2, 3], [4, 5]]

// ---------------------------------------------
// 튜플
// 길이 고정 + 각 요소마다 타입이 고정된 배열 (실제로 .js로 변환되면 그냥 배열임)
// 특정 인덱스의 위치에 따라서 넣어야 하는 타입이 이미 정해져 있을 때 유용
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

tup1 = [2, 3];
// tup1 = [2, 3, 4]; 컴파일 오류

// 주의사항:
// 튜플은 실제로 배열이기 때문에 일반 배열 메소드들은 모두 사용 가능하고,
// 배열 메소드를 사용할 때는 튜플의 길이 제한이 발동하지 않음
tup1.push(3);
tup1.pop();

const users: [string, number][] = [
  ["강동현", 1],
  ["강희수", 2],
  ["홍길동", 3],
  // [4, "김준형"] 컴파일 오류
];