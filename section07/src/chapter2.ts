const arr = [1, 2, 3];

const newArr = arr.map(item => item * 2);
const newArr2 = arr.map(item => String(item));

console.log(newArr);

// callback의 타입은 함수 타입 표현식
function map<T, U>(arr: T[], callback: (item:T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, it => it * 2);