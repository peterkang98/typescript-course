/**
 * Pick<T, K>
 *
 *   - 객체 타입으로부터 특정 프로퍼티만 골라내서 새로운 타입을 정의
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 레거시 코드에서는 태그랑 썸네일url이 없었다고 가정
// Pick을 사용해서 title, content 프로퍼티만 갖는 타입을 정의
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠"
}

// Pick<T, K> 구현 코드
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}

// K extends keyof T  =>  K 타입이 T의 서브타입이 되어야 함
// 위의 예시를 적용하면
// K extends ("title" | "tag" | "content" | "thumbnailURL")
// ("title" | "content") extends ("title" | "tags" | "content" | "thumbnailURL")


/**
 * Omit<T, K>
 *
 *   - 객체 타입으로부터 특정 프로퍼티들만 제거하는 타입을 정의
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: []
};

// Omit<T, K> 구현 코드
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// 해설
// T = Post, K = 'title'
// Pick<Post, Exclude<"title" | "tag" | "content" | "thumbnailURL", 'title'>>
// Pick<Post, "tag" | "content" | "thumbnailURL">
// Exclude도 유틸리티 타입으로 제공 됨

// Exclude를 직접 구현하려면
// type Exclude<T, U> = T extends U ? never : T;


/**
 * Record<K, V>
 *
 *   동일한 패턴을 갖는 객체 타입을 쉽게 정의하는 기능을 제공
 *   K = 객체의 프로퍼티 키가 될 키들을 유니온으로 묶어서 전달
 *   V = 각 키의 value가 될 데이터를 전달
 */

// 중복 코드가 많음
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
}

type Thumbnail = Record<'large' | 'medium' | 'small', {url: string}>
//위의 두 코드는 같은 구조를 가짐


// Record<K, V> 직접 구현
type Record<K extends keyof any, V> = {
  [key in K]: V;
}

// 해설
// K extends keyof any  ->  K는 반드시 객체의 key로 사용할 수 있는 타입이어야 한다
// type AnyKey = keyof any;  // string | number | symbol  (객체의 key로 사용할 수 있는 모든 타입)
// any는 어떤 객체든 될 수 있고, 어떤 키든 가질 수 있기 때문
