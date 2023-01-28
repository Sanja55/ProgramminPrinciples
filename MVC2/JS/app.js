(function(ui,data) {
    
    var createMovieButton = document.querySelector("#create-movie-button");
    var createProgramButton = document.querySelector("#create-program-button");
    var addMovieButton = document.querySelector("#add-movie-button");
    
    var onMovieCreateClickHandler = function() {

      var formData = ui.collectMovieData();
      //console.log(formData);
      
      var isValid = ui.validateData(formData);
        if(!isValid) {

            return;
        }

      var createMovie = data.createMovie();
      
      return createMovie();

   
    }

    var onProgramCreateClickHandler = function() {


    }
    var onAddMovieToPrgramClickHandler = function() {
    }
    createMovieButton.addEventListener("click", onMovieCreateClickHandler);
    createProgramButton.addEventListener("click", onProgramCreateClickHandler);
    addMovieButton.addEventListener("click", onAddMovieToPrgramClickHandler);

    })(ui, data);