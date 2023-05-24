const express = require ("express");
const session = require("express-session");
const hbs = require("hbs");
const mysql = require(`mysql2`)
const port = 5001;


const movieRoutes = require("./routes/moviesRoutes");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: '123456',
    resave: false, // lo pasamos a false porque lo vamos a hacer desde la base de datos y no al navegador
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Fecha de expiración en una semana, viene default 1hs
    }
}));

//configuracion de la conexion base de datos

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud-node17"
})




app.get("/", (req, res) => { // llamamos que  nos mande a la vista index
    res.render("index");
});

app.post("/login", (req, res) => { //si los datos coinciden con la base de datos que los deje pasar, si es incorrecto que indique error
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

app.get("/home", (req, res) => {
    if(req.session.loggein){
        res.render("home", { username: req.session.username})
    }else{
        res.redirect("/")
    }
});

app.get("/logout", (req, res) =>{ // si queremos salir que detruya la sesion y volvemos a inicio
        req.session.destroy();
        res.redirect("/");
    
});

//ruta para API
app.use ('/movies', movieRoutes ); // es use porque lo vamos a usar y no es de lectura

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}/movies`);
});