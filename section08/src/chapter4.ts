/**
 * 템플릿 리터럴 타입
 * 스트링 리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
type ColoredAnimal = `${Color}-${Animal}`;

