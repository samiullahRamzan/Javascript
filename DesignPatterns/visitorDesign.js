function Employee(name,salary){
    this.name=name;
    this.salary=salary;
}

Employee.prototype={
    getSalary: function() {
        return this.salary;
    },

    setSalary:function(salary){
        this.salary = salary;
    },

    accept:function(visitorFn) {
        visitorFn(this);
    }
}

const employee1=new Employee("John", 50000);
console.log(employee1.getSalary()); // 50000
const employee2=new Employee("Jane", 60000);

// is our visitor function 
function extraSalary(emp){
    emp.setSalary(emp.getSalary() + 10000);
}

employee1.accept(extraSalary);
console.log(employee1.getSalary()); // 60000