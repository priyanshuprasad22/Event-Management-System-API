const { ValidationError } = require('mongoose'); 


const errorHandler = (err, req, res, next) => {
    console.error('Error occurred:', err);

    if (err instanceof ValidationError) {
        return res.status(400).json({ error: 'Validation error occurred' });
    }

    res.status(500).json({ error: 'Server error' });
};

module.exports = errorHandler;