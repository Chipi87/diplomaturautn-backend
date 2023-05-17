const { Router } = require("express");
const router = new Router();
const mysql = require('mysql');

//conexion a base de datos
//el nombre de la base de datos se va a llamar crud-node

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-node'
})
//se pone err porque es la sugerida por mysql

conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...')
});


//SELECT    
router.get(`/`, (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render(`../views/productos.hbs`, {
            result: results
        })
    })
})

//INSERTAR
// hacemos el save y guardamos en la variable data, todo va por el metodo post
router.post(`/save`, (req, res) => {
    let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
    // agregamos con el insert y ponemos el signo de ? porque va hacer anonima la carga
    let sql = "INSERT TO producto SET ?";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        //le hacemos un redirect para que inserte y vuelva a mostrar la tabla        
        res.redirect(`/`);
    })
})



module.exports = router;