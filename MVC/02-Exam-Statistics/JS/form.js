var subject = document.querySelector("#subjects");
var nameAndSurname = document.querySelector("#name");
var selectGrade = document.querySelector("#grades");
var addButton = document.querySelector("#add-entry");
var entryError = document.querySelector("#entry-error");

var studentsPassedTotal = document.querySelector("#passed-total");
var studentsFailedTotal = document.querySelector("#failed-total");

var passedCount = document.querySelector("#passed-count");
var failedCount = document.querySelector("#failed-count");


var studentCounter = 0;
var passedCounter = 0;
var failedCounter = 0;



console.log(subject);
console.log(nameAndSurname);
console.log(selectGrade);
console.log(addButton);
console.log(entryError);

function collectAlllDataFromForm () {

    if (!subject.value || !nameAndSurname.value || !selectGrade.value) {
        entryError.textContent = "All fields are required!"
        entryError.style.color = "red";

        entryError.textContent = "";
    
    }

        var exam = new Exam (subject, nameAndSurname, selectGrade);
        var liPassed = document.createElement("li");
        var liFailed = document.createElement("li");
        var passedList = document.querySelector("#passed-list");
        var failedList = document.querySelector("#failed-list");

        if (selectGrade.value > 5) {

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

        subject.value = "";
        nameAndSurname.value = "";
        selectGrade.value = "";

}


addButton.addEventListener("click", collectAlllDataFromForm);