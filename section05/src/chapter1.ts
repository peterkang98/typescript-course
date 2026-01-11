interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "강아G" // 프로퍼티 재정의도 가능 (단 원본 타입의 서브 타입이여야 함; 예. string -> string literal)
  canBark: boolean;
}

interface Cat extends Animal {
  canScratch: boolean;
}

const dog: Dog = {
  name: "강아G",
  color: "brown",
  canBark: true
};

// interface DogCat extends Dog, Cat {
//
// }