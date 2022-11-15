import {userRoutes, reservationRoutes} from '../routes/index.js';
import express from 'express';
const app = express();
app.use('/user', userRoutes);
app.use('/reservation', reservationRoutes);
export {app as appV1};