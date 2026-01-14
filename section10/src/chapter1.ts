/**
 * Partial<T>
 *   특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: "제목은 나중에",
  content: "초안..."
}

// Partial<T> 구현 코드
type Partial<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 *   특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Required<Post> = {
  title: "제목은 나중에",
  tags: ["js"],
  content: "초안...",
  thumbnailURL: "https://s3.."
}

// Required<T> 구현 코드
type Required<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 *   특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

const readOnlyPost: Readonly<Post> = {
  title: "제목은 나중에",
  tags: ["js"],
  content: "초안...",
  thumbnailURL: "https://s3.."
}

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

// readOnlyPost.content = "new post"  //readonly이기 때문에 컴파일 오류