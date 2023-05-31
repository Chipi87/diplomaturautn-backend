const express = require ("express");
const hbs = require("hbs");
const configureSession = require("./routes/session");
const sessionRoutes = require("./routes/routes");
const personajesRoutes = require ('./routes/personajesRoutes')

const { connect } = require('./db') // llamamos a la base de datos ed mongo en el db

const port = 5001;

const movieRoutes = require("./routes/moviesRoutes");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configureSession(app);

//conexion a MongoDB
connect();


//ruta para API
//rutas sesiones
app.use ('/', sessionRoutes ); // es use porque lo vamos a usar y no es de lectura
//rutas para las peliculas
app.use("/movies", movieRoutes);

//ruta MongoDB
app.use('/personajes', personajesRoutes);

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}/movies`);
});