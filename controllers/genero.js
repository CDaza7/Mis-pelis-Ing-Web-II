const Genero = require('../models/genero')
const { request, response } = require('express')

// CREAR UN GENERO

const createGenero = async (req = request, res = response) => {
    console.log(req.body)
    
    const {nombre, descripcion} = req.body

    try{
        const generoDB = await Genero.findOne({nombre})
        if(generoDB){
            return res.status(400).json({ msj: 'Genero ya existente'})
        }
        
        const datos = {
            nombre, 
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
    
        return res.status(201).json(genero)

    }catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

}


//CONSULTAR TODOS LOS GENEROS



// CONSULTAR UN GENERO POR SU ID



// ACTUALIZAR UN GENERO



// ELIMINAR UN GENERO



module.exports = {
    createGenero
}