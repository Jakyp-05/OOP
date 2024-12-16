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
let ourEmployee1 = new Employee();
let ourEmployee2 = new Employee();
let ourEmployee3 = new Employee();

let student = new Student();
// console.log(student.cape("zhumagulov", "zhakyp"));
// console.log(student.name);
// console.log(ourEmployee.name);
console.log(ourEmployee.show());
console.log(myName.setName("Zhakyp"));
console.log(myName.getName());

// ourEmployee1.name = "Aman";
// ourEmployee1.age = 24;
// ourEmployee1.salary = 80000;

// ourEmployee2.name = "Samara";
// ourEmployee2.age = 20;
// ourEmployee2.salary = 75000;

// ourEmployee3.name = "Ulan";
// ourEmployee3.age = 24;
// ourEmployee3.salary = 70000;

// console.log(ourEmployee1);
// console.log(ourEmployee2);
// console.log(ourEmployee3);
// console.log(ourEmployee1.addMessage());

// console.log(ourEmployee1.showName());
// console.log(ourEmployee1.showSalary());

// Array
let employees = [
  new Employee("Aman", 20, 70000),
  new Employee("Samara", 20, 75000),
  new Employee("Ulan", 24, 70000),
];

for (let employee of employees) {
  console.log(employee);
}
