const APP_ID = '6afb4b7a1aed870173883486354769d9';
const DEFAULT = '--';
const searchInput = document.querySelector('#search-input');

const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const humidityValue = document.querySelector('.humidity-value');
const windSpeed = document.querySelector('.wind-speed');

var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
var calculaterBox = document.getElementById("calculaterBox");
var weather = document.getElementById("weather");

calculaterBox.style.opacity = "0";

menu.onclick = function () {
   if (calculaterBox.style.opacity == "0") {
      calculaterBox.style.opacity = "1";
      calculaterBox.style.zIndex = "2";
      menuIcon.src = "img/cloudy.png";
      weather.style.opacity="0";
   }
   else {
      menuIcon.src = "img/calculator.png";
      weather.style.opacity="1";
      calculaterBox.style.opacity = "0";
      calculaterBox.style.zIndex = "0";
   }
};



searchInput.addEventListener('change', (e) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
      .then(async res => {
         const data = await res.json();
         console.log('[SearchInput]', data);
         cityName.innerHTML = data.name || DEFAULT;
         weatherState.innerHTML = data.weather[0].description || DEFAULT;
         weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
         temperature.innerHTML = data.main.temp || DEFAULT;
         humidityValue.innerHTML = data.main.humidity || DEFAULT;
         windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT;
      });
})

