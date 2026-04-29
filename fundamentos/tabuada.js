/**
 * Tabuada
 * @author Matheus Jade Esseyah
 */

const prompt = require('prompt-sync')();

console.clear();
console.log("tabuada");

let tabuada;

tabuada = Number(prompt("Digite a tabuada desejada: "));

for (let i=1; i<11; i++){
    console.log(`${i} x ${tabuada} = ${(i*tabuada)}`);
}
