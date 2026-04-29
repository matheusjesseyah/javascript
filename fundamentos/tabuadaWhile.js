/**
 * TabuadaWhile
 * @author Matheus Jade Esseyah
 */

const prompt = require('prompt-sync')();

console.clear();
console.log("tabuada");

let tabuada, i;

tabuada = Number(prompt("Digite a tabuada desejada: "));
i=1;
while (i<11) {
    console.log(`${i} x ${tabuada} = ${(i*tabuada)}`);
    i++
}
