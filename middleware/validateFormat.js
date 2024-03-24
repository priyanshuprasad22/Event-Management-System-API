
const validateInput = (req, res, next) => {
    const { event_name, city_name, date, time, latitude, longitude } = req.body;

    if (!event_name || !city_name || !date || !time || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    req.formattedData = {
        event_name,
        city_name,
        date,
        time,
        latitude: parseFloat(latitude), 
        longitude: parseFloat(longitude) 
    };

    next();
};

module.exports = { validateInput };
