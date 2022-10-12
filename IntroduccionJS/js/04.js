//Strings 
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"; 
const producto2 = 'Monitor HD'; 

// const producto2 = String('Monitor de 30 Pulgadas');
// const producto3 = new String('Monitor de 350 Pulgadas');

console.log(tweet.length)
console.log(producto2)
// console.log(producto3)

//Métodos de Strings
//.length Contar caracteres que tiene el string

//indexOf Encontrar elemento en el string, -1 si no lo encuentra
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

//includes (retorna true o false)
console.log(tweet.includes('JavaScript'));

