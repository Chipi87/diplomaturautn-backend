const {sequelize} = require(`sequelize`); //traemos a sequealize
const connection = require(`../database/mysql_connection`); // traemos a la base de datos es decir datos del host
const movies = require("../models/movies");
const moduleMovies = require(`../models/movies`)(connection);// traemos la variable connection
const controller = {
    list: (req, res)=>{
        moduleMovies.findAll({

        })
        .then(movies =>{
            res.render(`list.ejs`, {movies}) // se pasa el modelo entre llaves
        })
    }
}

module.exports = controller;
