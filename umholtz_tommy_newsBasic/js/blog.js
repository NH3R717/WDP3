// ** ajax loads JSON file

// variable for http request
var xhr = new XMLHttpRequest();

// create/opens a path/connection to external data with ajax which in this case is a .json
// file hosted on my github account
xhr.open('GET', 'https://raw.githubusercontent.com/NH3R717/umholtz_tommy_WD3/master/umholtz_tommy_newsBasic/tourSpot.json', true);

// function – xhr loading above request after the page itself loads
xhr.onload = function () {

	// variable that parses JSON data and saves locally
	var data = JSON.parse(xhr.responseText);

	// ** inserts HTML data into section

	// variable that looks to data section id tag in html document (with querySelector method) where ajax called data will be inserted
	var EAtourSpots = document.querySelector('#blog');

	// limits 
	if (EAtourSpots) {

		var tourSpots = "";

		for (var i = 0; i < data.tourSpots.length; i++) {

			tourSpots += '<article>';

			//loads image from my github repo
			tourSpots += '<p class="thumbnail"><img src="' + data.tourSpots[i].imageLink + '" alt="' + data.tourSpots[i].tourSpots + '"></p>';

			//title
			tourSpots += '<h2>' + data.tourSpots[i].title + '</h2>';
			//activity description
			tourSpots += '<p>' + data.tourSpots[i].description + '</p>';
			//adds space between lines
			tourSpots += '<p>' + data.tourSpots[i].lineBreak + '</p>';
			//city
			tourSpots += '<h4>' + data.tourSpots[i].city + '</h4>';
			//airport code
			tourSpots += '<h4>' + data.tourSpots[i].airportCode + '</h4>';
			//local currency
			tourSpots += '<h4>' + data.tourSpots[i].localCurrency + '</h4>';
			//external link
			tourSpots += '<a href=' + data.tourSpots[i].externalLink + '>' + "More Info" + '</a>';
			//close article tag

			tourSpots += '</article>';

		}

		EAtourSpots.querySelector('h2').insertAdjacentHTML('afterend', tourSpots);

	}

}

// closes ajax path
xhr.send(null);

// selects <section id="blog"> in news.html to alter "<h2>Latest <strong>News</strong></h2>" text
document.querySelector("#blog h2").innerHTML = "<strong><h1>East Asia</strong></h1> Tour Spots";
//document.querySelector("#blog h2").innerHTML = "<p><font color="green"><strong>East Asia</strong> Tour Spots</font></p>";

// selects <section id="blog"> in news.html to alter < p > <button>Load More</button></p > text and add click event opening linked url in a new window / tab
document.querySelector("#blog button").innerHTML = '<p onclick=newWindow()> East Asia Travel Wiki</p>'

// link window to East Asia travel site
function newWindow() {
	window.open("https://wikitravel.org/en/East_Asia")
};