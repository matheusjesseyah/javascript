/**
 * Calculo da média de 2 notas
 * Exemplo de uso da biblioteca prompt-sync
 * @author Matheus Jade Esseyah
 */

// importar pacotes
const prompt = require('prompt-sync')();

// variávies
let disciplina, nota1, nota2, media;

console.clear();
console.log("Calculo da média de 2 notas");

//entrada de dados
disciplina = prompt("Digite o nome da disciplina: ");
console.log(disciplina);
//console.log(typeof(disciplina));

//Number converte para tipo numerico
nota1 = Number(prompt("Digite a nota 1: "));
//console.log(nota1);
//console.log(typeof(nota1));
nota2 = Number(prompt("Digite a nota 2: "));

//processamento
media = (nota1 + nota2) / 2;

//saida
console.log(`Média: ${media.toFixed(1)}`)