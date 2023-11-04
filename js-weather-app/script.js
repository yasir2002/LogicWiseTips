document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "e5dd2933586fb6b6fdffc52b05b74446";
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    function fetchWeatherData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const location = document.getElementById("location");
                const temperature = document.getElementById("temperature");
                const description = document.getElementById("description");

                location.textContent = `${data.name}, ${data.sys.country}`;
                temperature.textContent = ` ${data.main.temp}°C`;
                description.textContent = ` ${data.weather[0].description}`;
            })
            .catch(error => console.error("Error fetching weather data:", error));
    }

    function handleSearch() {
        const city = searchInput.value;
        if (city) {
            fetchWeatherData(city);
        }
    }

    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            handleSearch();
        }
    });
});
