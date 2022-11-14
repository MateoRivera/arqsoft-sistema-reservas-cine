//Importaciones
import express from 'express';
import { deleteReservation, getReservation, setReservation, updateReservation } from '../controllers/index.js';

//Se crea el router (Gestor de rutas)
const reservationRoutes = express.Router();


reservationRoutes.get('/list/:userId', getReservation);
reservationRoutes.post('/save', setReservation);
reservationRoutes.patch('/update/:reservationId', updateReservation);
reservationRoutes.delete('/delete/:reservationId', deleteReservation);

export  {
    reservationRoutes
};