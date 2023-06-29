const apikey = "a1926ea4c7c9a2815026ea25950d11a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icons")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        let data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcons.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcons.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcons.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcons.src = "img/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcons.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcons.src = "img/snow.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcons.src = "img/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

