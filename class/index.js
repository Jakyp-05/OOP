class Employee {
  #name;
  #age;
  #salary;
  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }

  setName(name) {
    if (name.length > 0) {
      this.#name = name;
      return this;
    } else {
      throw new Error("name is incorrect");
    }
  }

  getName() {
    return this.#name;
  }

  show() {
    return `Name: ${this.#name}, Age: ${this.#age}, Salary: ${this.#salary}`;
  }

  addMessage() {
    return this.#name + " " + this.#age + " " + this.#salary;
  }

  showName() {
    return this.#name;
  }

  showSalary() {
    return this.#salary;
  }
}

class Student {
  name = "Zhakyp";
  surname = "Zhumagulov";
  // constructor(name, surname) {
  //   this.name = name;
  //   this.surname = surname;
  // }

  show() {
    return this.name;
  }

  cape(name, surname) {
    let str = name + " " + surname;
    return str[0].toUpperCase() + str.slice(1);
  }
}
let ourEmployee = new Employee("Zhakyp", 19, 40000);

let myName = new Employee();
let student = new Student();

console.log(ourEmployee.show());
console.log(myName.setName("Zhakyp"));
console.log(myName.getName());

// Array
let employees = [
  new Employee("Aman", 20, 70000),
  new Employee("Samara", 20, 75000),
  new Employee("Ulan", 24, 70000),
];

for (let employee of employees) {
  console.log(employee);
}
