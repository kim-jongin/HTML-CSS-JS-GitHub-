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