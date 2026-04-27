/**
 * escolha de opções
 * @author Matheus Jade Esseyah
 */


// importar pacotes
const prompt = require('prompt-sync')();

let opcao;

console.clear();
console.log("Menu de opções");
console.log("");
console.log("1. Cadastro de clientes");
console.log("2. Cadastro de produtos");
console.log("3. Relatórios");
console.log("");
opcao = Number(prompt("Digite a opção desejada: "));
console.log("");

switch (opcao){
    case 1:
        console.clear();
        console.log("Tela de cadastro de clientes");
        break;
    case 2:
        console.clear();
        console.log("Tela de cadastro de produtos");
        break;
    case 3:
        console.clear();
        console.log("Impressão de relatórios");
        break;
    default:
        console.log("opção invalida");
        break;
}
console.log("______________________");
console.log("");