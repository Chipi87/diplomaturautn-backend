// routes para chequear con la base de datos, si los datos coinciden, sacamos todo de app y lo pasamos aca, cambiamos app.use por session.use
const express = require("express");
const session = express.Router();
const connection = require("../database");



session.get("/", (req, res) => { // llamamos que  nos mande a la vista index
    res.render("index");
    });

session.post("/login", (req, res) => { //si los datos coinciden con la base de datos que los deje pasar, si es incorrecto que indique error
    if(!req.body || !req.body.username || !req.body.password){// || es or.... requerimos del body formulario, si no es igual retorname usuario invalido
        res.send (" Usuario invalido");// verificamos si falta el campo usuario o password, retorna usuario invalido. 
        return //Si pasa los dos campos segui pasando hacia abajo
    }

    const { username, password} = req.body; // le decimos que requiera del formulario y lo guarde en la const, viene del formulario
    const sql = ` SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; // en caso de ser correcto se fija en la base de datos con el select, users viene de la tabla de sql llamada users y si se dan las dos condiciones
    connection.query(sql, (err, results) =>{ //results refiere a la consulta de la query// ejecutamos la sentencia, se llama callback de manera asincronica
        if(err) throw err; // lanzamos un error ,si se encontro coincidencia  como verdadero , se va guardar la variable del navegador y va permitir ingresar 
        if(results.length > 0){// busca alguna coincidencia mayor a 0
            req.session.loggein = true;
            req.session.username = username;
            res.redirect("/home");
        }else{
            res.send("Usuario o contraseña incorrecta")// si no hay concidencia viene para aca
        }
    })

    

});

session.get("/home", (req, res) => {
    if(req.session.loggein){
        res.render("home", { username: req.session.username})
    }else{
        res.redirect("/")
    }
});

session.get("/logout", (req, res) =>{ // si queremos salir que detruya la sesion y volvemos a inicio
        req.session.destroy();
        res.redirect("/");
    
});

module.exports = session;