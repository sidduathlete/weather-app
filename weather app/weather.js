let button = document.getElementById("button");

button.onclick = async function() {
    let input = document.getElementById("input").value;
    let locationEl = document.getElementById("location");
    let temp = document.getElementById("temp");
    let speed = document.getElementById("speed");

    let url = `https://api.weatherapi.com/v1/current.json?key=82af92937eef4a3bbe2104322250109&q=${input}&aqi=yes`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        locationEl.textContent = "📍 Location: " + data.location.name + ", " + data.location.country;
        temp.textContent = "🌡️ Temperature: " + data.current.temp_c + " °C";
        speed.textContent = "💨 Wind Speed: " + data.current.wind_kph + " kph";
    } catch (error) {
        locationEl.textContent = "Error: Could not fetch weather data!";
        temp.textContent = "";
        speed.textContent = "";
    }
}