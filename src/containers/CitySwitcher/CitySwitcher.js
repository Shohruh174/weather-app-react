import ActiveCityBtn from '../../components/ActiveCityBtn';

import './CitySwitcher.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const citiesArr = [
    'tashkent',
    'dubai',
    'shahrisabz',
    'makka',
    'paris',
    'berlin'
];


const CitySwitcher = ({ setActiveCity, activeCity, }) => {

    

    return (
        <div className="city-switcher">
            <div className="container">

                


                <div className="buttons">
                    {
                        citiesArr.map((city, index) => (
                            <ActiveCityBtn
                                cityName={city}
                                key={index}
                                onClick={() => setActiveCity(city)}
                                active={activeCity == city}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CitySwitcher;