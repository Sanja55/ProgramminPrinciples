var festival = new Festival();

//buttons
var createMovieButton = document.querySelector("#create-movie-button");
var createProgramButton = document.querySelector("#create-program-button");
var addMovieButton = document.querySelector("#add-movie-button");


//input elements
var inputMovieTitle = document.querySelector("#movie-title");
var inputMovieLength = document.querySelector("#movie-length");



//select

var selectGenre = document.querySelector("#genre");

var errorMovieParagraph = document.querySelector(".error-movie-paragraph");
var movieList = document.querySelector(".movie-list"); 
var dateInput = document.querySelector("#date");
var errorProgramParagraph = document.querySelector(".error-program-paragraph");
var programList = document.querySelector(".program-list");
var selectMovieList = document.querySelector("#select-movie-list");
var selectProgramList = document.querySelector("#select-program-list");
var errorMovieToProgram = document.querySelector(".error-movie-to-program");
var finalAddProgramList = document.querySelector(".final-add-program-list");

function addMovieToList () {
    
    //get input from user
    var inputTitleValue = inputMovieTitle.value;
    var inputLengthValue = inputMovieLength.value;
    var genreValue = selectGenre.value;

    //validate all inputs
    if (!inputTitleValue || !inputLengthValue || !genreValue) {
        errorMovieParagraph.textContent = "All fields are required!"
        errorMovieParagraph.style.color = "red";
        return;
    }

    errorMovieParagraph.textContent = "";

    var movie = new Movie(inputTitleValue, inputLengthValue, genreValue);
    festival.movieList.push(movie);

    var movieListItem = document.createElement("li");
    movieListItem.textContent = movie.getData();
    movieList.appendChild(movieListItem);

    
    inputMovieTitle.value = "";
    inputMovieLength.value = "";
    selectGenre.value = "";

    var movieOption = document.createElement("option");
    movieOption.textContent = movie.getData();
    var index = festival.movieList.length-1;
    movieOption.setAttribute("value", index);
    selectMovieList.appendChild(movieOption);
}

function addProgram () {

    var dateInputValue = dateInput.value;

    console.log(dateInputValue);

    if (!dateInputValue) {
        errorProgramParagraph.textContent = "Date is required!";
        errorProgramParagraph.style.color = "red";
        return;
    }

    var date = new Date(dateInputValue);

    var program = new Program (date);
    festival.programList.push(program);
    var index = festival.programList.length-1;
    var programListItem = document.createElement("li");
    console.log(programListItem);
    programListItem.setAttribute("class", "plus" + index);
    programListItem.textContent = program.getData();
    programList.appendChild(programListItem);

    dateInput.value = "";

    var programOption = document.createElement("option");
    programOption.setAttribute("value", index);
    programOption.textContent = program.getData();
    selectProgramList.appendChild(programOption)

}

function finalAdd() {

    var movieListIndex = selectMovieList.value;
    var programListIndex = selectProgramList.value; 
    //console.log({value: movieListIndex});

    if (!movieListIndex || !programListIndex) {

        errorMovieToProgram.textContent = "Invalid selection!";
        //errorMovieToProgram.style.color = "red";
        return;
    }

    var movie = festival.movieList[movieListIndex];
    var program = festival.programList[programListIndex];

    program.addMovie(movie);

    var finalAddListItem = document.createElement("li");
    finalAddListItem.setAttribute("class", "program-item-" + programListIndex);
    finalAddListItem.textContent = program.getData() + movie.getData();
    finalAddProgramList.appendChild(finalAddListItem);

    
}



createMovieButton.addEventListener("click", addMovieToList);
createProgramButton.addEventListener("click", addProgram);
addMovieButton.addEventListener("click", finalAdd);