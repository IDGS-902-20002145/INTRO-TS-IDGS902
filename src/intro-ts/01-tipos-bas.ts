//Definición de una variable, se requiere la siguiente estructura
let nombre:string="RCR"

//Podemos agregar varios tipos de datos en una variable
let datos:string|number=95
datos = "IDGS902"

//Ddefinicion de un booleano
let vivo:boolean=false

//Definicion de un arreglo
let vector:number[]=[1,4,3]

//Agregar un elemento al arreglo mediante el indice
vector[2]=8
//Agregar un elemento al final del arreglo
vector.push(9)

for(let elemento of vector){
    console.log(elemento)
}

