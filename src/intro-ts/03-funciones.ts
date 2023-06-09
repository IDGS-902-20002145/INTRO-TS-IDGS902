//Funciones 

//Por buenas practicas se debe poner el tipo de datos que va a recibir 
//y el tipo de dato que va a devolver, esta va despues del parentesis 

function sumar(a:number,b:number):number{
    return a+b
}

const sumaFlecha=(a:number,b:number):number =>{
    return a+b
}

function multiplicar(numero1:number, numero2?:number, base:number=2):number{
    return numero1*base
}

const resMult = multiplicar(5,10)


const resultado=sumar(3,5)

const rFlecha = sumaFlecha(5,5)
console.log(resultado, rFlecha, resMult)


interface Persona2{
     nombre:string;
     grupo:()=>void;
     edad:number;
}

//Se puede poner un objeto como parametro de una funcion
function UTL(alumno:Persona2, cuatrimestre:number):void{
    alumno.edad=23;
    console.log(alumno);
}

const NuevoAlumno:Persona2={nombre: 'Mario',
                           edad: 25,
                           grupo(){
                            console.log('IDGS123', this.edad);
                           }}

UTL(NuevoAlumno,4);

//Funcion anonima 
const funcionSumar = function(a:number,b:number):number{
    return a+b;
}
console.log(funcionSumar(4,9));

//Funcion con parametros opcionales
function clacular(n1:number, n2:number, n3?:number):number{
    if(n3){
        return n1+n2+n3; 
    }else{
        return n1+n2;
    }
}

console.log(clacular(3,2,5));
console.log(clacular(3,2));


//Funcion con parametros REST
function clacular2(...valores:number[]):number{
    let suma=0;
    for(let x=0; x<valores.length;x++){
        suma+=valores[x];
    }
    return suma;
}

console.log(clacular2(10,2,3,4));
console.log(clacular2(1,2));



