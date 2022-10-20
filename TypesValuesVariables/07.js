var usbStickInGB = 4;

var gbToMb = 1000;

var additionalMemoryInMb = usbStickInGB * gbToMb;


console.log(additionalMemoryInMb);


var newsArticleinKb = 98;

var gbToKb = 1000000;


var articles = (usbStickInGB * gbToKb) / newsArticleinKb; 

console.log(articles);
