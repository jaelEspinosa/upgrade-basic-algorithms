
/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29}; */

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let precioTotal = toy1.price + toy2.price;

console.log('El precio total de '+toy1.name+' y '+toy2.name+' es: '+precioTotal)