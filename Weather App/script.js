const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '996f2f2703msh646551d75528fb0p1a4f45jsne6f26e0563c2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees

		})


		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)

})

getWeather("Mumbai")