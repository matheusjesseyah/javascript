/**
 * Conversão da temperatura em graus Fahrenheit a Celsius
 * Exemplo de uso da biblioteca prompt-sync
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

// variávies
let C,F;

console.clear();
console.log("Conversão da temperatura em graus Fahrenheit a Celsius");


//entrada de dados
F = Number(prompt("Digite a temperatura em Fahrenheit: "));
//console.log(F);

//processamento
C = (F - 32) * 5/9;

//saida
console.log(`${F}°F equivalem a ${C.toFixed(1)}°C`);