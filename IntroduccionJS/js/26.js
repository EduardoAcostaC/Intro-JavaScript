// This propiedades del objeto al que se hace referencia
//Arrow Function referencia a vemtana global

const reservacion = {
    nombre : 'Eduardo',
    apellido : 'Acosta',
    total : 5000,
    pagado : false, 
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre : 'Pedro',
    apellido : 'Acosta',
    total : 5000,
    pagado : false, 
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion();
reservacion2.informacion();
