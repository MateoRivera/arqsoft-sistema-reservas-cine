//Importaciones
import express from 'express';
import { deleteUser, getUser, setUser, updateUser } from '../controllers/index.js';

//Se crea el router (Gestor de rutas)
const userRoutes = express.Router();


userRoutes.get('/list/:userId', getUser);
userRoutes.post('/save', setUser);
userRoutes.patch('/update/:userId', updateUser);
userRoutes.delete('/delete/:userId', deleteUser);

export  {
    userRoutes
};