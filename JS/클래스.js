//클래스를 사용하여 인스턴스 만들기
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () { // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

//Syntactic Sugar - 문법을 보다 읽기 쉽게 만드는것
//자바 등 타 언어에 익숙한 사람들을 위해 생성자 함수, 프로토타입 기반인 자바스크립트 문법 타 언어의 클래스와 비슷한 문법으로 포장

//그러나 클래스와 생성자 함수의 동작이 동일하지는 않음
// 차이 1. 클래스는 호이스팅되지 않음 (정확히는 되지만...)
const chain1 = new YalcoChicken('판교', 3);

class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 차이 2. 클래스는 new 없이 사용하면 오류
// (생성자 함수는 오류 없이 undefined 반환)
const chain2 = YalcoChicken('강남', 17);
//이 외에도 차이들이 있음 - 클래스에는 이후 배울 엄격모드 적용

