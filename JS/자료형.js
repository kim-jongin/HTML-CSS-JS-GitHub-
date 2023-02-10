//원시 자료형
const a = true, b = 123.4, c = '안녕하세요';
console.log(a, typeof a);
console.log(b, typeof a);
console.log(c, typeof a);

//boolean
//참 또는 거짓
let isEmployed = true;
let isMarried = false;

console.log('직업있음: ', inEmployed);
console.log('기혼 :', isMarried);

//반환값으로 자주 사용됨
const f = 1>2;
const g = 1<2;

console.log(f, typeof f);
console.log(g, typeof g);

//number
//JS에서는 정수와 실수의 차이가 없다(정수도 실수로 처리한다)
//2^53 - 1까지 안정적으로 표현 가능 -> 더 큰 정수는 이후 배울 BigInt로
let integer = 100;
let real = 12.34;
let nevgative = -99;

console.log(integer, real, negative);

//문자열
//큰따옴표, 작은따옴표, 백틱으로 감싸진 텍스트 데이터
let first_name = "jongin";
let last_name = 'kim';
let description = `프론트엔드 개발자로 대성했다.`;

console.log(first_name, last_name);
console.log(description);

//undefiend
//값이 부여되지 않았다는 undefined를 가리키는것 , 값이 없는것이 아님
let x = 1;
//위 코드는 무언가를 반환하는 표현식이 아니라, 값을 가리키는 선언식임 -> 아무것도 반환하지 않는 것은 undefined를 반환한다.

//null 
//null은 비어있다는 의미
//의도적인 빈 값을 의미
// object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용
// "있어봐, 뭐 들어올 자리야" / "뭘 줘야 되는 거 아는데 줄 게 없어"
// 객체 생성이 실패한 경우 등에 대신 반환

//typeof null을 하면 object를 반환하는데 이는 오류임. object라는 값은 따로 있음. 하지만 고칠수 없는 이유는 이미 기존처럼 사용하고 있던 프로그램에 오류가 생길 수 있기 때문.
let x;
console.log('값 넣기 전', typeof x);
x = null;
console.log('값 넣은 후', typeof x);