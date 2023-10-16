const express = require('express')
const {mongoConn} = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const generos = require('./routes/genero')
const directores = require('./routes/director')
const productoras = require('./models/productora')
const tipos = require('./models/tipo')
const medias = require('./models/media')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/medias', medias)

module.exports = app