const { Router } = require('express')
const { createMedia } = require('../controllers/media')
const router = Router()

// Crear media
router.post('/', createMedia)



module.exports = router