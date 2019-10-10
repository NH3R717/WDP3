document.querySelector('h2').innerHTML = "East Asia <strong>Day Trips</strong>"

// ** ajax loads JS file

// variable for http request
let xhr = new XMLHttpRequest();

// create/opens a path/connection to external data with ajax which in this case is a .js
// file hosted on my github account
xhr.open('GET', 'https://raw.githubusercontent.com/NH3R717/umholtz_tommy_wd3/master/umholtz_tommy_galleryBasic/basic/ImageCaptionData.js', true);

console.log(xhr)

// function – xhr loading above request after the page itself loads
xhr.onload = function () {

    // declaration of variables within xhr.onload()
    let data = JSON.parse(xhr.responseText);
    let bttnNext = document.querySelectorAll('button')[1]
    let bttnLast = document.querySelectorAll('button')[0]
    let showImages = document.querySelector('img')
    let locationText = document.querySelector('h3')
    let locationDescription = document.querySelectorAll('article p')[1]
    let countImg = 0
    infoImg(0)

    console.log(showImages);

    // replaces image in gallery.html/fucntion loaded with click events
    function infoImg(index) {
        index
        locationText.innerHTML = data[index].place
        showImages.src = data[index].imageLink
        locationDescription.innerHTML = data[index].description
        showImages.description = data[index].description
    }

    bttnNext.addEventListener("click", function (event) {
        countImg += 1
        if (countImg >= data.length) {
            countImg = 0
            infoImg(countImg)
        }
        else {
            infoImg(countImg)
        }
    });

    bttnLast.addEventListener("click", function (event) {
        countImg -= 1
        if (countImg < 0) {
            countImg = data.length - 1
            infoImg(countImg)
        }
        else {
            infoImg(countImg % data.length)
        }
    });
}
xhr.send(null);