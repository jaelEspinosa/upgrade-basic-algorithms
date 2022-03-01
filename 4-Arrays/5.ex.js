
/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop()
console.log('El primer elemento es: '+rickAndMortyCharacters[0]+ ', y el ultimo es: '+ rickAndMortyCharacters[rickAndMortyCharacters.length-1]);
