//Ejercicio 2
//datos para crear:
db.createCollection("ventas")
db.ventas.insertMany([
    {
        producto: "Producto A",
        cantidad: 10,
        precioUnitario: 100,
        fecha: new Date("2022-10-01T12:00:00Z")
    },
    {
        producto: "Producto B",
        cantidad: 5,
        precioUnitario: 50,
        fecha: new Date("2022-10-01T13:00:00Z")
    },
    {
        producto: "Producto A",
        cantidad: 8,
        precioUnitario: 110,
        fecha: new Date("2022-10-02T10:00:00Z")
    },
    {
        producto: "Producto C",
        cantidad: 12,
        precioUnitario: 80,
        fecha: new Date("2022-10-05T09:00:00Z")
    },
    {
        producto: "Producto A",
        cantidad: 15,
        precioUnitario: 90,
        fecha: new Date("2022-10-15T18:00:00Z")
    },
    {
        producto: "Producto B",
        cantidad: 3,
        precioUnitario: 70,
        fecha: new Date("2022-10-20T14:00:00Z")
    },
    {
        producto: "Producto C",
        cantidad: 7,
        precioUnitario: 120,
        fecha: new Date("2022-10-28T11:00:00Z")
    }
    ])

//Agregacion

    db.ventas.aggregate([
        {
        $match: {
            fecha: {
            $gte: ISODate("2022-10-01T00:00:00Z"),
            $lt: ISODate("2022-11-01T00:00:00Z")
            }
        }
        },
        {
        $group: {
            _id: "$producto",
            totalCantidad: { $sum: "$cantidad" },
            totalIngresos: { $sum: { $multiply: ["$cantidad", "$precioUnitario"] } }
        }
        },
        {
        $sort: {
            totalIngresos: -1
        }
        }
    ])
    


