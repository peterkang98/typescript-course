/**
 * 타입 단언 (as)
 */

type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "Peter";
person.age = 27;

// 타입 단언으로 초과 프로퍼티 검사를 피할 수 있음
type Animal = {
  name: string,
  color: string
}

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
} as Animal

function func(animal: Animal) { }

func({
  name: "돌돌이",
  color: "brown",
  breed: "진도"
} as Animal)

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 편법으로 다중 단언을 할 수 있긴한데, 권장하지 않음

/**
 * const 단언
 */
// 넘버 리터럴 타입이 됨
let num4 = 10 as const;

// 모든 프로퍼티에 readonly가 붙음
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언 (!)
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "pk9988"
};

// const len: number = post.author?.length; // 컴파일 오류: 변수에 undefined가 들어갈 수 있으므로 (number | undefined) 타입이 됨
// ? = 옵셔널 체이닝. author프로퍼티가 null이거나 undefined일 경우 undefined를 반환

const len: number = post.author!.length; // author 프로퍼티에 반드시 값이 있다는걸 컴파일러에게 알림