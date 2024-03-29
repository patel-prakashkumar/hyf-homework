const cityInput = document.getElementById('input-city')
const btnSubmit = document.getElementById('btn-submit')
const weatherDesUL = document.getElementById('weather-dec')
const disTemp = document.querySelector('div .temp')
const disCityDetail = document.querySelector('div .city-detail')
const bgImg = document.querySelector('div .dis-part1')
const disIcon = document.querySelector('div .weather-Icon')
const disSunTime = document.getElementById('sun-time')
const gmtDateTime = new Date().toUTCString();
const randerMap = document.getElementById('display-map')
const apiKey = `aff81a037c13a860266157fd7cec79ed`
let inputCityName = "copenhagen"
btnSubmit.addEventListener('click', () => {
    inputCityName = cityInput.value;
    console.log(inputCityName)
    if (!inputCityName) {
        alert('enter city name')
    }
    display();
});

const render = (data) => {
    disSunTime.innerHTML = `
        <h6>Sunrise: ${data.sunriseGMT.toUTCString()}</h6>
        <h6>Sunset: ${data.sunsetGMT.toUTCString()}</h6>
    `
    disTemp.innerHTML = `
    <h2>Temperature</h2>
    <h2>${Math.floor(data.temp)} °C</h2> 
    <h2> ${Math.floor(data.fahrenheit)} °F</h2> 
    <h2>Wind Speed</h2> 
    <h3> ${Math.floor(data.speed)} m/s</h3>
    `
    disCityDetail.innerHTML = `
    <h1>${data.cityName ?? "Current Location"}</h1
    ><h6> ${gmtDateTime}</h6>
    `
    let imgIcon = document.createElement('img');
    disIcon.innerHTML = `
    <h3>${data.main}</h3>
    `
    disIcon.appendChild(imgIcon).setAttribute("src", data.iconUrl)
    weatherDesUL.innerHTML = `
    <li>Description: ${data.description}</li> 
    <li>Feel like: ${Math.floor(data.feels_like)} °C</li> 
    <li>Temp Min: ${Math.floor(data.temp_min)} °C</li> 
    <li>Temp Max: ${Math.floor(data.temp_max)} °C</li> 
    <li>Humidity: ${data.humidity}</li>
    `
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + inputCityName + ")"
}

const display = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(weatherData => {
            const { temp, feels_like, humidity, temp_max, temp_min } = weatherData.main;
            const { speed } = weatherData.wind
            console.log(speed)
            const fahrenheit = (temp * 9) / 5 + 32;
            const cityName = weatherData.name;
            const { description, icon, main } = weatherData.weather[0];
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(iconUrl);
            const { sunrise, sunset } = weatherData.sys;
            const sunriseGMT = new Date(sunrise * 1000);
            const sunsetGMT = new Date(sunset * 1000);
            render({ sunriseGMT, sunsetGMT, temp, fahrenheit, speed, cityName, main, iconUrl, description, feels_like, temp_min, temp_max, humidity });
            randerMap.innerHTML = `<iframe src = "https://maps.google.com/maps?q=${inputCityName}&hl=es;z=14&amp;output=embed" ></iframe>`

        });
}
inputCityName = "copenhagen"
display();
const btnLocation = document.getElementById('btn-location')
let x;
let y;
btnLocation.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        x = position.coords.latitude;
        y = position.coords.longitude;
        console.log(x)
        console.log(y)

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(weatherData => {
                const { temp, feels_like, humidity } = weatherData.current;
                const { max, min } = weatherData.daily[0].temp
                const { wind_speed } = weatherData.current
                const fahrenheit = (temp * 9) / 5 + 32;
                const { description, icon, main } = weatherData.current.weather[0];
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                console.log(iconUrl);
                const { sunrise, sunset } = weatherData.current;
                const sunriseGMT = new Date(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);
                render({ sunriseGMT, sunsetGMT, temp, fahrenheit, speed: wind_speed, main, iconUrl, description, feels_like, temp_min: min, temp_max: max, humidity });
                randerMap.innerHTML = `<iframe src = "https://maps.google.com/maps?q=${x},${y}&hl=es;z=14&amp;output=embed"></iframe>`

            });
    })
}) 