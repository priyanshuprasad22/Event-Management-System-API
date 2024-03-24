const axios = require('axios');
const fetchWeather= async (city,date)=>{

    try{
        const response = await axios.get(process.env.WEATHER_API,{
            params:{
                code:process.env.WEATHER_API_KEY,
                city:city,
                date:date
            }
        });

        // console.log(response);

        const weather = response.data.weather;

        return weather;

    } catch(error){
        console.error('Error fetching weather data',error);
        throw new Error('Failed to fetch weather data');
    }
    
}

module.exports = {fetchWeather}