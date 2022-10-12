//Arrays

const numeros = [10, 20, 30, 40, 50];

// const arreglo = ["Hola", 10, true, null, {nombre : 'Eduardo', trabajo : 'Programador'},[1, 2, 3]];
// console.log(arreglo);

// //Acceder a valores de un arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

// //Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero){
//     console.log(numero)
// })

//Forma de agregar elementos al arreglo
numeros.push(60, 70, 80); //.push agrega al final del arreglo
numeros.unshift(-10, -20, -30); //.unshift agrega al inicio del arreglo

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// meses.pop(); //Elimina el elemento del final del arreglo
// meses.shift(); //Elimina el elemento primero del arreglo

meses.splice(2, 1);

console.table(meses);

//Rest Operator o Spread Operator
//sin modidicar el arreglo original para agregar 
const nuevoArreglo = [...meses, 'Junio'];
// const nuevoArreglo = [ 'Junio', ...meses];
console.log(nuevoArreglo);

