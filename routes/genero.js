const { Router } = require('express')
const { createGenero, getGeneros, getGeneroNombre, updateGenero, deleteGenero} = require('../controllers/genero')
const router = Router()

// Crear un genero
router.post('/', createGenero)

// Consultar todos los generos
router.get('/', getGeneros)

// Consultar genero por nombre
router.get('/', getGeneroNombre)

//Actualizar un genero
router.put('/:nombre', updateGenero);

//Eliminar un genero
router.delete('/:nombre', deleteGenero);


module.exports = router