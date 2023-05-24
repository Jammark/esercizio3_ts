import {Professione} from './professione.js';

let professionista = new Professione(3, 25000, 500, 700,'libero professionista');
let artigiano = new Professione(1, 15000, 400, 500,'artigiano');
let commercialista = new Professione(2, 30000, 700, 800, 'commercialista');

console.log(professionista.stampa());
console.log('-------------------');
console.log(artigiano.stampa());
console.log('-------------------');
console.log(commercialista.stampa());
