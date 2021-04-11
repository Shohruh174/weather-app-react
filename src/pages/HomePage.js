import { useState, useEffect } from 'react';
import axios from 'axios';

import CitySwitcher from '../containers/CitySwitcher';
import Header from '../components/Header/Header';
import weatherCodeParse from '../helpers/weatherCodeParse';

const HomePage = () => {

    // Hooklar
    const [activeCity, setActiveCity] = useState('shahrisabz');
    const [activeWeather, setActiveWeather] = useState({
        isFetched: false,
        data: {},
        error: null
    });

    // Info kelishini bitta ozgaruvchiga tenglashtirildi
    const fetchWeatherInfo = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: activeCity,
                appid: '45831022c0389ce8f9f6315c0ccd5208',
                units: 'metric'
            }
        })
            .then(function (response) {
                setActiveWeather({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function (error) {
                setActiveWeather({
                    isFetched: true,
                    data: {},
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
    }, [activeCity])



    return (
        <div>
            {/* Button Component chaqirildi */}
            <CitySwitcher setActiveCity={setActiveCity} activeCity={activeCity} />

            {/* Malumot kelishi */}
            <div>
                {
                    activeWeather.isFetched ? (
                        // malumot keldi
                        <div className="main-weather">
                            <h1>{activeWeather.data.name}</h1>
                            <img src="" alt="" />
                            <h1>{Math.round(activeWeather.data.main.temp)}° C</h1>
                            <img src={weatherCodeParse(activeWeather.data.weather[0].id)} alt="weather-icon" className="weather-icon" />
                            <div>
                                {
                                    activeWeather.data.weather.map((weather) => (
                                        <h1>It is <span className="weather-value">{weather.main}</span> now in <span className="weather-city-name">{activeWeather.data.name}</span></h1>
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                        // malumot kelmadi
                        <h1>Loading...</h1>
                    )
                }
            </div>
        </div>
    )
}

export default HomePage;