/**
 * 맵드 타입
 * 어떤 타입의 특정 키들을 순회하면서, 각 키에 새로운 타입을 부여해서 새로운 타입을 만드는 것
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // 프로퍼티의 key를 정의 : 해당 key의 value가 어떤 타입을 가질지
  [key in 'id' | 'name' | 'age']?: User[key];
  // [K in Keys]? 뒤에 ?를 붙이면 모든 키가 옵셔널로 바뀜
  // User[key] = 인덱스드 액세스 타입
  //
  // {
  //  'id'?: User['id']=number,
  //  'name'?: User['name']=name,
  //  'age'?: User['age']=age
  // }
};

// 모든 프로퍼티의 타입을 boolean으로 바꾸기
type BooleanUser = {
  [k in keyof User]: boolean;
  // [key in "id" | "name" | "age"]: boolean;
}

// 모든 프로퍼티를 readonly로 바꾸기
type ReadonlyUser = {
  readonly [k in keyof User]: User[k];
}

// 특정 유저의 정보를 불러오는 기능
function fetchUser(): User {
  // ..기능
  return {
    id: 1,
    name: "강동현",
    age: 27
  }
}

// 특정 유저의 정보를 수정하는 기능
// 유저의 정보를 다 매개변수로 넣지 않고 수정할 특정 몇 개의 정보만 넣고 싶다면?
// 모든 키를 선택적으로 재정의한 맵드 타입으로 매개변수 타입을 바꿈
function updateUser(user: PartialUser) {
  // ..수정하는 기능
}

updateUser({
  age: 28
})