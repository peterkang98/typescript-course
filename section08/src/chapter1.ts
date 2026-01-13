/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}

// Post 타입의 author 프로퍼티만 가져와서 매개변수의 타입으로 사용
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "강동현"
  }
};

printAuthorInfo(post.author);


// 객체의 배열 타입:
// { title, content, author } 형태의 객체들이 여러 개 들어있는 배열”
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}[];

// Element Type Extraction
// PostList[number] = PostList 배열에서 인덱스로 하나를 꺼냈을 때 나오는 요소의 타입
// PostList 배열에서 하나의 요소 타입을 추출한 후, author 프로퍼티만 가져와서 매개변수의 타입으로 사용
function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// PostList 배열에서 하나의 요소 타입을 추출
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "강동현"
  }
};

printAuthorInfo2(post.author);


// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number 타입
type Tup1 = Tup[1]; // string 타입
type Tup2 = Tup[2]; // boolean 타입

// 튜플 타입 안에 있는 값들 중에서 최적의 공통 타입을 추출
type TupNum = Tup[number]; // number | string | boolean 타입