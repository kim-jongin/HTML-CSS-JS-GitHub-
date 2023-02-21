//중첩된 함수
function outer () {
  const name = '바깥쪽'
  console.log(name, '함수');

  function inner () {
    const name = '안쪽'
    console.log(name, '함수');
  }
  inner();
}

outer();

function addMulSub (x, y) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  return sub(mul(add(x, y), y), y);
}

console.log(addMulSub(8, 3));

//재귀 함수
function upto5 (x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  };
}

upto5(1);
upto5(3);
upto5(7);
//스택이 넘치면 stack overflow

//팩토리얼 재귀함수
function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(
  fact(1),
  fact(2),
  fact(3),
  fact(4)
)

//즉시 실행 함수
const initialMessage = (function () {
  // ⚠️ var를 사용함에 주목
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();

console.log(initialMessage);
console.log(month);

//불변성
let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];

function changeValue (a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z);

//원시타입: 인자로 들어간 함수 내에서의 변경에 영향을 받지 않음 -> 실제 값이 아니라 복사된 값이 들어갔기 때문
//참조타입: 인자로 들어간 함수 내에서 요소가 변하면 실제로도 변함 -> 복사된 값도 같은 객체나 배열을 가리키기 때문

//함수에 주어진 인자를 변경하는 것은 좋지 않음 -> 외부의 환경을 변경하는 함수는 위험, 이상적인 함수: 받은 값들만 처리하여 새 값을 반환