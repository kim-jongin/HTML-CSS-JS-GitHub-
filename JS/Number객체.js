//생성자 함수
const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);

console.log(
  numObj1.valueOf(),
  numObj2.valueOf(),
  numObj3.valueOf()
);

// 특정 숫자값으로 인식되는 것
console.log(
  new Number('-123.4567'),
  new Number('Infinity'),
  new Number(true),
  new Number(false)
);

// NaN
console.log(
  new Number('1/2'),
  new Number('123ABC'),
  new Number('ABC'),
  new Number('{a: 1, b: 2}'),
  new Number([1, 2, 3])
);

//new없이 사용시
const num1 = Number('123');
const num2 = Number('-123.45');
const num3 = Number(true);
const num4 = Number(false);
const num5 = Number(null);

console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof num3, num3);
console.log(typeof num4, num4);
console.log(typeof num5, num5);

//정적 프로퍼티
// 1. EPSILON
// (Number형에서 표현 가능한 1보다 큰 가장 작은 수) - 1
// 부동소수점으로 인한 계산오차 문제 해결에 사용

console.log(Number.EPSILON);

console.log(0.1 + 0.2);

console.log((0.1 + 0.2) - 0.3 < Number.EPSILON)

// 2. MAX_VALUE, MIN_VALUE
// 자바스크립트에서 표현 가능한 가장 큰 수와 작은 수
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 3. MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
// 자바스크립트의 부동소수점 체계에서 안정적으로 나타낼 수 있는 가장 큰 수와 작은 정수
// 더 큰 정수도 표현 자체는 가능 안전하게 하려면 BigInt 타입으로
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 4. POSITIVE_INFINITY, NEGATIVE_INFINITY
// 양과 음의 Infinity
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// 5. NaN
// 전역 객체(globalThis)의 NaN과 같은 값
console.log(Number.NaN);




