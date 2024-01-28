const apiKey = "6c00e66e4ac4a955a3dfc0f50a866288";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".description").innerHTML = data.weather[0].description;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
        document.querySelector(".country").innerHTML = "(" + data.sys.country + ")";
        document.querySelector(".coordinates").innerHTML = "(" + data.coord.lat + ", " + data.coord.lon + ")";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " pa";


        const newLatLng = [data.coord.lat, data.coord.lon];
        if (marker) {
            marker.setLatLng(newLatLng);
        } else {
            marker = L.marker(newLatLng).addTo(map);
        }




        const timezoneData = await getTimezoneData(data.coord.lat, data.coord.lon, data.name);

        displayTimezoneInfo(timezoneData);




        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "media/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "media/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "media/rain.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "media/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "media/mist.png";
        }
        else {
            weatherIcon.src = "media/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
 }

searchBtn.addEventListener("click", async () => {
    const city = searchBox.value;
    await checkWeather(city);
});



async function getTimezoneData(lat, lon, city) {
  const timezoneAPIUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=KZONKTR9PCFM&format=json&by=position&lat=${lat}&lng=${lon}`;
  const response = await fetch(timezoneAPIUrl);
  const data = await response.json();
  return {
      cityName: data.zoneName,
      zoneName: data.zoneName,
      timestamp: data.timestamp
  };
}

function displayTimezoneInfo(timezoneData) {
  const timezoneInfo = document.querySelector(".timezone-info");
  if (timezoneData) {
      const adjustedTimestamp = timezoneData.timestamp - (6 * 60 * 60); 
      const adjustedTime = new Date(adjustedTimestamp * 1000).toLocaleString();
      
      const timezoneHtml = `
          <p><i class="far fa-clock"></i> Current Time: <br>${adjustedTime}</p>
      `;
      timezoneInfo.innerHTML = timezoneHtml;
  } else {
      timezoneInfo.innerHTML = "<p>Unable to fetch timezone information.</p>";
  }
}