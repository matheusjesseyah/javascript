/**
 * Calculo de IMC
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

console.clear();
console.log("Calculo de IMC");

let peso, altura, imc;

//entrada de dados
peso = prompt("Digite o seu peso: ");
console.log(peso);

altura = prompt("Digite a sua altura: ");
console.log(altura);

//processamento
imc=peso/(altura*altura);

//saida
console.log(`IMC: ${imc.toFixed(2)}`);

switch (true) {
    case (imc<18.5):
        console.log("Baixo peso");
    break;
    case (imc<25):
        console.log("Peso Normal");
    break;
    case (imc<30):
        console.log("Sobrepeso");
    break;
    case (imc<35):
        console.log("Obesidade Grau I");
    break;
    case (imc<45):
        console.log("Obesidade Grau II");
    break;
    default:
        console.log("Obesidade Grau III");
    break;
}