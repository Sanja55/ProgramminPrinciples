class Exam  {
    constructor (subject, student, grade) {

        if (!(subject instanceof Subject)) {
            throw new Error ("Invalid subject input!");
        }

        if (!(student instanceof Student)) {
            throw new Error ("Invalid student input");
        }

    this.subject = subject;
    this.student = student;
    this.grade = grade;
    
}

    getExamInfo() {

        var student = new Student ();
        var studentInfo = student.getStudentData();
    
        return  this.subject + " " + studentInfo;
        
    }
    
    hasPassed() {
    
        var passed = [];
        var failed = []
    
        if (this.grade > 5) {
    
            passed.push(this.studentInfo);
    
        } else {
    
            failed.push(this.studentInfo);
        }
    };
    
}

var subject = new Subject("JavaScript");
var student = new Student("sanja");
var exam =  new Exam (subject, student, 10);
console.log(exam.getExamInfo());