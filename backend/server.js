const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e17ee58faed52ef75cc38493bdbc04b8`;

  try {
    const response = await axios.get(url);
    const weatherData = {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
