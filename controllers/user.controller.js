//Importaciones
import { PrismaClient } from "@prisma/client";

//Se crea la instancia de prisma
const prisma = new PrismaClient();

//Se crean los servicios
const getUser = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.user.findUnique({
        where: {
            id: req.params.userId,
        },
    }).then((user) => {
        //Se envia la respuesta
        if(user){
            res.status(200).json({
                message: 'Usuario encontrado',
                user
            });
        }
        else{
            res.status(404).send({message: 'Usuario no encontrado'});
        }
    });
};

const setUser = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.user.create({
        data: {
            ...req.body
        },
    }).then((user) => {
        //Se envia la respuesta
        res.status(200).json({
            message: 'Usuario creado',
            user
        });
    }).catch((error) => {
        res.status(500).json({message: 'No se pudo crear el usuario', error})
    });
};

const updateUser = async (req, res) => {
    //Se consulta en la base de datos
    //res.json({params: req.params, body: req.body});
    const userUpdated = await prisma.user.update({
        where: {
            id: req.params.userId,
        },
        data: {
            ...req.body
        },
    }).then((user) => {
        res.status(200).json({
            message: 'Usuario actualizado',
            user
        });
    }).catch((error) => {
        res.status(404).send({message: 'Usuario no encontrado'});
    });
    
};

const deleteUser = async (req, res) => {
    //Se consulta en la base de datos
    await prisma.user.delete({
        where: {
            id: req.params.userId,
        },
    }).then((user) => {
        //Se envia la respuesta
        res.status(200).json({
            message: 'Usuario eliminado',
            user
        });
    }).catch((error) => {
        res.status(404).send({message: 'Usuario no encontrado'});
    });
};


//Se exportan los servicios
export {
    getUser,
    setUser,
    updateUser,
    deleteUser
};

