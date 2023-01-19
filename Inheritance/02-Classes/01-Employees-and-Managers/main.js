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

class Person {
    
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person {

    constructor (name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData () {

        console.log("\nName: " + this.name + "\nSurname: " + this.surname +
        "\nSalary: " + this.salary); 
    }

    getSalary () {

        return "\nSalary: " + this.salary;
    }

    increaseSalary () {

        return "\nSalary increased by 10 %: " + (this.salary + this.salary / 10);
    }
}

class Developer extends Employee {
    
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization () {
        return "\nSpecialization: " + this.specialization;
    }
        

}

class Manager extends Employee {

    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment () {
        return "\nDepartment: " + this.department;
    }

    changeDepartment (value) {
        return "\nDepartment Changed to: " + (this.department = value);
    }
}

var developerPera = new Developer ("Pera", "Peric", "Web Developer", 1300, "JavaScript");
console.log(developerPera);
developerPera.getData();
console.log(developerPera.getSalary());
console.log(developerPera.increaseSalary());
console.log(developerPera.getSpecialization());
console.log(developerPera.constructor);

var managerDjoka = new Manager ("Djoka", "Djokovic", "Managing Projects", 1000, "Managing Department");
console.log(managerDjoka);
managerDjoka.getData();
console.log(managerDjoka.getSalary());
console.log(managerDjoka.getSalary());
console.log(managerDjoka.increaseSalary());
console.log(managerDjoka.getDepartment());
console.log(managerDjoka.changeDepartment("New Department"));



