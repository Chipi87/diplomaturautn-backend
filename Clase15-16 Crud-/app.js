const express = require('express');
const hbs = require('hbs');

// para ver el puerto que esta corriendo
const port = 8085;


const app = express ();

//Configurar hbs como motor de plantillas, llamamos a hbs
app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + "/views/partials")

//Configurar directorio de vistas
app.set(`views`, __dirname + `/views`)


//configurar directorio de archivos estaticos, agrego assets que indica que va a usar de public y  darle formato a productos
app.use("/asesets",express.static(__dirname + '/public'));


//configurar middleware para procesar el cuerpo de las solicitudes
app.use(express.urlencoded({extended:false}));



app.use(require("./router/router"));

//escuchamos al puerto
app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});
