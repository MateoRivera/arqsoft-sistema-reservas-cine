//Importaciones de los servicios de usuario
import {
    getUser, setUser, updateUser, deleteUser
} from "./user.controller.js";

//Importaciones de los servicios de reservación
import {
    getReservation, setReservation, updateReservation, deleteReservation
} from "./reservation.controller.js";

export {
    getUser, setUser, updateUser, deleteUser,
    getReservation, setReservation, updateReservation, deleteReservation
}