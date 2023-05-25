//solo conexion a la base de datos
const express = require("express-session");
const connection = require("../database");




module.exports = function configureSession(app){
    app.use(
        session({
        secret: '123456',
        resave: false, // lo pasamos a false porque lo vamos a hacer desde la base de datos y no al navegador
        saveUninitialized: false,
       // cookie: {
          //  expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Fecha de expiración en una semana, viene default 1hs
        })
    );
    
    
    //Middleware para verificar la conexion a la base de datos
    
    app.use(( req, res, next) =>{
        req.connection = connection;
        next();
    })
}