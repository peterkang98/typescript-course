function func(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => a + b;

// 선택적 매개변수(?)는 필수 매개변수 뒤에 와야 함
function introduce(name = "강동현", height?: number) {
  console.log(`name: ${name}`);

  if (typeof height === "number") {
    console.log(`height: ${height + 10}`);
  }
}

introduce( undefined, 184);

function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach(num => sum += num);
  return sum;
}

console.log(getSum(1, 2, 3));