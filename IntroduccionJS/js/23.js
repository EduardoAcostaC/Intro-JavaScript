//Switch
const metodoPago = 'Tarjeta';

switch(metodoPago) {   
    case 'Tarjeta' : 
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque' : 
        console.log('Pagaste con cheque');
        break;
    case 'efectivo' : 
        console.log('Pagaste con efectivo');
        break;
    default :
        console.log('Aun no has pagado');
        break;

}