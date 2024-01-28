# Weather App
This Weather App is a straightforward web application that offers real-time weather information based on the user's input city. It effectively employs the OpenWeatherMap API to retrieve weather data, OpenStreetMap for displaying a map, and Leaflet for map integration.

## Project Structure
The project structure is well-organized and adheres to a clean format:

- script.js: Core JavaScript file containing the logic for fetching weather data and handling user interactions.
- styles.css: CSS file for styling the HTML elements.
- index.html: HTML file defining the structure and layout of the web application.
**Getting Started**
To run the Weather App locally, follow these steps:

## Clone the repository to your local machine:

bash

git clone <https://github.com/kanjix/ass2WEB>

Open the index.html file in a web browser.

## Features
**Weather Information**: Fetches and displays real-time weather information based on the user's input city.
**Map Integration**: Utilizes Leaflet and OpenStreetMap to display the geographical location of the city.
**Timezone Information**: Retrieves timezone data using the TimezoneDB API to display the current time in the selected city.
## Usage 
Enter the city name in the search input.
Click the search button to fetch and display weather information.
The map displays the geographical location of the city.
Additional details such as temperature, humidity, wind speed, and pressure are presented.
## Dependencies
- Leaflet: JavaScript library for interactive maps.
- OpenStreetMap: Collaborative mapping platform.
- jQuery: JavaScript library for simplifying HTML document traversal and manipulation.
**API Keys**
To run the Weather App, make sure to replace the placeholder API keys with valid ones. Obtain an API key from OpenWeatherMap and TimezoneDB.

## Design Decisions
The core logic is implemented in the script.js file to maintain a clean separation between functionality and presentation. This approach enhances maintainability and makes it easier to scale or modify the application.

## Contribution
Feel free to contribute to the project by creating issues, suggesting improvements, or submitting pull requests. Follow the best practices outlined in the CONTRIBUTING.md file.

## License
This Weather App is licensed under the MIT License.
