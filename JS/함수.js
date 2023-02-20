//함수 기본 문법
function 함수명 (입력값) {
  //수행할 일
  return 반환값 // 있을 시
}

함수명(입력값);

//함수를 사용하는 이유
// 1.반복될 수 있는 작업을 정의해 두는 것 
// 함수 사용 전
let a = 3, b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

let c = 10, d = 2;

console.log(`${c} + ${d} = ${c + d}`);
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);

let e = 7, f = 5;

console.log(`${e} + ${f} = ${e + f}`);
console.log(`${e} - ${f} = ${e - f}`);
console.log(`${e} * ${f} = ${e * f}`);
console.log(`${e} / ${f} = ${e / f}`);

//함수 사용
function allArithemics (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3, b = 4;
allArithemics(a, b);

let c = 10, d = 2;
allArithemics(c, d);

let e = 7, f = 5;
allArithemics(e, f);

//input을 입력받아 output을 반환return 하는 것
function add(x, y) {
  return x + y; // 값을 반환
}

let z = add(2, 3);

console.log(z);

console.log(add(4, 5));

console.log(
  add(add(6, 7), add(8, 9))
);

function isOdd (x) {
  return !!(x % 2);
}
//특정 값을 반환하려면 return 필요. 없다면 undefined를 반환.

let num = 12;

console.log(
  `${num}(는)은 ${
    isOdd(num) ? '홀' : '짝'
  }수입니다.`
);

// a.인풋으로 받는 값 - 인수와 인자
function add(x, y) {
  // x, y를 인자 또는 매개변수(parameter)라 부름
  return x + y;
}

// a, b를 인수(argument)라 부름
let z = add(2, 3);
//일반적으로는 구분하지 않고 혼용해서 사용함.

// b.꼭 인자를 받거나 반환하는 것은 아님.
let currentTemp = 24.5;

function logCurrentTemp () {
  console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

console.log('반환값:', logCurrentTemp());
//return문이 적혀있지 않으면 undefined를 반환
//console.log를 찍으면 undefined가 반환되는 이유

// c.return문은 꼭 마지막에 작성
function add (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  return x + y;
  console.log(`결과는 ${x + y}입니다.`);
}

console.log(add(2, 7));

// d.호이스팅 hoisting
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add (x, y) {
  return x + y;
}

//함수를 정의하는 방법

// 1.함수 선언
function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 2.상수나 변수에 함수 대입
const subt = function (x, y) {
  return x - y;
}

console.log(subt(7, 2));

function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(2, 7));

// 3.화살표 함수
// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

// 2번과 3번으로 선언한 함수는 호이스팅이 되지 않음
console.log(div(8, 4));

const div = function (x, y) {
  return x / y;
}

console.log(div(8, 4));

const div = (x, y) => x / y;

//함수 생성 시점이 다르기 때문. 1번 방법으로 생성한 코드는 엔진의 코드 실행 이전 미리 생성됨 