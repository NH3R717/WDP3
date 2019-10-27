// background image change change
document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/NH3R717/umholtz_tommy_wd3/master/umholtz_tommy_final/Images/toyko_background.jpg')";

//anonymous function to handle XHR connections
(function () {
	function weatherData() {
		// function variables and function call
		const url = "http://api.openweathermap.org/data/2.5/weather?q=Tokyo,Japan&appid=752eccc4d76263ad69799217910d067f";
		console.log(url);
		let xhr;

		makeRequest();

		// nested function – create and send an XHR request
		function makeRequest() {
			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = responseMethod;
			xhr.open('GET', url);
			xhr.send();
		}
		// nested function – handle XHR response
		function responseMethod() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					updateUISuccess(xhr.responseText);
				} else {
					// this page is busted
				}
				//console.log(xhr.responseText);
			}
		}
		// nested function – execute code based on successfully pulling data from XHR request
		function updateUISuccess(responseText) {
			var response = JSON.parse(xhr.responseText);
			var condition = response.weather[0].description;
			var weatherBox = document.querySelector('h2');
			weatherBox.innerHTML = "<p>" + "Tokyo's Current Weather – " + condition + "</p>";
		}
	};

	weatherData();


	function dataFill() {
		
		const url = "https://raw.githubusercontent.com/NH3R717/umholtz_tommy_wd3/master/umholtz_tommy_final/location.json";
		let xhr;
		console.log(url);
		makeRequest();

		// nested function – create and send an XHR request
		function makeRequest() {
			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = responseMethod;
			xhr.open('GET', url);
			xhr.send();
		}
		// nested function – handle XHR response
		function responseMethod() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					updateUISuccess(xhr.responseText);
				} else {
					// this page is busted
				}
				// console.log(xhr.responseText);
			}
		}
		// nested function – execute code based on successfully pulling data from XHR request
	
		function updateUISuccess(responseText) {
			const data = JSON.parse(xhr.responseText)		
			locationSection = document.querySelector('#blog');

			// console.log(xhr.responseText);
			
			if (locationSection) {

				var tourSpots = "";
		
				for (var i = 0; i < data.tourSpots.length; i++) {
		
					tourSpots += '<article>';
		
					//loads image from my github repo
					tourSpots += '<p class="thumbnail"><img src="' + data.tourSpots[i].imageLink + '" alt="' + data.tourSpots[i].tourSpots + '"></p>';
		
					//title
					tourSpots += '<h2>' + data.tourSpots[i].title + '</h2>';
					//activity description
					tourSpots += '<p>' + data.tourSpots[i].description + '</p>';

					tourSpots += '</article>';
		
				}
		
				locationSection.querySelector('h2').insertAdjacentHTML('afterend', tourSpots);
		
			}
		}
	};

	dataFill();
	console.log(dataFill);

})();
