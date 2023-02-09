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
        var subject = new Subject ();
        var studentInfo = student.getStudentData();
    
        return  subject + " " + studentInfo;
        
    }
    
    hasPassed() {
    
        if (this.grade > 5) {
    
            return true;
    
        } else {
    
            return false;
        }
    };
    
}

// var subject = new Subject("JavaScript");
// var student = new Student("sanja");
// var exam =  new Exam (subject, student, 10);
// console.log(exam.getExamInfo());