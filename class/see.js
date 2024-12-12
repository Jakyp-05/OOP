class React {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.height * this.width;
  }

  getPerimeter() {
    return this.height * 2 + this.width * 2;
  }
}

let r1 = new React(10, 20);
let r2 = new React(15, 9);

console.log("r1 area" + r1.getArea());
console.log("r2 perimetr" + r2.getPerimeter());
