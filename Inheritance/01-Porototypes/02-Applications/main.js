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

function WebApp(name, url, technologies, licence, stars) {

    Apps.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
    
}

WebApp.prototype = Object.create(Apps.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.getData = function () {
    
}

function MobileApp(name, platforms, licence, stars) {

    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.rating = stars;
    
}
