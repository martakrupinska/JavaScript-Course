const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=1340895a93c25bc27fc954c456f13c7a';
const API_UNIT = '&units=metric';

const getWeather = () => {
	const city = input.value || 'London';
	const URL = API_URL + city + API_KEY + API_UNIT;

	axios
		.get(URL)
		.then((res) => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const weat = Object.assign({}, ...res.data.weather); // res.data.weather[0].main;
			const WeatherId = weat.id;
			let icon;

			cityName.textContent = res.data.name;
			temperature.textContent = Math.round(temp) + '°C';
			humidity.textContent = Math.round(hum) + '%';
			weather.textContent = weat.main;

			warning.textContent = '';
			input.value = '';

			if (WeatherId >= 200 && WeatherId < 300) {
				icon = 'thunderstorm';
			} else if (WeatherId >= 300 && WeatherId < 400) {
				icon = 'drizzle';
			} else if (WeatherId >= 500 && WeatherId < 600) {
				icon = 'rain';
			} else if (WeatherId >= 600 && WeatherId < 700) {
				icon = 'snow';
			} else if (WeatherId >= 700 && WeatherId < 800) {
				icon = 'fog';
			} else if (WeatherId === 800) {
				icon = 'sun';
			} else if (WeatherId > 800 && WeatherId < 900) {
				icon = 'cloud';
			} else {
				icon = 'unknown';
			}

			photo.setAttribute('src', './img/' + icon + '.png');
		})
		.catch(() => (warning.textContent = 'Wpisz poprawną nazwę miasta!'));
};

const enterKey = (e) => {
	if (e.key === 'Enter') {
		getWeather();
	}
};

button.addEventListener('click', getWeather);
input.addEventListener('keydown', enterKey);
