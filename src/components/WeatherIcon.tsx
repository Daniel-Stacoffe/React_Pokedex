function WeatherIcon() {
  const weather = "sunny";

  const printIcon = (name) => {
    const weatherMap = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      stormy: "🌩️",
    };

    return weatherMap[name];
  };
}
