//Creación de las colecciones:

//db.createCollection('alojamientos')
//db.createCollection('reservas')

//Insertamos datos para el ejercicio 1
db.alojamientos.insertMany([
    {
        nombre: "Hotel Barcelona",
        ubicacion: "Barcelona",
        precio: 80,
        numHabitaciones: 10,
        numHabitacionesDisponibles: 5,
    },
    {
        nombre: "Hotel Madrid",
        ubicacion: "Madrid",
        precio: 70,
        numHabitaciones: 8,
        numHabitacionesDisponibles: 4,
    },
    {
        nombre: "Hostal Sevilla",
        ubicacion: "Sevilla",
        precio: 50,
        numHabitaciones: 6,
        numHabitacionesDisponibles: 2,
    },
    ]);

//Operación CREATE para reservar alojamiento

const alojamientoId = "1234";
const usuarioId = "67890";
const fechaCheckIn = new Date("2023-06-01");
const fechaCheckOut = new Date("2023-06-08");
const precioTotal = 500;
db.reservas.insertOne({
    alojamientoId,
    usuarioId,
    fechaCheckIn,
    fechaCheckOut,
    precioTotal,
    estado: "pendiente",
});


//Operacion de READ para buscar alojamiento

const ubicacion = 'Madrid';
const maxPrecio = 100;
const numHabitaciones = 2;

db.alojamientos.find(
    { ubicacion, precio: {$lte: maxPrecio},
numHabitacionesDisponibles: { $gte: numHabitaciones }}
).toArray();


//Operación UPDATE para modificar una reserva

const reservaId = ObjectId('6438850bfc7d1c27cafa2c77');
const nuevaFechaCheckOut = new Date('2023-12-06');

db.reservas.updateOne(
    {_id:reservaId },
    {$set: { fechaCheckOut: nuevaFechaCheckOut}}
);

//Operacion DELETE para cancelar reserva

//const reservaId = ObjectId('6438850bfc7d1c27cafa2c77');
db.reservas.deleteOne({_id: reservaId });