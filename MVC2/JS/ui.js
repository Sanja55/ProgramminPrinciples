var ui = (function() {

    

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

function collectMovieData () {

    var title = inputMovieTitle.value;
    var length =inputMovieLength.value;
    var genre = selectGenre.value;

    return {

        title: title,
        lenght: length,
        genre: genre
    }
}

function validateData (formData) {

    if(!formData.title || !formData.lenght || !formData.genre) {

    errorMovieParagraph.textContent = "Invalid input!";

    return false;

    } 

    return true;

}

function addMovieToList () {
    
    //get input from user
    var inputTitleValue = inputMovieTitle.value;
    var inputLengthValue = inputMovieLength.value;
    var genreValue = selectGenre.value;

   

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

    // if (!dateInputValue) {
    //     errorProgramParagraph.textContent = "Date is required!";
    //     errorProgramParagraph.style.color = "red";
    //     return;
    // }

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


return {
    collectMovieData: collectMovieData,
    validateData: validateData,

}

})();

