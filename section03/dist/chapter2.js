// unknown 타입
// 최상위 타입
function unknownEx() {
    // 최상위 타입이므로 모든 값을 할당 가능(업 캐스팅)
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    // 최상위 타입이므로 자식 타입의 변수에는 할당 불가능(다운 캐스팅)
    let unknownVar;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}
/**
 * Never 타입
 * 최하위 타입 (모든 집합의 부분집합 = 공집합)
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    // 최하위 타입이므로 모든 변수에 할당 가능(업 캐스팅)
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // 최하위 타입이므로 다른 타입의 값은 올 수 없음(다운 캐스팅)
    //   let never1: never = 10;
    //   let never2: never = "string";
    //   let never3: never = true;
}
/**
 * Void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidVar = undefined;
}
/**
 * any 타입
 * 타입 계층도를 전부 무시
 * 치트키: 어떠한 타입과도 업 캐스팅, 다운 캐스팅 모두 가능 (never를 제외하고)
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    // 다운 캐스팅도 OK
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
export {};
