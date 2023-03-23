// ----------------------EJERCICIOS-----------------
// 1: Clases y Objetos
// Crea una clase llamada "Producto" que tenga las siguientes propiedades: "nombre", "precio" y "cantidad". Luego, 
// crea un objeto a partir de la clase "Producto" y muestra en consola el nombre del producto, su precio y su cantidad.


class Producto{
    nombre: string;
    precio: number;
    cantidad: number;

 // con el this vamos llamando a cada parametro del constructor   
constructor(nombre:string,precio: number, cantidad: number){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;    
    }   
}

const producto1 = new Producto("Mouse", 50, 2)

console.log(`El producto ${producto1.nombre} tiene el precio ${producto1.precio} y nos quedan ${producto1.cantidad}`);

class Limpieza extends Producto{


constructor (nombre:string, precio:number, cantidad:number) {
    super(nombre,precio,cantidad)
}   

}

const desinfectante1 = new Limpieza ("Lavandina", 80 , 2)

console.log(`El precio de ${desinfectante1.nombre} es de ${desinfectante1.precio} y quedan en stock ${producto1.cantidad}`);