import React, { Component } from "react";
import "./css/App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      errorMessage: ""
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8d7504befaa23d3cca1534ea427cf3cc`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  render() {
    const {
      searchDone,
      weatherData,
      errorMessage
    } = this.state;
    return (
      <div className="App">
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}><h1>Weathering Heights</h1>

          <h2>Pick a location</h2>
          <SearchBar
            callBackFromParent={this.getWeatherData}
            error={errorMessage}
          />
          {searchDone && (
            <WeatherCard
              weatherData={weatherData}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
