const { Router } = require('express')
const { createGenero } = require('../controllers/genero')
const router = Router()

// Crear un genero
router.post('/', createGenero)



module.exports = router