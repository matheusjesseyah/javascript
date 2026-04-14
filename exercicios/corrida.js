/**
 * Calculo corrida de TAXI
 * Exemplo de uso da biblioteca prompt-sync
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

console.clear();
console.log("Calculo de valor da corrida");

// variávies
let distancia, valorFixo, valorTotal;

// entrada
distancia = Number(prompt("Digite a distancia percorrida (km): "));
valorFixo = Number(prompt("Digite o valor por quilômetro rodado : "));

//processamento
valorTotal = distancia * valorFixo;

//saida
console.log(`o valor total da corrida: R$${valorTotal}`);