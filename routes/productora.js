const { Router } = require('express')
const { createProductora } = require('../controllers/productora')
const router = Router()

// Crear una productora
router.post('/', createProductora)



module.exports = router