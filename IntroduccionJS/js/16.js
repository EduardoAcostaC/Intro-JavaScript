//dDeclaracion de Funcion

function sumar(){
    console.log(10 + 10);
}

sumar();

//Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();

//IIFE proteccion de variables con lectura en otro archivos
(function(){
    console.log('Esto es una funcion');
})();