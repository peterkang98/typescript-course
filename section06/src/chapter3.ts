// 인터페이스는 public 멤버만 정의 가능
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {

  constructor(public name: string, public moveSpeed: number) {
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`)
  }

}