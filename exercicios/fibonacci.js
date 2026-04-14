/**
 * Calculo da sequencia Fibonacci
 * Exemplo de uso da biblioteca prompt-sync
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

console.clear();
console.log("Calculo da sequencia Fibonacci");

let Fib = [];
let n, S;

//entrada
n=Number(prompt("Digite o numero da sequencia N: "));

//processamento
let resultado = "| 1 | 1 | ";
S=0;
Fib[0] = 1;
Fib[1] = 1;
for (let i = 2; i < n; i++) {
  Fib[i] = Fib[i-1]+Fib[i-2];
  resultado += Fib[i] + " | ";
  S += Fib[i];
  //console.log(Fib[i]);
}

//saida
console.log(resultado);
console.log(`o total da sequencia Febonacci = ${S}`);



