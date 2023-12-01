const express = require('express');
const vacunacionSchema = require('../models/vacunacion'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/vacunacion', (req, res) => { 
    const vacunacion = new vacunacionSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    vacunacion    .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/vacunacion', (req, res) => {
    vacunacionSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/vacunacion/:id', (req, res) => { 
    const { id } = req.params;
    vacunacionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/vacunacion/:id', (req, res) => { 
    const { id } = req.params;
    const { numeroServicio, nombreCliente, nombreEspecie, valorVacuna, cantidadVacunas, precioActualDolar } = req.body;
    vacunacionSchema
        .updateOne({ _id: id }, { $set: {numeroServicio, nombreCliente, nombreEspecie, valorVacuna, cantidadVacunas, precioActualDolar} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/vacunacion/:id', (req, res) => { 
    const { id } = req.params;
    vacunacionSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
