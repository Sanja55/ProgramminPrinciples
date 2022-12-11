/* 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

// don't drink coffee, but in need to solve this task, I'll make one :o)

var myCoffee  = {

    coffeeName: "Scented Winter Coffee",

    coffeeStrength: "Strong",

    typeOfCoffee: "Espresso based coffee",

    addedFlavors: ["Vanilla", "Cinnamon", "Orange Zest", "Cardamom"],

    sweetener: ["Brown Sugar",  "Muscavado Sugar", "Coconut Sugar", "Agave", "Maple Syrup"],

    milk: ["Non-dairy, plant-based milk", "high-fat milk"],

    secretIngredient: ["Raw Cocoa", "Dark Chocolate", "White Chocolate"]

}


console.log(myCoffee.coffeeName);

console.log(myCoffee.typeOfCoffee);

console.log(myCoffee.secretIngredient);





/**2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity. */


var myFavoriteMovie = {

    nameOfTheMovie: "Blade Runner",

    starring: ["Harrison Ford", "Rutger Hauer", "Sean Young", "Daryl Hannah"],

    characters: ["Rick Deckard", "Roy Batty", "Rachel", "Pris"],

    directedBy: "Ridley Scott",

    screenPlay: ["Hampton Fancher", "David Peoples"],

    music: "Vangelis",

    basedOnTheBook: {
        
        title: "Do Androids Dream of Electric Sheep?",

        autor: "Philip K. Dick",

        country: "United States",

        language: "English",

        publicationDate: 1968,

        publisher: "Doubleyday",

        genre: ["Science Fiction", "Philosophical Fiction", "Noir Fiction"],

        pages: 210
    
    },

    distributedBy: "Warner Bros",

    releaseDate: "June 25, 1982.",

    runningTime: "117 minutes",

    countries: ["United States", "Hong Kong"],

    language: "English", 

    budget: "$30 million",

    boxOffice: "$41.6 million",

}


/**3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

var project = {};

project.projectDesription =  "This project is about ... ";

project.programmingLanguage = "JavaScript";

project.gitRepository = "Sanja55";

project.projectIsInDevelopment = true;

project.printRepository = function () {

    return project.gitRepository;
    
}

project.checkIfProjectIsWrittenInJavaScript = function () {

    if (project.programmingLanguage === "JavaScript") {

        return true;
    
    } else {

        return false;
    }
    
}

project.checkIfProjectIsInDevelopment = function () {
    
    if (project.projectIsInDevelopment === true) {

        return true;
    
    } else {

        return false;
    }
}

console.log(project.printRepository());

console.log(project.checkIfProjectIsWrittenInJavaScript());

console.log(project.checkIfProjectIsInDevelopment());

/************************ The real deal *****************************/


function createProject(description, programmingLanguage, git, status) {
    
    var project = {
        
        descriptionOfProject: description,
        
        projectIsWrittenIn: programmingLanguage,
        
        gitRepository: git,
        
        projectDevelopmentStatus: status,
        
        printOutTheProjectGitRepository: function () {
            
            return project.gitRepository;
        },
        
        checkTheProgrammingLanguage: function () {
            
            if (project.projectIsWrittenIn === "JavaScript") {
                
                return true;
            
            } else {

                return false;
            }
            
        },
        
        
        checkProjectDevelopment: function () {
            
            return project.projectDevelopmentStatus;
       } 
    }
    
    return project;
}

var newProject = createProject ("This project is about..", "JavaScript", "Sanja55", "Work in progress...")

console.log(newProject);

console.log(newProject.projectDevelopmentStatus);

console.log(newProject.printOutTheProjectGitRepository());

console.log(newProject.checkTheProgrammingLanguage());



/**4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */


function createCulinaryRecipe () {

    var culinaryRecipe = {

        name: "Beetroot Falafel",

        typeOfCuisine: ["Middle Eastern", "Lebanese"],

        category: "Appetizer",

        method: ["Baked", "Fried"],

        complexity: "3 / 5",

        prepTime: "30 minutes",

        cookTime: "30 minutes",

        totalTime: "1 hour + 8h chickpea soaking",

        ingredients: ["1 small onion, chopped", "2 garlic cloves, chopped", "1/2 coriander leaves", "400 g soaked chickpeas",
        
                    "1 large beetroot, peeled, grated", "1/4 cup of tahini", "3 teaspoons ground cumin", "1 cup Greek-style yoghurt",
                    
                    "2 tablespoons of lemon juice", "1 teaspoon of ground coriander", "1/4 cup vegetable oil", "4 pita pockets", "bunch of parsley, leaves picked",
                
                    "1 tomato, seeded, diced", "1 shallot, thinly sliced", "1 tablespoon extra virgin olive oil"],

        healthScore: "High - 8.8 / 10",

        energyPerServing: "2621 kJ / 626 kCal",

        preparingInstruction: "Step 1: Process the onion, garlic and coriander in a small food processor until finely chopped. Transfer to a bowl. Add the mashed chickpeas, beetroot, tahini and 2 teaspoons of cumin. Season well. Mix to combine. Roll 1-tablespoons portions of the falafel mixture into small balls and place on a tray. Chill for 15 mins. \n \n Step 2: Meanwhile, to make the parsley salad, place the parsley, tomato, shallot and oil in a bowl. Season well and toss to combine. \n \n Step 3: Combine the yoghurt, lemon juice, ground coriander and remaining cumin in a bowl. \n \n Step 4: Heat 1 tablespoon oil in a large frying pan over high heat. Cook the pita, 1 at a time, for 1-2 mins each side or until golden, then transfer to a plate lined with paper towel. Heat remaining oil in the pan over medium heat. Cook the falafel, turning, for 4-5 mins or until browned all over. \n \n Step 5: Serve the falafel with the pita, yoghurt sauce and parsley salad.",

        printOutAllIngredients: function () {
            
            return this.ingredients;
        },

        preparationTime: function () {

            if (createCulinaryRecipe.totalTime <= 15) {

                return "The meal can be prepared in under 15 minutes/"
            
            } else {

                return "The meal needs a few more moments for preparation."
            }
        },

        changeTheTypeOfCuisine: function () {

           for (var i = 0; i < this.typeOfCuisine.length; i++) {

            this.typeOfCuisine = "Exotic";
           }

           return this.typeOfCuisine;
        },

        deleteTheIngredient: function (ingredient) {

            for (var i = 0; i < this.ingredients.length; i++) {

                if (this.ingredients[i] === ingredient) {

                    
                delete this.ingredients[i];
                
                }   

            }

            return this.ingredients;
        } 

    
    }

    return culinaryRecipe;
    
}

//console.log(createCulinaryRecipe());

console.log(createCulinaryRecipe().changeTheTypeOfCuisine());

console.log(createCulinaryRecipe().deleteTheIngredient("1 shallot, thinly sliced"));

console.log(createCulinaryRecipe().preparationTime());


/********************************* The real deal *********************************/

function createTheRecipe (name, cuisine, complexity, ingredients, prepTime, prepInstructions) {

    var culinaryRecipe = {

        dishName: name,

        typeOfCuisine: cuisine,

        complexity: complexity,

        listOfIngredients: ingredients,

        preparationTime: prepTime,

        preparingInstructions: prepInstructions,

        printOutAllIngredients: function () {

            return culinaryRecipe.listOfIngredients;
            
        },

        checkMealPreparation: function (prepTime) {

            if (prepTime <= 15) {

                return culinaryRecipe.dishName + "is easy to make!";
            
            } else {

                return "You will need a few extra moments to make " + culinaryRecipe.dishName + "!";
            }
            
        },

        changeTheTypeOfCuisine: function (newType) {

            culinaryRecipe.typeOfCuisine = newType;

            return culinaryRecipe.typeOfCuisine;
        
        },

        removeIngredientFromTheList: function (ingredient) {

            var newListOfIngredinets = [];

            for (var i = 0; i < culinaryRecipe.listOfIngredients.length; i++) {

                if (culinaryRecipe.listOfIngredients[i] !== ingredient) {

                    newListOfIngredinets[newListOfIngredinets.length] = culinaryRecipe.listOfIngredients[i];
                }
            }
            
            return newListOfIngredinets;
        }


    }

    return culinaryRecipe;
    
}

var newRecipe = createTheRecipe("Beetroot Falafel", "MiddleEastern, Lebanese", 3, ["Cheakpeas", "Beetroot", "Small Onion", "2 garlic cloves", "Lemon juice", "Bunch of parsley", "Coriander"], 60, "Prep method desription...")

console.log(newRecipe);

console.log(newRecipe.checkMealPreparation(60));

console.log(newRecipe.removeIngredientFromTheList("Lemon juice"));

console.log(newRecipe.changeTheTypeOfCuisine("Lebanese"));

console.log(newRecipe.printOutAllIngredients());











