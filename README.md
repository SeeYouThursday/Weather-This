# Weather App

## Description

The Weather App allows users to get the current weather information for a specific location. It utilizes the OpenWeather API to fetch weather data and Material-Tailwind for the user interface.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
  - [Local Installation](#local-installation)

## Features

- Display current weather information including temperature, humidity, wind speed, and weather conditions.
- Search for weather information by location.
- Responsive design with MaterialTailwind components.

## Installation

### Local Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeather API key:

   ```plaintext
   REACT_APP_OPENWEATHER_API_KEY=your-api-key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Open the app in your browser.
2. Enter a location in the search bar and press Enter.
3. The app will display the current weather information for the specified location.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Future Development

- Add login and user authentication using Auth0.

## License

This project is licensed under the [MIT License](LICENSE).
