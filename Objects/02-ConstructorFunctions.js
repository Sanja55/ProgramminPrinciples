function Project (description, programmingLanguage, git, status) {
    
        this.descriptionOfProject =  description;
        
        this.projectIsWrittenIn = programmingLanguage;
        
        this.gitRepository =  git;
        
        this.projectDevelopmentStatus =  status,
        
        this.printOutTheProjectGitRepository =  function () {
            
            console.log(project.gitRepository);
        };
        
        this.checkTheProgrammingLanguage = function () {
            
            if (project.projectIsWrittenIn === "JavaScript") {
                
                return true;
            
            } else {

                return false;
            }
            
        };
        
        
        this.checkProjectDevelopment =  function () {
            
            return project.projectDevelopmentStatus;
       } 

}

var appProject = new Project ("This project is about...", "JavaScript", "Sanja55", "Work in progress");

console.log(appProject);


// create recipe

function Recipe (name, cuisine, complexity, ingredients, prepTime, prepInstructions) {

        this.dishName = name;

        this.typeOfCuisine = cuisine;

        this.complexity = complexity;

        this.listOfIngredients = ingredients;

        this.preparationTime = prepTime;

        this.preparingInstructions = prepInstructions;

        this.printOutAllIngredients = function () {

            console.log(this.listOfIngredients);
            
        };

        this.checkMealPreparation = function () {

            if (this.preparationTime <= 15) {

                console.log(this.name + "is easy to make!");
            
            } else {

                console.log("You will need a few extra moments to make " + this.dishName);
            }
            
        },

        this.changeTheTypeOfCuisine =  function (newType) {

            culinaryRecipe.typeOfCuisine = newType;
        
        },

        this.removeIngredientFromTheList =  function (ingredient) {

            for (var i = 0; i < culinaryRecipe.listOfIngredients.length; i++) {

                if (culinaryRecipe.listOfIngredients[i] === ingredient) {

                    delete culinaryRecipe.listOfIngredients[i];
                }
            }
            
        }

}

var culinaryRecipe = new Recipe ("Pasuljcina", "Domaca, srpska", 3, ["pasulj", "crni luk", "sargarepa", "paprika", "voda"], 60, "metod pripreme");

console.log(culinaryRecipe);

console.log(culinaryRecipe.dishName);

console.log(culinaryRecipe instanceof Recipe);

