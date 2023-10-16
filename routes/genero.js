const { Router } = require('express')
const { createGenero, getGeneros } = require('../controllers/genero')
const router = Router()

// Crear un genero
router.post('/', createGenero)



module.exports = router

// Consultar todos los generos

router.get('/', getGeneros)
