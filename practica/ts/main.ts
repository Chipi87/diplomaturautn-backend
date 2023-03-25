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


//3. Se requiere desarrollar una aplicación que permita gestionar la información de una empresa de envíos. 
// Para ello, se deberá crear una clase llamada "Envio" con las siguientes propiedades: "id", "destinatario", "direccion", 
// "fechaEnvio" y "fechaEntrega". Luego, se deberá crear una subclase llamada "Paquete" que herede de la clase "Envio" 
// y tenga una propiedad adicional llamada "peso". Agrega un método llamado "calcularCostoEnvio" que calcule 
// el costo de envío de un paquete en base al peso, y un método llamado "enviarPaquete" que permita enviar 
// un paquete a su destinatario. Finalmente, deberás crear un objeto a partir de la clase "Paquete" y 
// mostrar en consola el costo de envío del paquete.


class Envio{
    id:number;
    destinatarios:string;
    direccion:string;
    fechaEnvio:Date;
    fechaEntrega:Date;

constructor(id:number, destinarios:string, direccion:string, fechaEnvio:Date, fechaEntrega:Date){
    this.id = id;
    this.destinatarios = destinarios;
    this.direccion = direccion;
    this.fechaEnvio = fechaEnvio;
    this.fechaEntrega = fechaEntrega;
}

}


class Paquete extends Envio {
    peso: number;


    constructor(id:number, destinarios:string, direccion:string, fechaEnvio:Date, fechaEntrega:Date, peso:number){
        super(id, destinarios, direccion, fechaEnvio, fechaEntrega)
        this.peso = peso; 
    }
    
calcularCostoEnvio():number{
    let costo:Number = 0;
    if(this.peso<=5){
        costo = 50
    }else if(this.peso > 5){
        costo =100
    }else if(this.peso > 10){
        costo= 150
    }else{
        costo=200
    }
    return costo;

}
enviarPaquete():void{
    console.log(`el parquete se envio a ${this.destinatarios}`);
    


}


}

