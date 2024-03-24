const axios = require('axios');

const calculateDistance = async(lat1,lon1,lat2,lon2)=>{

    try{
        const response = await axios.get(process.env.DISTANCE_API,{
            params:{
                code:process.env.DISTANCE_API_KEY,
                latitude1:parseFloat(lat1),
                longitude1:parseFloat(lon1),
                latitude2:lat2,
                longitude2:lon2
            }
        });  

        // console.log(response);

        const distance = response.data.distance;

        return distance;

    } catch(error){
        console.error('Error fetching distance data',error);
        throw new Error('Failed to fetch distance data');
    }

}

module.exports = {calculateDistance};