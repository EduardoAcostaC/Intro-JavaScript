//Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario Autenticado'); //El promise se cumple
    }else {
        reject('NO se pudo iniciar sesion'); //El promise no se cumple
    }
});
//Mostrar resultado
usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado)
    })
    .catch( error => console.log(error))

//En los promises existen 3 valores:
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled : Ya se cumplio
//Reject : Se  ha rechazado o no se pudo cumplir