const express=require('express');
const dotenv=require('dotenv');
const connectDB= require('./config/db');
const routes= require('./routes/events');

const helmet= require('helmet');
const cors=require('cors');
const xss= require('xss-clean');

const errorHandler = require('./middleware/errorhandler')
const notfound = require('./middleware/not-found');


dotenv.config();
const app=express();

app.set('trust proxy',1);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


connectDB();

app.use('/api/v1/events',routes);

app.use(notfound);
app.use(errorHandler);

const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`The Application is listening on port ${PORT}`);
})