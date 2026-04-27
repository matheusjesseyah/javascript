/**
 * 
Simulador de Meta para Servidor
Contexto:
Um técnico de TI deseja comprar um servidor que custa um valor Alvo. Ele já possui um Saldo Inicial e planeja fazer Depósitos Mensais fixos (seguindo uma Progressão Aritmética).
O objetivo é criar um sistema que valide os dados e monitore essa economia mês a mês.

Regras de Entrada (Validação):
Os valores de entrada não podem ser textos ou caracteres.
Nenhum valor pode ser negativo ou igual a zero.
O Saldo Inicial deve ser obrigatoriamente menor que o Valor Alvo ("já tem o dinheiro, não há o que economizar").

Objetivo do Algoritmo:
Exibir a evolução do saldo mês a mês na mesma linha.
Interrupção Antecipada: Se o valor for atingido antes do período planejado, o programa deve parar a contagem imediatamente e informar em qual mês a meta foi batida.
Análise de Falha: Caso o período termine e a meta não seja atingida, o programa deve mostrar quanto dinheiro falta e quantos meses extras serão necessários para chegar ao objetivo.

Exemplos de Lógica (Casos de Teste)
Cenário 1: Sucesso Antecipado

Entradas: Inicial R$ 500 | Depósito R$ 400 | Meses 6 | Alvo R$ 1.200
Saída: 900 1300
Resultado: "Meta atingida no 2º mês! Compra liberada."

Cenário 2: Meta Não Atingida
Entradas: Inicial R$ 200 | Depósito R$ 100 | Meses 3 | Alvo R$ 1.000
Saída: 300 400 500
Resultado: "Meta não atingida. Faltam R$ 500 (Mais 5 meses necessários)."

Cenário 3: Entrada Inválida
Entradas: Inicial R$ -50 ou "Cem"
Resultado: "Erro: Insira apenas números positivos e válidos."

@author Matheus Jade Esseyah

 */


// importar pacotes
const prompt = require('prompt-sync')();
console.clear();


//entrada de dados
//meta
function valorMeta(){
    let control=false;
    while(control === false){
        let meta = Number(prompt("Digite o da meta: "));
        if (isNaN(meta) || meta <= 0) {
            console.log("Entrada inválida! Digite apenas números positivos.");
        } else {
            control=true;
            return meta;
        }
    }
}

//valor inicial
function valorInicial(meta){
    let control=false;
    while(control === false){
        let inicial = Number(prompt("Digite o valor inicial: "));
        if (isNaN(inicial) || inicial <= 0) {
            console.log("Entrada inválida! Digite apenas números positivos.");
        } else if (inicial >= meta) {
            console.log("Erro: O valor inicial não pode ser maior que a meta.");
        } else {
            control=true;
            return inicial;
        }
    }
}


//valor a depositar
function valorDepositar(){
    let control=false;
    while(control === false){
        let deposito = Number(prompt("Digite o valor a depositar: "));
        if (isNaN(deposito) || deposito <= 0) {
            console.log("Entrada inválida! Digite apenas números positivos.");
        } else {
            control=true;
            return deposito;
        }
    }
}

//meses
function periodo(){
    let control=false;
    while(control === false){
        let meses = Number(prompt("Digite o periódo dos meses: "));
        if (isNaN(meses) || meses <= 0) {
            console.log("Entrada inválida! Digite apenas números positivos.");
        } else {
            control=true;
            return meses;
        }
    }
}

//processamento
function progressaoAritmetica(inicial, meses, deposito, meta, control){
    let mes;
    let resultado = inicial;
    //let control = true;
    let print = "";
    for(let i=0; i<meses; i++){
        resultado += deposito;
        print += resultado + " | ";
        if (resultado>=meta){
            mes = meses;
            control = false;
            break;
        }
        return {resultado,  mes, control, print}
    }
    
}

let meses, deposito, valor, meta, inicial, falta;
let control = true;

meta = valorMeta();
console.log(meta);
inicial = valorInicial();
console.log(inicial);

valor = progressaoAritmetica(inicial, meses, deposito, control);


if(inicial>=meta){
    console.log("já tem o dinheiro, não há o que economizar");
}
else{
    deposito = valorDepositar();
    meses = periodo();
    
    if (valor.control === true){
        falta = meta - valor.resultado;
        console.log(valor.print);
        console.log(`Meta não atingida. Faltam R$${falta}`);
    }
    else{
    console.log(valor.print);
    console.log(`Meta atingida no ${mes}º mês! Compra liberada.`)
    }
}













