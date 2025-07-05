function Developer(name){
   this.name = name;
   this.type = 'Developer';
}

function Tester(name){
   this.name = name;
   this.type = 'Tester';
}

// Employee object creation is centeralized in the factory
// so that we can add more types of employees without changing the code
function EmployeeFactory(){
    // base method to creater objects 
    this.create=(name,type)=>{
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;      

        }
    }
}

function say(){
    console.log(`I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory=new EmployeeFactory();
// database 
const employees=[];

employees.push(employeeFactory.create('John',1))
employees.push(employeeFactory.create('Jane',2))

employees.forEach((emp)=>{
    say.call(emp);
})