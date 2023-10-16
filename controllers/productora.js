const Productora = require('../models/productora')
const { request, response } = require('express')

// Crear una productora

const createProductora = async (req = request, res = response) => {
    console.log(req.body)
    
    const {nombre,slogan, descripcion} = req.body

    try{
        const productoraDB = await Productora.findOne({nombre})
        if(productoraDB){
            return res.status(400).json({ msj: 'Productora ya existente'})
        }
        
        const datos = {
            nombre,
            slogan,
            descripcion
        }
    
        const productora = new Productora(datos)
    
        await productora.save()
    
        return res.status(201).json(productora)

    }catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

}


module.exports = {
    createProductora
}
