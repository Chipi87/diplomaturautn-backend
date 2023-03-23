/** Definición de clase  * Clase PERSONA
 *      Propiedad-
 *          nombre : string
 *          edad: entero
 *          direccion: string
 *
 *
 *
 * Métodos:-
 *      saludar():     - Imprimir: "Hola, mi nombre es [nombre] y tengo[edad] años....."
 *      caminar()    - Imprimir: "Camimando hacia []"
 *
 *
 *
 *      Crear objeto persona1 de la clase persona
 * - nombre = "Cosme"
 * - edad = 45
 * - dirección "Calle 123"
 *
 *
 * Crear objeto persona2 de la clase persona
 * - nombre = "Homero"
 * - edad = 46
 * - dirección "Av. Siempre viva 123"
 *
 * Llamar a los métodos correspondientes de cada objeto:
 *
 * - persona1.saludar() ---> "Hola, mi nombre es Cosme y tengo 45 años....."
 * - persona1.caminar() ---> "Camimando hacia Calle 1234"
 * - persona2.saludar() ---> "Hola, mi nombre es Homero y tengo 46 años....."
 * - persona2.caminar() ---> "Camimando hacia Av Siempre viva 123"
 *
 * */
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, direccion) {
        //Creamos los objetos
        this.persona1 = new Persona("Cosme", 45, "Calle 123");
        this.persona2 = new Persona("Homero", 46, "Av Siempre viva 123");
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    Persona.prototype.caminar = function () {
        console.log("".concat(this.nombre, " est\u00E1 caminando hacia ").concat(this.direccion, "."));
    };
    return Persona;
}());
