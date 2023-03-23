// ----------------------EJERCICIOS-----------------
// 1: Clases y Objetos
// Crea una clase llamada "Producto" que tenga las siguientes propiedades: "nombre", "precio" y "cantidad". Luego, 
// crea un objeto a partir de la clase "Producto" y muestra en consola el nombre del producto, su precio y su cantidad.

class Producto {
    nombre: string;
    precio: number;
    cantidad: number;
    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("mouse", 1000, 2);

console.log(`El producto ${producto1.nombre} cuesta ${producto1.precio} pesos y nos quedan ${producto1.cantidad}`);



// 2: Constructor
// Crea una clase llamada "Persona" que tenga las siguientes propiedades: "nombre", "edad" y "profesión". 
// El constructor de la clase debe recibir como parámetros el nombre y la edad, y la propiedad "profesión" 
// debe inicializarse con un valor por defecto de "Desconocido". Luego, crea un objeto a partir de la clase
//  "Persona" y muestra en consola sus propiedades.

class Persona {
    nombre: string;
    edad: number;
    profesion: string;
    constructor(nombre: string, edad: number, profesion: string = "desconocida"){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}

const lucas = new Persona("Lucas", 40);

console.log(`La persona es ${lucas.nombre}, su edad es ${lucas.edad} y de profesión ${lucas.profesion}`);


// 3: Herencia de Clases
// Crea una clase llamada "Animal" que tenga la propiedad "nombre" y el método "mover". Luego, crea una subclase 
// llamada "Perro" que herede de la clase "Animal" y tenga un método adicional llamado "ladrar". 
// Crea un objeto a partir de la clase "Perro" y muestra en consola su nombre y que está moviéndose y ladrando.

class Animal{
    nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    mover(){
        console.log(`${this.nombre} esta corriendo`);
    }
}

class Perro extends Animal{
constructor(nombre: string) {
super(nombre);
}

ladrar(){
console.log(`${this.nombre} esta ladrando`);
}
}

const perro1 = new Perro("Bengy"); perro1.mover(); perro1.ladrar();
//