class Employee {
  #id;
  #name;
  #cnic;
  constructor(id, name, cnic) {
    this.#id = id;
    this.#name = name;
    this.#cnic = cnic;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get cnic() {
    return this.#cnic;
  }

  set cnic(cnic) {
    this.#cnic = cnic;
  }
  getEarnings() {
    return 0;
  }

  getDetails() {
    return `ID: ${this.#id}, Name: ${this.#name}, CNIC: ${this.#cnic}`;
  }
}

class CommissionEmployee extends Employee {
  #commissionRate;
  #sales;
  constructor(id, name, cnic, commissionRate, sales) {
    super(id, name, cnic);
    this.#commissionRate = commissionRate;
    this.#sales = sales;
  }

  getEarnings() {
    return this.#commissionRate * this.#sales;
  }

  getDetails() {
    return `${super.getDetails()}, Commission Rate: ${
      this.#commissionRate
    }, Sales: ${this.#sales}`;
  }
}

const commissionEmployee = new CommissionEmployee(
  23,
  "samiullah",
  "3510382477843",
  5.6,
  1000
);

console.log("here is commisssion employee", commissionEmployee);
console.log("Earnings:", commissionEmployee.getEarnings());
console.log("Details:", commissionEmployee.getDetails());

commissionEmployee.id = 26;

console.log("Updated ID:", commissionEmployee.id);
