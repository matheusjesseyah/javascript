/**
 * JOKENPO
 * @author Matheus Jade Esseyah 
 */

//importação de pacotes
const prompt = require('prompt-sync')();

//variaveis
let jogador, computador;

//UX
console.clear();

//console.log("_______JoKenPo_______");
console.log("   ___       _   __          ______")     
console.log("  |_  |     | | / /          | ___ \\")    
console.log("    | | ___ | |/ /  ___ _ __ | |_/ /__")  
console.log("    | |/ _ \\|    \\ / _ \\ '_ \\|  __/ _ \\") 
console.log("/\\__/ / (_) | |\\  \\  __/ | | | | | (_) |")
console.log("\\____/ \\___/\\_| \\_/\\___|_| |_\\_|  \\___/") 
console.log("");
console.log("________________________________________");
console.log("");

console.log("1. PEDRA");
console.log("2. PAPEL");
console.log("3. TESOURA");
console.log("");

//entrada de dados
jogador= Number(prompt("Digite a opção desejada: "));
console.log("");

switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA");
        break;
    case 2:
        console.log("Jogador escolheu PAPEL");
        break;
    case 3:
        console.log("Jogador escolheu TESOURA");
        break;
    default:
        console.log("Opção invalida");
        break;
}

computador = Math.ceil(Math.random()*3);
switch (computador) {
    case 1:
        console.log("Computador escolheu PEDRA");
        break;
    case 2:
        console.log("Computador escolheu PAPEL");
        break;
    case 3:
        console.log("Computador escolheu TESOURA");
        break;
    default:
        console.log("Opção invalida");
        break;
}


if(jogador === computador){
    console.log("EMPATE");
} else if (((jogador === 1)&&(computador === 3)) || ((jogador === 2)&&(computador === 1)) || ((jogador === 3)&&(computador ===2))){
    console.log("Jogador ganhou");
} else {
    console.log("Computador ganhou");
}
console.log("");