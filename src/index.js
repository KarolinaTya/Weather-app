/// date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let currentDate = document.querySelector("h3");
currentDate.innerHTML = `${day}, ${hour}:${minute}`;
///2
function citySearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#enter-city");
  let city = document.querySelector("#city");
  city.innerHTML = `${searchCity.value}`;

  search(searchCity.value);
}

function search(city) {
  let apiKey = `adfa719b9f341fd355c2c474c025264d`;
  let units = "metric";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiurl).then(showTemperature);
}

let cityForm = document.querySelector("#current-weather");
cityForm.addEventListener("submit", citySearch);

///api
function showTemperature(result) {
  let temperature = result.data.main.temp;
  let roundTemp = Math.round(temperature);
  let currentTemp = document.querySelector("#weather");
  let currentCity = document.querySelector("#city");
  let city = result.data.name;
  let country = result.data.sys.country;
  currentTemp.innerHTML = `${roundTemp}`;
  currentCity.innerHTML = `${city},${country}`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `adfa719b9f341fd355c2c474c025264d`;
  let units = "metric";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiurl).then(showTemperature);
}
function getposition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let getlocation = document.querySelector("#location-button");
getlocation.addEventListener("click", getposition);

// weather metricks
function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = document.querySelector("#weather");
  fahrenheitTemp.innerHTML = "66";
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);

function showCelcius(event) {
  event.preventDefault();
  let celcius = document.querySelector("#weather");
  celcius.innerHTML = "19";
}
let celciusTemp = document.querySelector("#celcius");
celciusTemp.addEventListener("click", showCelcius);
