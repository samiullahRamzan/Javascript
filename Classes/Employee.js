class Employee {
  constructor(id, name, cnic) {
    this.id = id;
    this.name = name;
    this.cnic = cnic;
  }

  getEarnings() {
    return 0;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, CNIC: ${this.cnic}`;
  }
}

class CommissionEmployee extends Employee {
  constructor(id, name, cnic, commissionRate, sales) {
    super(id, name, cnic);
    this.commissionRate = commissionRate;
    this.sales = sales;
  }

  getEarnings() {
    return this.commissionRate * this.sales;
  }

  getDetails() {
    return `${super.getDetails()}, Commission Rate: ${
      this.commissionRate
    }, Sales: ${this.sales}`;
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
