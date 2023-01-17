/**Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars

2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React

3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars */

class Apps {

    constructor (name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.rating = stars;
    }

    getData () {
        console.log(this.name, this.licence, this.rating);
    }

    isCCLicence () {
        if (this.licence === "CC") {
            return true;
        } else {
            return false;
        }
    }
    
    like () {
         console.log(this.rating + 1);
    }

    showStars () {
        return this.rating;
    }
}

class WebApp extends Apps {

    constructor (name, url, technologies, licence, stars) {
        
        super (name, licence, stars);
        this.url = url;
        this.technologies = technologies;
        
    }

    getData () {
        console.log(this.name + ", " +  this.url + ", " + this.technologies
            + ", " + this.licence + ", " + this.rating);
    }

    reactBased () {
        
        if(this.technologies === "React") {
            return true;
        } else {
            return false;
        }
    }
}


class MobileApp extends Apps {

    constructor (name, platforms, licence, stars) {
        
        super(name, licence, stars);
        this.platforms = platforms;
    }

    getData () {
        console.log(this.name, this.platforms, this.licence, this.rating);
    }

    forAndroid () {
        if (this.platforms === "Android") {
            return true;
        }else{
            return false;
        }
    }

}

var app = new Apps ("ime", "CC", 3)

console.log(app);
app.getData();
app.like();

var web = new WebApp('ime', "www.google.com", "React", "CC", 4)

web.getData();
console.log(web.reactBased());
console.log(web.constructor);

var mobile = new MobileApp ("ime", "Android", "CC", 2);
console.log(mobile);
mobile.getData();
console.log(mobile.forAndroid());
console.log(mobile.constructor);












