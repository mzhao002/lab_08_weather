const form = document.querySelector("form");
const weatherDiv = document.getElementById("weatherDiv");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = form.elements.city.value;

  try {
    const response = await fetch(
      `https://lab-08-weather.onrender.com/weather?city=${city}`
    );
    const data = await response.json();

    if (data.error) {
      weatherDiv.innerHTML = `<p>${data.error}</p>`;
    } else {
      weatherDiv.innerHTML += `
       <h1 class="text-6xl font-bold">${city}</h1>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Description: ${data.description}</p>
        <img class="w-96 h-96 mx-auto" src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather Icon" />
      `;
    }
  } catch (err) {
    weatherDiv.innerHTML = "<p>Failed to fetch weather. Please try again.</p>";
  }
});
