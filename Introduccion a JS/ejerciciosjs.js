//Ejercicio 1
let  miNombre = "Miguel Ángel"
console.log(miNombre);

//Ejercicio2
let  miApellido ='Serrano'
console.log(miApellido);

//Ejercicio 3
let  miEdad = 28
console.log(miEdad);

//Ejercicio 4
let  miMascota = "Iris"
console.log(miMascota);

//Ejercicio 5
const edadMascota = 4
console.log(edadMascota);

//Ejercicio 7
const nombreCompleto = miNombre +" "+ miApellido 
console.log(nombreCompleto);

//Ejercicio 8
let textoPresentacion = miNombre+", "+ miApellido+", "+miEdad+", "+miMascota+", "+nombreCompleto
console.log(textoPresentacion);

//Ejercicio 9
let sumaEdades = miEdad + edadMascota
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota
console.log(restaEdades);

let productoEdades = miEdad * edadMascota
console.log(productoEdades);

const divisionEdades = miEdad / edadMascota
console.log(divisionEdades);

//Ejercicio 10
let alumno = {
        genero: "Varon ",
        edad:28,
        nacionalidad: "Argentina",
        mascota:"Gato",
        comida: "Fideos",
}

console.table(alumno);
console.log(alumno.genero);
console.log(alumno.edad);
console.log(alumno.nacionalidad);
console.log(alumno.mascota);
console.log(alumno.comida);


//Ejercicio 11
const mascota = {
    genero:"Hembra",
    edad: 4,
    color: "Negro",
    nombre:"Iris",
    comidaFavorita:"Pescado",
}
console.table(mascota);
console.log(mascota.genero);
console.log(mascota.edad);
console.log(mascota.color);
console.log(mascota.nombre);
console.log(mascota.comidaFavorita);

//Ejercicio 12

let frutas =["Tomate","Naranja","Banana","Manzana","Limon"];
console.log(frutas);
console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4]);

//Ejercicio 13
let soyMayorDeEdad = Number(prompt("Ingresa tu edad"))>= 18;

console.log("Soy mayor de edad " + soyMayorDeEdad);

//Ejercicio 14
let numeros = ["uno","dos","tres","cuatro","cinco"];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//Ejercicio 15
let familia=[{
    papa:"Jorge",
    mama:"Marta",
    hermano:"Jorge",
    hermanoT:"Marcos",
    hermanoU:"Joaquin"

}, 
{
    tia:"Rebeca",
    prima:"Luna",
    tio:"Ariel",
    primo:"Ivan",
    primoS:"Lautaro",
   
},
{
    tioS:"Ismael",
    tiaS:"veronica",
    prima:"Debora",
    primaS:"Carolina",
    primot:"Roberto"
},
{
    abuelo:"Ricardo",
    abuela:"Mirta",
    abueloS:"Antonio",
    abuelaS:"Elsa",
    abueloB:"Roberto"
},
{
    primog:"Jorge",
    tiog:"Miguel",
    hermanog:"Luis",
    cuñada:"Soledad",
    sobrino:"Gabriel"
    
}
]
console.log(familia[0].papa,familia[1].tia,familia[2].tioS,familia[3].abuelo,familia[4].tiog);

//Ejercicio 16
let textoAleatorio = frutas[1] +" es del numero "+numeros[4] +" para mi tio " +familia[4].tiog;
console.log("El talle de la remera de color "+ textoAleatorio);

//Ejercicio 17
