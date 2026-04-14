/**
 * Calculo do volume de um aquario
 * Exemplo de uso da biblioteca prompt-sync
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

let largura, altura, comprimento, volume;
console.clear;
console.log("Calculo do volume de um aquario");

//entrada de dados
largura = Number(prompt("Digite a largura: "));
altura = Number(prompt("Digite a altura: "));
comprimento = Number(prompt("Digite o comprimento: "));

//processamento
volume = (comprimento * largura * altura) / 1000;

//saida

console.log(`O volume do aquario é: ${volume}`);
