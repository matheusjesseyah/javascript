/**
 * Desconto
 * @author Matheus Jade Esseyah
 */


let valor, porcentagem, desconto, total;

valor = 200;
porcentagem = 10;

desconto = (valor * porcentagem)/100;
total = valor - desconto;

console.log(`Valor da compra = ${valor}`)
console.log(`Desconto: ${porcentagem}%`)
//console.log(`${porcentagem}% de ${valor} = ${desconto}`)
console.log(`o valor a pagar ${total}`)

