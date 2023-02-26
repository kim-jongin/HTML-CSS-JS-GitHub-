//getter, setter라고 부름
//스스로는 값을 갖지 않음 - 다른 프로퍼티의 값을 읽거나 저장할 때 사용
//get, set을 앞에 붙임
const person1 = {
  age: 17,

  get koreanAge () {
    return this.age + 1;
  },

  set koreanAge (krAge) {
    this.age = krAge - 1;
  }
}

console.log(person1, person1.koreanAge);

person1.koreanAge = 20;

console.log(person1, person1.koreanAge);
//함수처럼 지정되었지만, 프로퍼티처럼 사용

//클래스에서도 사용 가능
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get chainTitle() {
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) {
    if (typeof chainNo !== 'number') return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}

const chain1 = new YalcoChicken('판교', 3);
console.log(chain1.chainTitle);

chain1.chainNo = '4';
console.log(chain1);

chain1.chainNo = -1;
console.log(chain1);

chain1.chainNo = 4;
console.log(chain1);
//클래스에서는 프로토타입이 됨

//getter -> 반드시 값을 반환해야 함, 특정 프로퍼티를 원하는 방식으로 가공하여 내보낼 때 사용

//setter -> setter는 하나의 인자를 받음, 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용

//필드 이름과 setter의 이름이 같을 경우
class JongChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get no () { 
    return this.no + '호점'; 
  }
  set no (no) { 
    this.no = no;
  }
}
class JongChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get no () { 
    return this._no + '호점'; 
  }
  set no (no) { 
    this._no = no;
  }
}

const chain1 = new JongChicken('판교', 3);

console.log(chain1);
console.log(chain1.no);
//setter와는 다른 필드명을 사용하여 자기반복호출을 방지 
//constructor의 no는 setter를 가리키고 실제 필드명은 _no가 됨

