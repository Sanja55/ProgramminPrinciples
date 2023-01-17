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

function Apps (name, licence, stars) {
    
    this.name = name;
    this.licence = licence;
    this.rating = stars;
}

Apps.prototype.getData = function() {
    return(this.name + " " + this.licence + " " + this.rating);
}

Apps.prototype.isCCLicence = function () {
    return this.licence === "CC";
}

Apps.prototype.like = function () {
    return this.rating + 1;
}
Apps.prototype.showStars = function () {
    return this.rating;
}

function WebApp(name, url, technologies, licence, stars) {

    Apps.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
    
}


WebApp.prototype = Object.create(Apps.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.reactBased = function () {
    if (this.technologies === "React") {
        return true;
    } else {
        return false;
    }
}

function MobileApp(name, platforms, licence, stars) {

    Apps.call(this, name, licence, stars)
    this.platforms = platforms;    
}

MobileApp.prototype = Object.create(Apps.prototype);
MobileApp.prototype.constructor = MobileApp;
MobileApp.prototype.forAndroid = function () {
    if(this.platforms === "Android") {
        return true;
    } else {
        return false;
    }
}

var webApp = new WebApp("Google ext", "www.google.com", "React", "CC", 3);
console.log(webApp);
console.log(webApp.getData());
console.log(webApp.rating);
console.log(webApp.technologies);
console.log(webApp.reactBased());
console.log(webApp.like());
console.log(webApp.showStars());
console.log(webApp.constructor);

var mobileApp = new MobileApp("Space Invaders", "Android", "BB", 2);
console.log(mobileApp);
console.log(mobileApp.getData());
console.log(mobileApp.forAndroid());
console.log(mobileApp.like());
console.log(mobileApp.showStars());
console.log(mobileApp.constructor);





