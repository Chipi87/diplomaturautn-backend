const express = require ('express');
const axios = require ('axios'); // axios es una libreria que nos permite las peticiones a las API externas

const router =  express.Router();


//Rutas para obtener todas las peliculas, peliculas populares 


// Rutas para obtener todas las peliculas populares

router.get('/', async (req, res) =>{
    try{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', { // enctramos a la api
            params:{
                api_key: '03f4143002b1a6d5dfcbdf571cfbf82a' // llave de acceso
            }
        })

        const movies = response.data.results;
        res.json(movies); // le pedimos que nos devuelva un json
    } catch (error){
        console.error('Error ', error);
        res.status(500).json({ error: ' Error al obtener pelicula, 505'})// manejamos el error
    }
})

//ruta para obtener una pelicula por ID

router.get('/:Id', async(req, res) =>{
    const movieId = req.params.Id;
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{ // aca obtenemos de la solicitud, es decir const movieId
        params:{
            api_key: '03f4143002b1a6d5dfcbdf571cfbf82a' // llave de acceso
            }
        })
        const movie = response.data;
        res.json(movie);
    }catch(error) {
        console.error('Error ', error);
        res.status(500).json({ error: ' Error al obtener pelicula'})// manejamos el error
    }
});


module.exports = router;