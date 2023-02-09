//var은 사용하지 않는다 -> 추후 배움 (메이비 호이스팅)
/*
데이터를 담는 곳 
-값의 의미를 나타낸다.
-값의 재활용
-변경되는 상태를 가리키는 식별자 
*/

// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';

console.log(SALUTATION, person);

person = '영희';

console.log(SALUTATION, person);

/* 
변수
-담긴 값이 바뀔 수 있는 주머니
-let사용
*/

let x;
console.log(x); //x = undefined  -> JS에서 undefined는 하나의 값이다.

let x = 1;
console.log(x); //x = 1  -> undefined에서 1로 변경(초기화)되기에 값이 바뀐다는 표현보다는 다른 값을 가리킨다로 표현하는게 옳음

