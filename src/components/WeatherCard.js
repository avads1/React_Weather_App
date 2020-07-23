import React, { Component } from "react";
import "../css/WeatherCard.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, weather, country, temp } = this.props.weatherData;
    const fahrenheit = Math.round(temp * 1.8 - 459.67);
    const icon = weather[0].icon;
    console.log(icon);
    const logo = 'http://openweathermap.org/img/w/' + icon + '.png';

    return (
      <div className="WeatherCard">
        <h1 className="WeatherCard-degrees">{fahrenheit}°F</h1>
        <div className="WeatherCard-icon-container">
          <img src={logo} style={{ width: 100, height: 100 }} />
          <p>{weather[0].main}</p>
        </div>
        <h2 className="WeatherCard-city">
          {city}, {country}
        </h2>
      </div>
    );
  }
}

export default WeatherCard;
