/** definir la clase empleado */

class Empleado {
    nombre: string;
    edad: number;
    salario: number;
    departamento: string;

constructor (nombre: string, edad: number, salario: number, departamento: string){
    this.nombre = nombre;
    this.edad = edad;
    this.salario = salario;
    this.departamento = departamento;
        }
    

calcularSalario():number {
    return this.salario;
    }
}

class Gerente extends Empleado{
    equipo: Empleado[];

    constructor(nombre: string, edad: number, salario: number, departamento: string, equipo:Empleado[]){
        super(nombre, edad, salario, departamento)  // reemplaza a this. del constructor, equipo no se hereda por eso se pone aparte, solo por ser herencia
        this.equipo = equipo;

    }
    
    calcularSalarioTotal(): number {
        let salarioTotal = super.calcularSalario();

        for(const empleado of this.equipo){
            salarioTotal += empleado.calcularSalario();
        }
        return salarioTotal;
    }

    // super nos permite acceder a una propiedad o metodo de la clase padre
    agregarEmpleado(empleado: Empleado):void{
        this.equipo.push(empleado);
    }
}

// creamos algunos empleados

const empleado1 = new Empleado( "Harry", 30, 3000, "Ventas");
const empleado2 = new Empleado( "Ron", 33, 3500, "Ventas");
const empleado3 = new Empleado( "Hermione", 40, 4000, "Ventas");

//Creamos un gerente y le asignamos el equipo de empleados

const gerente = new Gerente("Albus", 45, 6000, "ventas",[empleado1, empleado2]);

// mostrar en consola el salario total del gerente y su equipo


console.log(`El salario totaldel gerente y su equipo es : ${gerente.calcularSalarioTotal()}`);

//fin del practico


// agregamos otra consigna mas al problema

class Desarrollador extends Empleado{  //definimos clase
    proyectos:string [];

    constructor(nombre: string, edad: number, salarioBase:number, departamento:string, proyectos: string[]){    super(nombre, edad, salarioBase, departamento);
            this.proyectos = proyectos;}

//definimos metodo calcularSalarioTotal que calcular el salario total del desarrollador

    calcularSalarioTotal(): number {
        const bonoPorProyecto = 1000;

        const salarioTotal = this.salario + this.proyectos.length * bonoPorProyecto;

        return salarioTotal;
        
    }

    //agregamos metodo que nos permita añadir un nuevo proyecto

    agregarProyecto (proyecto: string): void{
        this.proyectos.push(proyecto);
    }
    

}

const desarrollador = new Desarrollador('Cosme', 30, 2000, 'Desarrollo', ['Sistema de pago', 'Aplicación movil'])




console.log(`El salario total del desarrollador es de  : ${desarrollador.calcularSalarioTotal()}`);
desarrollador.agregarProyecto(`Plataforma de e-learnih`)

console.log(`El salario total del desarrollador despues de agregar un nuevo proyecto: ${desarrollador.calcularSalarioTotal()}`);
