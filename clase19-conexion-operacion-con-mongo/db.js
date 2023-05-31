//es para hacer la conexion con MONGODB
const {MongoClient } = require ("mongodb");

//URL de conexion a MongoDB
const url = 'mongodb://localhost:27017';

//Nombre de la base de datos
const dbNombre = 'escuela';

//Conexion a MongoDB                  (useUnifiedTopology: significa que habilita la conexion de la tipologia de Mongodb(controladores))
const client = new MongoClient(url, { useUnifiedTopology: true }); //estamos intanciando el objeto con new y le indicamos como nos va a pasar los datos

//Funcion oara conectar a la base de datos

async function connect(){
    try{
        await client.connect();
        console.log('Conexion exitosa a MongoDB');
    }catch(error){
        console.error('Error al conectar a MongoDB', error);
    }
}

//exportar la funcion de conexion y el cliente de MongoDB

module.exports = {
    connect,
    client
}