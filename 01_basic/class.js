class Student {
  // 값을 저장(속성)
  constructor(studNo, studName, height) {
    this.studNo = studNo;
    this.studName = studName;
    this.height = height;
  }

  // 동작을 저장(메소드)
  showInfo() {
    return `학번은 ${this.studNo}이고 이름은 ${this.studName}이며, 키는 ${this.height}입니다.`;
  }
}

// 인스턴스 생성
const s1 = new Student("S001", "홍길동", 176.9);
console.log(s1.showInfo());
const s2 = new Student("S002", "송민규", 180.9);

// 인스턴스
const obj = {
  name: "Hong",
  age: 20,
  friends: ["Kim", "Park", "Choi"],
  pets: [
    { name: "멍멍이", age: 3, friends: ["누렁이", "멍이"] },
    { name: "야옹이", age: 2 },
  ],
  showInfo: function () {
    return `이름은 ${this.name} `;
  },
};

console.log(obj["pets"][0]["friends"][0]);
console.log(obj.pets[0].friends[0]);
console.log(window);
