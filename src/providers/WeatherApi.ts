const getWeatherForcast = async (city: string) => {
    const cityKey = await getCityCode(city);
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=Adg4vtpcqkbN29ZnrOYWAXOjlIEJYXKV`);
    const data = await response.json();
    return data.DailyForecasts;
}

const getCityCode = async (city: string) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Adg4vtpcqkbN29ZnrOYWAXOjlIEJYXKV&q=${city}`);
    const data = await response.json();
    return data[0].Key;
}

export default {
    getWeatherForcast,
    getCityCode
}