// 사용자 정의 타입가드

type Dog = {
  name: string,
  canBark: boolean
}

type Cat = {
  name: string,
  canScratch: boolean
}

type Animal = Dog | Cat;

// 내 커스텀 함수가 true를 리턴한다면 인수로 전달한 값이 특정 타입임을 컴파일러에게 알려줌
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).canBark !== undefined;
}

function isCat(animal: Animal): animal is Dog {
  return (animal as Cat).canScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  }else if (isCat(animal)) {
    // 고양이
  }
}