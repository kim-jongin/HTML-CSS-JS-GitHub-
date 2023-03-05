//생성자 함수
const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());
// 콘솔에서 펼쳐서 프로퍼티 확인
// [PrimitiveValue]비교
// valueOf 또는 toString 메서드로 문자열 원시값 반환

const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);

console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());
//다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환

//new없이 사용하면
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);
//생성자로서가 아닌 String함수는 주어진 인자를 문자열로 변환하여 반환

//유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?';
console.log(myStr); // 💡 배열과 달리 그대로

for (const letter of myStr) {
  console.log(letter);
}
// length프로퍼티: 글자 수 반환
// []안에 인덱스 숫자를 넣어 ~ 번째 글자 읽기만 가능
// for...of 문 사용 가능

// String값은 원시값
// []접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야함

// 주요 인스턴스 메서드
// 1. toUpperCase, toLowerCase
// 라틴어 문자를 모두 대문자/소문자로 변경하여 반환
const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);

console.log(word);

function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);

// 2. charAt, at
// 인자로 주어진 인덱스의 문자 반환
console.log(
  'Hello World!'.charAt(0),
  '안녕하세요~'.charAt(2)
);

// at
// 신기능, 배열에서도 사용
// 음수로 뒤에서부터 접근 가능 ( -1 부터 )
console.log(
  '안녕하세요~'.at(1),
  '안녕하세요~'.at(-1)
);

// 3. indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환
const word = '반갑습니다!';
console.log (
  word.indexOf('습'),
  word.lastIndexOf('습')
);

const word = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word.indexOf('하나'),
  word.lastIndexOf('하나')
);

console.log(
  '가나다라마'.indexOf('하'),
  '가나다라마'.lastIndexOf('하')
);

// 4. includes, startsWith, endsWith
// 인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}

// 5. search
// 인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);

// 6. substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환
const word = 'ABCDEFGHIJKL';
const part = word.substring(4, 8)

console.log(word, part);

const word = 'ABCDEFGHIJKL';

console.log(
  word.substring(4)
);

console.log(
  word.substring(-1),
  word.substring(4, 100),
  word.substring(100)
);
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

const sentence = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence.substring(
  0, sentence.indexOf(' ')
);
const lastWord = sentence.substring(
  sentence.lastIndexOf(' ') + 1, sentence.length
);

console.log(firstWord, lastWord);

// 7. slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음
const word = 'ABCDEFGHIJKL';
console.log(
  word.substring(4, 8),
  word.slice(4, 8),
);

console.log(
  word.substring(-4),
  word.slice(-4)
);

const sentence = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence.slice(
  0, sentence.indexOf(' ')
);

const lastWord = sentence.slice(
  sentence.lastIndexOf(' ') + 1 - sentence.length
);

console.log(firstWord, lastWord);

// 8. split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)
// 인자로 빈 문자열을 넣거나 인자 생략시
const word = '안녕하세요';

console.log(
  word.split(''),
  word.split()
)
const word = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word.split(' ', 2),
  word.split(' ', 4)
)

// 두 번째 인자로 배열의 최대 길이 지정 가능

const sentence = '옛날에 호랑이 한 마리가 살았어요.';
const splitted = sentence.split(' ');

const firstWord = splitted[0];
const lastWord = splitted[splitted.length - 1];

console.log(firstWord, lastWord);

// 9. trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환
const word = '  Hello World!  ';
console.log(`--${word}--`);
console.log(`--${word.trim()}--`);
console.log(`--${word.trimStart()}--`);
console.log(`--${word.trimEnd()}--`);
// 중간의 공백은 제거하지 않음

// 10. repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환
const word = '호이';

console.log(word.repeat(3));
console.log(word.repeat(0));
console.log(word.repeat());

console.log(word.repeat(-1));
//인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생


// 11. replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);

const word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';

console.log(word.replace('밥', '라면'));

console.log(word.replace(/밥/g, '라면'));
// replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
// 모두 치환하려면 정규식 /.../g 사용
console.log(word.replaceAll('밥', '라면'));
console.log(word.replaceAll(/밥/g, '라면'));
// replaceAll은 문자열도 자동으로 /.../g처럼 인식

//메서드 체이닝
//값을 반환하는 인스턴스 메서드를 연속으로 사용

const word = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word); // 원본은 그대로
