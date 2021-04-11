import storm from '../assets/images/icons/storm.svg';
import drizzle from '../assets/images/icons/drizzle.svg';
import rain from '../assets/images/icons/rain.svg';
import snow from '../assets/images/icons/snow.svg';
import atmosphere from '../assets/images/icons/atmosphere.svg';
import sun from '../assets/images/icons/sun.svg';
import clouds from '../assets/images/icons/clouds.svg';
import drizzcloud from '../assets/images/icons/rain.svg';

const weatherCodeParse = (weatherCode) => {
    switch (true) {
        case 200 <= weatherCode && weatherCode <= 232:
            return storm;
        case 300 <= weatherCode && weatherCode <= 321:
            return drizzle;
        case 500 <= weatherCode && weatherCode <= 531:
            return rain;
        case 600 <= weatherCode && weatherCode <= 622:
            return snow;
        case 701 <= weatherCode && weatherCode <= 781:
            return atmosphere;
        case weatherCode == 800:
            return sun
        case 801 <= weatherCode && weatherCode <= 804:
            return clouds;
        default:
            return drizzcloud;
    }
}

export default weatherCodeParse;