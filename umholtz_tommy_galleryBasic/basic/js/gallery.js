document.querySelector('h2').innerHTML = "East Asia <strong>Day Trips</strong>"

// ** ajax loads JS file

// variable to hold http request
let xhr = new XMLHttpRequest();

// create/opens a path/connection to external data with ajax which in this case is a .js file
// file hosted on github account – NH3R717
xhr.open('GET', 'https://raw.githubusercontent.com/NH3R717/umholtz_tommy_wd3/master/umholtz_tommy_galleryBasic/basic/ImageCaptionData.js', true);

// function – xhr loading above request after the page itself loads
xhr.onload = function () {

    // declaration of variables within xhr.onload function
    let data = JSON.parse(xhr.responseText);
    let bttnNext = document.querySelectorAll('button')[1]
    let bttnLast = document.querySelectorAll('button')[0]
    let showImages = document.querySelector('img')
    let locationText = document.querySelector('h3')
    let locationDescription = document.querySelectorAll('article p')[1]
    let countImg = 0
    infoImg(0)

    // replaces image in gallery.html/function loaded with click events
    function infoImg(index) {
        index
        locationText.innerHTML = data[index].place
        showImages.src = data[index].imageLink
        locationDescription.innerHTML = data[index].description
        showImages.description = data[index].description
    }
    // element.addEventListener(event, function, useCapture) 
    bttnNext.addEventListener("click", function (event) {
        // countImg is equal to it's self plus 1
        countImg += 1
        // if countImg is greater than or equal to the number of elements in the data array countImg is equal to zero
        if (countImg >= data.length) {
            countImg = 0
            // and call infoImg function passing countImg variable
            infoImg(countImg)
        }
        else {
            // call infoImg function passing countImg variable
            infoImg(countImg)
        }
    });

    // element.addEventListener(event, function, useCapture) 
    bttnLast.addEventListener("click", function (event) {
        // countImg is equal to it's self plus 1
        countImg -= 1
        // if countImg is less than number of elements in the data array countImg is equal to negative one
        if (countImg < 0) {
            countImg = data.length - 1
            // and call infoImg function passing countImg variable
            infoImg(countImg)
        }
        else {
            // call infoImg function passing countImg variable
            infoImg(countImg % data.length)
        }
    });
}
//close AJAX XMLHttpRequest connection
xhr.send(null);