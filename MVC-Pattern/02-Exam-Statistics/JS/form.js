var subject = document.querySelector("#programming-languages");
var nameAndSurname = document.querySelector("#name");
var selectGrade = document.querySelector("#grades");
var addButton = document.querySelector("#add-button");
var entryError = document.querySelector("#input-error");

var studentsPassedTotal = document.querySelector(".exam-passed");
var studentsFailedTotal = document.querySelector(".exam-failed");

var passedCount = document.querySelector(".count-passed");
var failedCount = document.querySelector(".count-failed");

var studentCounter = 0;
var passedCounter = 0;
var failedCounter = 0;

var totalNumberOfStudents = document.querySelector("#count");
var percentage = document.querySelector("#percentage");



// console.log(subject);
// console.log(nameAndSurname);
// console.log(selectGrade);
// console.log(addButton);
// console.log(entryError);

function collectAlllDataFromForm () {

    if (!subject.value || !nameAndSurname.value || !selectGrade.value) {
        entryError.textContent = "All fields are required!"
        return;

    }

    entryError.textContent = "";

    //var exam = new Exam (subject, nameAndSurname, selectGrade);

    var liPassed = document.createElement("li");
    var liFailed = document.createElement("li");
    var passedList = document.querySelector("#passed-list");
    var failedList = document.querySelector("#failed-list");

        if (selectGrade.value > 5) {
            //var exam = new Exam (subject, nameAndSurname, selectGrade);
            liPassed.textContent = nameAndSurname.value + 
            ", " + subject.value + ", " + selectGrade.value;
            liPassed.setAttribute("class", "passed");
            passedList.appendChild(liPassed);
            passedCounter++;

            passedCount.textContent = passedCounter;
            studentsPassedTotal.appendChild(passedCount);


        
        } else {

            liFailed.textContent = nameAndSurname.value + 
            ", " + subject.value + ", " + selectGrade.value;
            liFailed.setAttribute("class", "failed");
            failedList.appendChild(liFailed);
            failedCounter++;

            failedCount.textContent = failedCounter;
            studentsFailedTotal.appendChild(failedCount);

        }

        studentCounter = passedCounter + failedCounter;
        totalNumberOfStudents.textContent = studentCounter;

        var totalPassed = (passedCounter*100) / studentCounter;
        percentage.textContent = ", " + totalPassed.toFixed(2) + " %";

        subject.value = "";
        nameAndSurname.value = "";
        selectGrade.value = "";

}

addButton.addEventListener("click", collectAlllDataFromForm);
