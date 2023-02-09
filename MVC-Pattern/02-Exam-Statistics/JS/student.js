class Student  {
    constructor (name, surname) {

        this.name = name;
        this.surname = surname;
    }

   getStudentData () {

    var nameToUpperCase = (this.name[0]).toUpperCase() + 
    this.name.slice(1);
    
    var surnameToUpperCase = (this.surname[0]).toUpperCase() + 
    this.surname.slice(1);

    return nameToUpperCase + " " + surnameToUpperCase;
   }
    
}

// var student = new Student ("sanja", "randjelovic");
// console.log(student.getStudentData());




    