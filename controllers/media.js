const Genero = require('../models/media')
const { request, response } = require('express')

// Crear media

const createMedia = async (req = request, res = response) => {
    console.log(req.body)
    
    const {serial, titulo, sinopsis, url, imagen, anioEstreno} = req.body

    try{
        const mediaDB = await Media.findOne({serial})
        if(mediaDB){
            return res.status(400).json({ msj: 'Media ya existente'})
        }
        
        const datos = {
            serial,
            titulo,
            sinopsis,
            url,
            imagen,
            anioEstreno
        }
    
        const media = new Media(datos)
    
        await media.save()
    
        return res.status(201).json(media)

    }catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

}


module.exports = {
    createMedia
}