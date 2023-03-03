// 빌트인 전역 프로퍼티

// 소스로 다른 프로퍼티나 메서드를 갖지 않고 값만 반환
console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);

console.log(globalThis.globalThis);

console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);
// Infinity, NaN, undefined 등의 원시값은 이 프로퍼티들을 가리킴
// null은 포함되지 않음 - 가리키는 값이 없음을 의미하기 때문
// globalThis 스스로에 대한 참조를 프로퍼티로 포함
