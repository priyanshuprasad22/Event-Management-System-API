const event = require('../models/events.js');
const {fetchWeather} = require('../config/weather.js');
const {calculateDistance} = require('../config/distancefromuser.js');
const extractValidationErrorMessage= require('../config/ExtractValidataionErrorMessage.js');

// @route GET
// Get events
// Event Finder API

exports.findEvents = async (req, res, next) => {
    try {
        const { latitude, longitude, date } = req.query;

        const startDate = new Date(date);
        const endDate = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000);

        const pageSize = 10;

        let events = await event.find({
            date: { $gte: startDate, $lte: endDate }
        }).sort('date');

        const totalevents = events.length;
        const totalpages = Math.ceil(totalevents / pageSize);

        const paginatedEvents = [];
        for (let i = 0; i < totalpages; i++) {
            const startIndex = i * pageSize;
            const endIndex = Math.min(startIndex + pageSize, totalevents);
            const pageEvents = events.slice(startIndex, endIndex);

            paginatedEvents.push(pageEvents);
        }

        const result = await Promise.all(paginatedEvents.map(async (pageEvents, index) => {
            const temp = await Promise.all(pageEvents.map(async (event) => {
                const city_name = event.city_name;
                const date = event.date;

                const dateTimeString = date.toISOString().slice(0, 10).toString();

                const [weather, distance] = await Promise.all([
                    fetchWeather(city_name, dateTimeString),
                    calculateDistance(latitude, longitude, event.latitude, event.longitude)
                ]);

                return {
                    event_name: event.event_name,
                    city_name: event.city_name,
                    date: dateTimeString,
                    weather: weather,
                    distance_km: distance
                };
            }));

            return {
                events: temp,
                page: index + 1,
                pageSize: temp.length,
                totalEvents: totalevents,
                totalPages: totalpages
            };
        }));

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
}


// @route POST
// Create Events
// Post a Event

exports.addEvents = async (req,res,next)=>{

    try{

        const store = await event.create(req.formattedData);

        return res.status(200).json({
            success: true,
            data: store
        });

    }catch(error){

        if (error.name === 'ValidationError') {
            const errorMessage = extractValidationErrorMessage(error);
            return res.status(400).json({ error: errorMessage });
        }

        console.log(error);
        res.status(500).json({ error: 'Server error' });

    }

}