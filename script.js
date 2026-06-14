let cityInput = document.querySelector(".cityInput");
let Btn = document.querySelector(".btn");
let temperature = document.querySelector(".temp");
let cityName = document.querySelector(".city-name");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon")

const apiKey = "77a3ced3e1d5a83e64521075c8237a44b";

async function checkWeather(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a3ced3e1d5a83e64521075c8237a44b`;

    let response = await fetch(url);
    let data = await response.json();
    
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";

    if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
}
else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
}
else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
}
else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
}
else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
}
else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
}
  
}

Btn.addEventListener("click", function () {
    checkWeather(cityInput.value);
});