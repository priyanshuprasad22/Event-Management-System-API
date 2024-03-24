const express= require('express');
const router = express.Router();
const {validateInput} = require('../middleware/validateFormat.js');

const {findEvents,addEvents} = require('../controllers/events.js');

router.route('/find').get(findEvents);
router.route('/add').post(validateInput,addEvents);

module.exports=router;