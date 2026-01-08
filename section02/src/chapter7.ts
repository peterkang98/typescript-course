// void
// 함수에서 return 문을 쓰고 싶지 않을 때 사용
// void -> 아무것도 없음을 의미하는 타입

// 함수 시그니처에 타입 주석을 쓰면 반환 타입을 명시할 수 있음
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}


let voidA: void;
voidA = undefined;  //undefined 외의 값을 담을 수 없음. (strictNullCheck를 끄면 null도 넣을 수 있음)
// voidA = 1;
// voidA = "hello"

//---------------------
// never
// 절대 발생하지 않음, 존재하는거 자체가 모순인 경우

function func3(): never {
  while (true) {}
}

// 실행되면 프로그램이 바로 종료하므로 반환 타입은 never
function func4(): never {
  throw new Error();
}

let anyVar: any;

let a: never;
// 어떠한 값도 담을 수 없음
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;