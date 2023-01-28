class Subject {

    constructor(subjectName) {

    this.name = subjectName;
}

getSubjectName () {

    return this.subjectName;
}
}

var subject = new Subject ("JavaScript");
console.log(subject);

subject.getSubjectName();