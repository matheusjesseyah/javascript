/**
 * sorteio de uma carta
 * exemplo de uso de array para simplificar o codigo
 * @author Matheus Jade Esseyah
 */

const { random } = require('colors');

const prompt = require('prompt-sync')();

console.clear();

let nipes =["♠", "♥", "♦", "♣"];
let faces =["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//console.table(nipes);
//console.table(faces);

let press;


do {
    console.log("Sorteiro de de uma carta - ♠ ♥ ♦ ♣")
    prompt("Pressione a tecla [ENTER] para sortear uma carta")

    let nipe = nipes[Math.floor(Math.random()*4)];
    let face =  faces[Math.floor(Math.random()*13)]

    console.log(`|${face}${nipe}|`);

    console.log("__________________________")

    press = prompt("Deseja continuar?: 'S'/'N'")
    console.clear();
} while (press === "s" || press === "S")

