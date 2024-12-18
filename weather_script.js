const apiKey = '70404f6b22c58e5f19cae492d098d4e9'; // Replace with your OpenWeatherMap API key
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather%22';

async function fetchWeatherData(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Network response was not ok: ${errorData.message}`);
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayWeatherData(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherCondition = data.weather[0].description;

    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Weather Condition: ${weatherCondition}`);
}

// Example usage
fetchWeatherData('London');