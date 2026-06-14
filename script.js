let cityInput = document.querySelector(".cityInput");
let Btn = document.querySelector(".btn");
let temperature = document.querySelector(".temp");
let cityName = document.querySelector(".city-name");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

const apiKey = "77a3ced3e1d5a83e64521075c8237a44b";

async function checkWeather(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a3ced3e1d5a83e64521075c8237a44b`;

    let response = await fetch(url);
    let data = await response.json();

    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";
}

Btn.addEventListener("click", function () {
    checkWeather(cityInput.value);
});