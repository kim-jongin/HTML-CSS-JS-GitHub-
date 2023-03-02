// 전역 객체 global object
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체


//브라우저 콘솔에 출력
console.log(this);

console.log(
  this === window,
  window === self,
  self === frames
);

//Node.js에서 문서로 실행
console.log(this);
//Node.js로 문서 실행시의 this는 전역 객체를 가리키지 않음
//이후 모듈 관련 강의에서 다룸

console.log(global);

//globalThis 통일된 식별자 - 양쪽 모두에서 실행
console.log(globalThis);

// 전역 객체에 포함되는 것
// 1. 표준 빌트인 객체 
// 2. 호스트 객체 - 환경에서 제공하는 기타 객체들: 브라우저의 Web AudioParam, Node.js API 등
// 3. (브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수

var myGlobalVar = 1;
const myGlobalConst = 1;

function myGlobalFunc(){};

console.log(
  globalThis.myGlobalVar,
  globalThis.myGlobalConst,
  globalThis.myGlobalFuncl
);

// 표준 빌트인 객체 standard built-in objects
// ECMAScript사양에 정의된 객체들 - 어떤 환경이든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능

//Node.js에서는 globalThis 출력시 표준 빌트인 객체들은 출력하지 않음
console.log(globalThis);

//그러나 요소들로 갖고 있는 것은 확인 가능
console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

