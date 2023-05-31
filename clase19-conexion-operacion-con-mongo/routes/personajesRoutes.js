const express = require ('express');
const { client } = require('..db/')

const router = express.Router();

const collectionName = 'personajes';

router.get('/', async (req, res) =>{
    try{
        const db = client.db ('escuela');
        const collection = db.collection (collectionName);
        const personajes = await collection.find({}).toArray();
        res.render('personajes', {personaje} )
    }catch(error){
        console.error( 'Error al obtener los personajes', error);
        res.status(500).json( {error: 'Error al obtener personajes'})
    }
})

router.get('/crear', (req, res) =>{
    res.render('nuevopersonaje');
})

router.post('/', async(req, res) =>{
    try{
        const db = client.db('escuela');
        const collection = db.collection(collectionName);
        const nuevoPersonaje = req.body;

        await collection.insertOne(nuevoPersonaje) // insertamos nuevo personaje a la base
        res.redirect('/personajes')
    }catch(error){
        console.error('Error al insertar el personaje ');
        res.status(500).json({ error: 'Error al insertar los personajes'})
    }
})



module.exports = router