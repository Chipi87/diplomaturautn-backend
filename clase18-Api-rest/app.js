const express = require ("express");
const hbs = require("hbs");
const configureSession = require("./routes/session");
const sessionRoutes = require("./routes/routes")

const port = 5001;


const movieRoutes = require("./routes/moviesRoutes");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configureSession(app);



//ruta para API
app.use ('/', sessionRoutes ); // es use porque lo vamos a usar y no es de lectura

application.use("/movies", movieRoutes);

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}/movies`);
});