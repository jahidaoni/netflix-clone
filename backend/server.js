import express from 'express';
import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connect } from 'mongoose'; 
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';




const app = express();


const PORT = ENV_VARS.PORT;


app.use(express.json()); //will allow us to parse json data in the body of the request


app.use("/api/v1/auth",authRoutes);






app.listen(PORT, () => {

    console.log('Server started at http://localhost:'+PORT);
    connectDB();
    });
