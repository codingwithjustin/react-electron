import React, { useState } from 'react';
import weatherData2Percent from '../functions/weatherData2Percent';
// import {Howl, Howler} from 'howler'

const api = {
  key: "66693570a86adc4fadcbe965d32e883b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
          console.log(weatherData2Percent(result))
          // playAll()
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  // function playAll() {
  //   const sound1 = new Howl({
  //     src: ['../audio/hot.wav'],
  //     preload: true
  //   });
  //   const sound2 = new Howl({
  //     src: ['../audio/cold.wav'],
  //     preload: true
  //   });
  //   const sound3 = new Howl({
  //     src: ['../audio/low-humidity.wav'],
  //     preload: true
  //   });
  //   const sound4 = new Howl({
  //     src: ['../audio/high-humidity.wav'],
  //     preload: true
  //   });
  //   const sound5 = new Howl({
  //     src: ['..audio/low-pressure.wav'],
  //     preload: true
  //   });
  //   const sound6 = new Howl({
  //     src: ['../audio/high-pressure.wav'],
  //     preload: true
  //   });
  //   sound1.play()
  //   sound2.play()
  //   sound3.play()
  //   sound4.play()
  //   sound5.play()
  //   sound6.play()
  //   console.log('audio should be playing')
  //   Howler.volume(0.5);
  // }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className="weatherInfo">
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;