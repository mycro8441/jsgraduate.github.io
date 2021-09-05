//weather and location
const weatherName = document.querySelector("h2#name");
const weather = document.querySelector("h3#weather");("h2#name");

const API_KEY = "e8443f74f4383a14976aa936fea3475a";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        weatherName.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}   
function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);