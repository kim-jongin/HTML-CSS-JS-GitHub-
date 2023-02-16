{
  console.log('블록문');
}

/* 
블록문

-0개 이상의 문(statement)들을 묶은 단위
-일반적으로, 이후 배울 제어문, 함수 등에 사용
-새로운 스코프 생성
*/

//스코프
//블록 안에 선언된 상수와 변수들을 밖에서 사용불가
{
  const x = 'Hello';
  let y = 'world';
  console.log(x, y);
}

console.log(x);
console.log(y);

//블록 안쪽에서는 바깥의 것 사용 가능
let x = 1;
{
  let y = 2;
  console.log(x, y);
}
console.log(x);
console.log(y);

//블록 안쪽에 변수나 상수가 새로 선언되면 바깥 것을 덮어씀
const xx = 0;
let yy = 'Hello';
console.log(xx, yy);

{
  const xx = 1;
  let yy = '안녕하세요~';

  console.log(xx, yy);
  //const, let을 빼먹으면 재선언이 아니라 바깥 값(변수면) 바꿈
}

console.log(xx, yy);

//스코프체인 - scope chain

//stack - 후입선출(나중에 들어온 것이 먼저 나감)
let a = 0;
let b = 1;
let c = 2;
console.log('시점: 1', a, b, c);

{
  let a = 'A';
  let b = 'B';
  console.log('시점2: ', a, b, c);


{
  let a = '가';
  console.log('시점3: ', a, b, c);
}

console.log('시점4: ', a, b, c);
}
console.log('시점5: ', a, b, c);
//블럭 안의 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감 - 체이닝


/*
  전역global변수/상수
  -데이터data 영역에 위치
  -코드 어느 곳에서든 접근 가능 - 블록 내 동명의 변수나 상수에 덮어씌워지지 않는 이상
  -프로그램 종료시 소멸
  -전역변수 사용은 최소화


  지역local 변수/상수
  -스택 영역에 위치
  -해당 블록 안에서만 접근 가능
  -블록 실행 종료시 소멸
  -변수나 상수는 가능한 사용할 블록 내에서 선언 - 메모리 절약
*/