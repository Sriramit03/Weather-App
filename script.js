document.getElementById("btn").addEventListener("click", function() {
    fetchWeather();
});

function fetchWeather() {
    const apiKey = '14b3e7c85b7356e6ee471bdddb6c7c4f';
    const city = document.getElementById('city').value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('weather').innerHTML = `<p style="color: red;">${data.message}</p>`;
                return;
            }
            
            const weatherContainer = document.getElementById('output');
            const t = document.getElementById('temperature');
            const w = document.getElementById('wind');
            const h = document.getElementById('humidity');
            const wind = data.wind.speed;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            t.innerHTML = `${temperature}°C`;
            w.innerHTML = `${wind} m/s`;
            h.innerHTML = `${humidity}%`;
            weatherContainer.style.display = 'flex';

        })
        .catch(error => console.error('Error fetching weather data:', error));
}
