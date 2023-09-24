const { Router } = require('express')
const { createDirector } = require('../controllers/director')
const router = Router()

// Crear un director
router.post('/', createDirector)



module.exports = router