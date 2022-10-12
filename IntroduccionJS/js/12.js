// "use strict"; //Correr JavaScript en modo estricto
//Objects

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto); //.freeze No permite eliminar, agregar o cambiar elementos
//.seal No permite eliminar, agregar elementos pero si modificar los existentes

producto.imagen = 'imagen.jpg'


console.log(producto);