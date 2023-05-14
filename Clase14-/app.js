const express = require('express');
const hbs = require('hbs');
const router = require(`./router/formulario`)


const app = express ();

//Configurar hbs como motor de plantillas
app.set(`view engine`, `hbs`);

//Configurar directorio de vistas
app.set(`views`, __dirname + `/views` )


//configurar directorio de archivos estaticos
app.use(express.static(__dirname + '/public'));


//configurar middleware para procesar el cuerpo de las solicitudes
app.use(express.urlencoded({extended:false}));

app.use(`/`, router)

//escuchamos al puerto
app.listen(3000, () =>{
    console.log('Servidor iniciado en el puerto 3000');
})
