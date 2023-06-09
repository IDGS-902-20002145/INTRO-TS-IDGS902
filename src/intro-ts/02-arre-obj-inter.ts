//Objetos, Arreglos, Interfaces

let vector1: Array<number> = [9, 8, 7, 6]
vector1.push(10)
vector1[1] = 22

for (let elemento of vector1) {
    console.log(elemento)
}

// El tipo de dato any nos deja poner en el cualquier tipo de dato
let mascotas = ['perro', 'gato', 100, true]



//Aqi definimos exactamente los tipos de datos que utilizara el arreglo 
let tem: (boolean | number | string)[] = ['aaaa', 100]

let nombres: string[] = ['Juan', 'Pedro', 'Mario']

//Interfaz 
interface Persona {
    nombre: string;
    grupo: string;
    edad: number;
    materias: string[];
    activo?: string;
}

const alumno: Persona = {
    nombre: "Sergio",
    grupo: 'IDGS92',
    edad: 28,
    materias: ['Español', 'Calculo']
}
alumno.activo = "inscrito"

//Imprimir el valor de la variable en la consola 
console.table(alumno)    