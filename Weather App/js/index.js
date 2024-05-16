const apiKey = "16d5776600a0400d0cc2d9ab6f524af4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.scr = "/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/img/Mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
