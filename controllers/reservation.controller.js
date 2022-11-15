//Importaciones
import { PrismaClient } from "@prisma/client";

//Se crea la instancia de prisma
const prisma = new PrismaClient();

//Se crean los servicios
const getReservation = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.reservation.findMany({
        where: {
            userId: req.params.userId
        },
    }).then((reservations) => {
        if(reservations){
            res.status(200).json({
                message: 'Reservaciones encontradas',
                reservations
            });
        }
        else{
            res.status(404).send({message: 'Este usuario no existe o no tiene reservaciones'});
        }
    });
};

const setReservation = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.reservation.create({
        data: {
            nameMovie: req.body.nameMovie,
            date: new Date(req.body.date),
            hourStart: req.body.hourStart,
            amountChairs: req.body.amountChairs,
            User: {
                connect: {
                    id: req.body.userId
                }
            }
        },
        
    }).then((reservation) => {
            res.status(200).json({
                message: 'Reservación creada',
                reservation
            });
    }).catch((error) => {        
            res.status(500).json({message: 'Este usuario no existe o faltan datos', error});
    });
};

const updateReservation = async (req, res) => {
    //Se consulta en la base de datos
    if(req.body.date){
        req.body.date = new Date(req.body.date);
    }
    await prisma.reservation.update({
        where: {
            id: req.params.reservationId,
        },
        data: {
            ...req.body
        },
    }).then((reservation) => {
        res.status(200).json({
            message: 'Reservación actualizado',
            reservation
        });
    }).catch((error) => {
        res.status(404).send({message: 'Reservación no encontrada', error});
    });
    
};

const deleteReservation = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.reservation.delete({
        where: {
            id: req.params.reservationId,
        },
    }).then((reservation) => {
        res.status(200).json({
            message: 'Reservación eliminada',
            reservation
        });
    }).catch((error) => {
        res.status(404).send({message: 'Reservación no encontrada'});
    });    
};


//Se exportan los servicios
export {
    getReservation,
    setReservation,
    updateReservation,
    deleteReservation
};