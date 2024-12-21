class Auto {
  constructor(name, modal, year) {
    this.name = name;
    this.modal = modal;
    this.year = year;
  }
}

class TeslaCar extends Auto {
  constructor(name, modal, year) {
    super(name, modal, year);
    this.name = name;
    this.modal = `${modal} Modal`;
    this.year = year;
  }

  getCarModel() {
    return this.modal;
  }
}

let allAuto = new Auto();
let teslaCar = new TeslaCar("Tesla", "tesla", 2024);

let allAutoArr = [
  new Auto("Audi100", "Audi", 2023),
  new Auto("Mazda", "Mazda", 2023),
];

for (let auto of allAutoArr) {
  console.log(auto);
}

console.log(teslaCar);
console.log(teslaCar.getCarModel());
