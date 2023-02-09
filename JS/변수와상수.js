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

/*
다른 변수가 같은 값을 가질 때
변수영역은 다르지만 데이터 영역의 1이라는 값을 함께 가리킴
*/
let x = 1;
let y = x;

console.log(x,y);

/*
x에 1을 넣은 뒤 값을 'hello'로 변경

메모리상 가리키는 위치가 변경된다. 
기존 위치에 새 값을 넣는것이 아님 -> 크기가 다른 데이터가 재할당될 수 있음
*/
let x = 1;
let y = x;
console.log('변경전', x, y);

x = 'hello';
console.log('변경후', x, y);

/*
상수
-담긴 값이 바뀔 수 없는 주머니
-const사용
-흔히 대문자로 명명
*/

//1. 상수를 선언과 동시에 초기화
const PI = 3.14;
console.log('원주율:', PI);

//2. 선언하기만 하는 것 불가
const PI;
PI = 3.14; 

//3. 상수는 값의 변경 불가
const PI = 3.14;
PI = 3.1111;

//여러 변수와 상수 동시에 선언
let a = 1, b = 2, c = 3;
const x = 4, y = 5, z = 6;

console.log(a,b,c);
console.log(x,y,z);

