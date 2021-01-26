// Algoritmo que calcula la edad que tienen en el año 2021

function saberLaEdad(fecha_nacimiento, fecha_actual){
    return fecha_actual - fecha_nacimiento;


}
let data = new Date();
let ano_nacimiento = prompt("Ingrese su año de nacimiento");
let anos_cumplidos = saberLaEdad(parseInt(ano_nacimiento), data.getFullYear());
console.log("Total de años cumplidos" , data.getFullYear(), anos_cumplidos);


