/**
 * 제네릭 클래스
 * 생성자에 전달하는 초기값을 기준으로 컴파일러가 타입을 추론함
 */

class List<T> {
  constructor(private list: T[]) {
  }

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// number 타입의 배열을 전달했으므로 T가 number로 타입 추론 가능해짐
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// string 타입의 배열을 전달했으므로 T가 string로 타입 추론 가능해짐
const strList = new List(["a", "b", "c"])
strList.pop();
strList.push("d");
strList.print();
