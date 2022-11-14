//Importaciones de las librerias
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//Se configura el archivo .env
dotenv.config();

//Se crea el servidor de express
const app = express();

//Se expone el backend
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Importaciones de las rutas
import {userRoutes, reservationRoutes} from './routes/index.js';

//Uso de las rutas
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/reservation', reservationRoutes);

//Servidor escuchando
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});