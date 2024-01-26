const apiKey = "31a17c05dfa73715290501122f5f97bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.querySelector(".weather-icon");

// Set default city to Mumbai
checkWeather("Mumbai");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    setWeatherIcon(data.weather[0].main);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

function setWeatherIcon(weatherType) {
  switch (weatherType) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    default:
      weatherIcon.src = "images/default.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
