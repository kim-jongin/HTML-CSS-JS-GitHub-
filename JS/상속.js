class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim () { console.log('수영중...'); }
}
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);

for (const i of [
  [ '1.', birdy instanceof Bird ],
  [ '2.', eaglee instanceof Bird ],
  [ '3.', eaglee instanceof Eagle ],
  [ '4.', pengdol instanceof Penguin ],
  [ '5.', pengdol instanceof Bird ],
  [ '6.', birdy instanceof Eagle ]
]) {
  console.log(i[0], i[1]);
}

pengu.swim();
pengdol.swim();
eaglee.swim();

// 클래스에서는 extends(부모클래스)로 상속관계 정의
// 자식 클래스에서 또 다른 클래스가 상속받을 수 있음
// 자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// prototype으로 상속관계 살펴볼 것 -> 최종적으로 Object

class JongChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class JongChickenAndCafe extends JongChicken {
  cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
  cafeOrder (name) {
    return `${this.cafeMenu[name]}원입니다.`
  }
}

const chain1 = new JongChickenAndCafe('서면', 2)

console.log(chain1);

console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼')
);

