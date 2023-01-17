/**1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value to the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */


function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}


function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

// Inheritance method
Employee.prototype = Object.create(Person.prototype);

//Overwrite constructor property of inherited prototype
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {

  return "Name: " + this.name + "\n Surname: " + this.surname + "\n Salary: " + this.salary;
}
Employee.prototype.getSalary = function () {

  return "Salary: " + this.salary;
}
Employee.prototype.increaseSalary = function () {
  
  return this.salary + this.salary / 10;
}

function Developer (name, surname, job, salary, specialization) {
    
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
  return "Specialization: " + this.specialization;
}

function Manager (name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  return this.department;
}
Manager.prototype.changeDepartment = function (value) {
  return this.department = value;
}

var developerPera = new Developer ("Pera", "Peric", "programmer", 2000, "JS");
developerPera.getData();
console.log(developerPera);

