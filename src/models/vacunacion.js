
const mongoose = require ( 'mongoose');

const vacunacionSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    numeroServicio: {
       type: String,
        required: [true, 'El campo numero de servicio es obligatorio']
    },
    nombreCliente: {
        type: String,
        required: [true, 'El campo de nombre Cliente es obligatorio']
    },
    nombreEspecie: {
        type: String,
        required: [true, 'El campo de nombre Especie es obligatorio']
    },
    valorVacuna: {
        type: String,
        required: [true, 'El campo de valor Vacuna es obligatorio']
    },
    cantidadVacunas: {
        type: String,
        required: [true, 'El campo de cantidad Vacunas es obligatorio']
    }
});

module.exports = mongoose.model('vacunacion', vacunacionSchema);
