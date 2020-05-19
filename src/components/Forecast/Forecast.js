import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions'
import classes from './Forecast.module.css';
const fetch = require("node-fetch");


const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState(0);
    const uriEncodedCity = encodeURIComponent(city);
    const url = `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`

    function getForecast(e) {
        e.preventDefault();
        fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "2eb2135951msh5fbf1c4ad6951f6p17a068jsnd1a07aef37a1"
                }
            })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
            .catch(err => {
                console.log(err);
            });

    }
    return (
        <div>
            <h2>Find current Weather</h2>
            
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={classes.textInput}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            <Conditions responseObj={responseObj}/>
        </div>
    )
}

export default Forecast;
