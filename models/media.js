const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo:{
        type: String,
        required: [true, 'Titulo requerido']
    },
    sinopsis: {
        type: String,
        require: [true, 'Sinopsis requerida']
    },
    url: {
        type: String,
        require: [true, 'Url requerida']
    },
    imagen: {
        type: String,
        require: [true, 'Imagen requerida']
    },
    anioEstreno: {
        type: String
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date
    },
    fechaActualizacion: {
        type: Date,
        default: new Date
    }
})

module.exports = model('Genero', GeneroSchema)