import CitySwitcher from "../../containers/CitySwitcher";
import './Header.scss';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import weatherCodeParse from "../../helpers/weatherCodeParse";


const Header = () => {

    const [searchCity, setSearchCity] = useState('');

    const [weatherInfo, setWeatherInfo] = useState({
        isFetched: false,
        name: '',
        weather: [],
        temp: {},
        error: null
    });
    console.log(weatherInfo);

    const fetchWeatherInfo = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: searchCity,
                appid: '45831022c0389ce8f9f6315c0ccd5208',
                units: 'metric'
            }
        })
            .then(function (response) {
                setWeatherInfo({
                    isFetched: true,
                    name: response.data.name,
                    weather: response.data.weather,
                    temp: response.data.main,
                    error: false
                })
            })
            .catch(function (error) {
                setWeatherInfo({
                    isFetched: true,
                    name: '',
                    weather: [],
                    temp: {},
                    error: error
                })
            })
            .then(function () {
                // always executed
            });
    }

    // Tenglashtirilgan ozgaruvchini useEffectga berildi
    useEffect(() => {
        fetchWeatherInfo();
    }, [searchCity])


    return (
        <div className="header">
            <div className="header">
                <div className="container">
                    <div className="form">
                        <Link to="/">
                            <h1>Weather app</h1>
                        </Link>

                        <div className="search-input">
                            <input
                                type="search"
                                placeholder="Search your city..."
                                onChange={(e) => setSearchCity(e.target.value)}
                                value={searchCity}
                            />

                            {
                                searchCity.length > 0 ? (
                                    <div className="search-result">
                                        {
                                            weatherInfo.isFetched ? (
                                                <div>
                                                    {
                                                        weatherInfo.weather.length > 0 ? (
                                                            <Link
                                                                to={`/city/${weatherInfo.name}`}
                                                                className="weather-result-card"
                                                                onClick={() => setWeatherInfo({
                                                                    isFetched: true,
                                                                    name: '',
                                                                    weather: [],
                                                                    temp: {},
                                                                    error: null
                                                                })}
                                                            >
                                                                <h1>{weatherInfo.name}</h1>
                                                                <img src={weatherCodeParse(weatherInfo.weather[0].id)} alt="" />
                                                                <h5>{Math.round(weatherInfo.temp.temp)}° C</h5>
                                                            </Link>
                                                        ) : (
                                                            <h1>City not found!</h1>
                                                        )
                                                    }
                                                </div>
                                            ) : (
                                                <h1>Loading...</h1>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;