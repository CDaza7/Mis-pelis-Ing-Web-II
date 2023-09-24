 const Director = require('../models/director')
 const { require, response} = require('express')

//Crear un director

const createDirector = async (req = request, res = response) => {
    console.log(req.body)
    
    const {nombre} = req.body

    try{
        const directorDB = await Director.findOne({nombre})
        if(directorDB){
            return res.status(400).json({ msj: 'Director ya existente'})
        }
        
        const datos = {
            nombre
        }
    
        const director = new Director(datos)
    
        await director.save()
    
        return res.status(201).json(director)

    }catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

}

module.exports = {
    createDirector
}