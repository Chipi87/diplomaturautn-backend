//Database
const mysql = require(`mysql2`)


//configuracion de la conexion base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud-node17"
})

//Verificacion de la conexion base de datos

connection.connect((err) =>{
    if(err) throw err;
        console.log("Conectado a base de datos");
});


module.exports = connection;