/**
 * 프로미스
 */

// 타입스크립트에서는 Promise는 제네릭 클래스 기반으로 타입이 선언되었기 때문에 생성자를 호출할 때
// 비동기 처리 결과값(resolve()의 인수)의 타입을 명시할 수 있음
// 참고: reject()의 인수는 선택적 + any 타입이므로 아무 값이나 전달 가능 -> 그러므로 타입 검사를 조건문으로 직접해야 함
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~ 때문에 실패");
  }, 2000);
});

promise
  .then((response) => {
    console.log(response * 10);
  })
  .catch(err => {
    if(typeof err === "string") {
      console.log(err);
    }
  });

interface Post {
  id: number,
  title: string,
  content: string
}

// Promise를 반환하는 함수
// 함수의 반환값 타입으로도 Promise의 제네릭 타입 변수를 지정할 수 있음
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 콘텐츠"
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then(post => console.log(post.id));