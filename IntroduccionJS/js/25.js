const carrito = [
    {nombre : 'Monitor 20 Pulgadas', precio : 500},
    {nombre : 'Televisión', precio : 700},
    {nombre : 'Tablet', precio : 300},
    {nombre : 'Audifonos', precio : 200},
    {nombre : 'Teclado', precio : 50},
    {nombre : 'Celular', precio : 500},
    {nombre : 'Bocinas', precio : 300},
    {nombre : 'Laptop', precio : 800},
];

// For Each
carrito.forEach(producto => console.log(producto.nombre)); //Iterrar sobre arreglo con impresion en pantalla

// Map
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);  //Crear nuevo arreglo o filtrar 

console.log(arreglo2);