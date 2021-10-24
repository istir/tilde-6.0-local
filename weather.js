// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const apiKey = getConfig("weatherAPIKey");

function getCorrectIcon(condition, night) {
  switch (condition) {
    case "Thunderstorm":
      return "fas fa-bolt";
    case "Drizzle":
      if (night) return "fas fa-cloud-moon-rain";
      return "fas fa-cloud-sun-rain";
    case "Rain":
      return "fas fa-cloud-showers-heavy";
    case "Snow":
      return "fas fa-cloud-rain";
    case "Mist":
      return "fas fa-smog";
    case "Fog":
      return "fas fa-smog";
    case "Clear":
      if (night) return "fas fa-moon";
      return "fas fa-sun";
    case "Clouds":
      return "fas fa-cloud";

    default:
      return;
  }
}

function weatherLocation() {
  if (apiKey === "") {
    console.error(
      "No API Key specified. Generate new key and supply in settings https://openweathermap.org/ "
    );
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (ful) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ful.coords.latitude}&lon=${ful.coords.longitude}&appid=${apiKey}&units=metric`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          document.querySelectorAll(".weather").forEach((weather) => {
            weather.querySelector("i").className = getCorrectIcon(
              data.weather[0].main,
              new Date().getHours() > 20 && new Date().getHours < 6
            );
            weather.querySelector("div").innerText = Math.round(
              parseInt(data.main.temp)
            );
          });
        });
      //   console.log(ful.coords.latitude, ful.coords.longitude);
    },
    (rej) => {
      console.error(rej);
    }
  );
}
weatherLocation();
