window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const btn1 = document.getElementById("btn");
  const cityName = document.getElementById("city-name");
  const date = document.getElementById("date");
  const icon = document.getElementById("icon");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const speed = document.getElementById("speed");

  btn1.addEventListener("click", () => {
    let city = input.value;
    weatherFn(city);
  });

  async function weatherFn(city) {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "4fbdcbc8ab5ab488da6f9b74a7fc960d";
    const tempa = `${url}?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(tempa);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        weatherData(data);
      } else {
      }
    } catch (error) {
      console.error("error fetching weather data", error);
    }
  }

  function weatherData(data) {
    cityName.textContent = data.name;
    const today = new Date();

    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDateTime = today.toLocaleString("en-US", options);
    date.textContent = formattedDateTime;
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    speed.textContent = data.wind.speed + " m/s";
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("Weather object:", data.weather);
    console.log("Icon code:", data.weather[0].icon);
  }
});
