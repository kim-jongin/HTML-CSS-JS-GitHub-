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