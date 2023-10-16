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

const getGeneros = async (req = request, res = response) => {

    try{
        const {estado} = req.query

        const generos = await Genero.find({ estado })
    
        return res.json(generos)

    }catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

}

// CONSULTAR UN GENERO POR SU NOMBRE

const getGeneroNombre = async (req = request, res = response) => {
    try {
        const { nombre } = req.params;

        const generos = await Genero.findOne(nombre);

        if (!genero) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }

        return res.json(generos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error });
    }
}

// ACTUALIZAR UN GENERO
const updateGenero = async (req = request, res = response) => {
    try {
        const { nombre } = req.params;
        const { descripcion } = req.body;

        const generos = await Genero.findOneAndUpdate({ nombre }, { descripcion }, { new: true });

        if (!generos) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }

        return res.json(generos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error });
    }
}


// ELIMINAR UN GENERO
const deleteGenero = async (req = request, res = response) => {
    try {
        const { nombre } = req.params;
        const generos = await Genero.findOneAndDelete({ nombre });

        if (!generos) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }

        return res.json({ msj: 'Género eliminado con éxito' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error });
    }
}



module.exports = {
    createGenero,
    getGeneros,
    getGeneroNombre,
    updateGenero,
    deleteGenero
}