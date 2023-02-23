//생성자 함수의 필요성

const chain1 = {
  name: '판교',
  no: 5,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
  }
};

const chain2 = {
  name: '강남',
  no: 15,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
  }
};

const chain3 = {
  name: '서초',
  no: 21,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
  }
};
//위와 같이 같은 형태로 다수의 객체들을 만들어야 한다면? 

//생성자 함수로 객체 만들기
//생성자 함수
function JongChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
  }
}

//인스턴스 생성
const chain1 = new JongChicken('판교', 5);
const chain2 = new JongChicken('강남', 15);
const chain3 = new JongChicken('서초', 21);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
/*
-생성자 함수명은 일반적으로 대문자로 시작 - 파스칼케이스
-생성자 함수로 만들어진 객체를 인스턴스라 부름
-this.~ 로 생성될 인스턴스의 프로퍼티들을 정의
-생성자 함수는 new연산자와 함께 사용
-암묵적으로 this로 반환
-생성자 함수에서는 메서드 정의 불가 - 개게 리터럴과 클래스에서는 사용 가능
*/

//new를 붙이지 않으면 undefined를 반환
function JongChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function() {
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
  }
}

console.log(JongChicken('홍대', 33));
//호출시 new를 붙이는가 여부에 따라 호출 원리가 다름 


//객체를 반환하는 함수와의 차이점
function createJongChicken (name,no) {
  return {
    name, no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`
    }
  }
}

const chain1 = createJongChicken('판교', 5);
const chain2 = createJongChicken('강남', 15);
const chain3 = createJongChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
