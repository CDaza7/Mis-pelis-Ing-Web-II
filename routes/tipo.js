const { Router } = require('express')
const { createTipo } = require('../controllers/tipo')
const router = Router()

// Crear un tipo
router.post('/', createTipo)



module.exports = router